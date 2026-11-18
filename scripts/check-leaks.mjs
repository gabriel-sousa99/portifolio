// Trava local: confere se o código e o site gerado não citam termos da lista de bloqueio.
// A lista fica fora do repositório. Caminho: PORTIFOLIO_DENYLIST ou ~/.config/portifolio/denylist.txt
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, extname } from 'node:path'
import { homedir } from 'node:os'
import { execSync } from 'node:child_process'

const listPath = process.env.PORTIFOLIO_DENYLIST || join(homedir(), '.config/portifolio/denylist.txt')
if (!existsSync(listPath)) {
  console.error(`Lista de bloqueio ausente em ${listPath}. Verificação não executada.`)
  process.exit(2)
}
const terms = readFileSync(listPath, 'utf8').split('\n').map(t => t.trim().toLowerCase()).filter(Boolean)
// Confere tudo que o git vai versionar (rastreado ou novo, fora do .gitignore) e o site gerado.
const tracked = execSync('git ls-files -co --exclude-standard', { encoding: 'utf8' }).split('\n').filter(Boolean)
const roots = [...tracked, '.output/public']
const textExt = new Set(['.vue', '.ts', '.js', '.mjs', '.css', '.md', '.json', '.html', '.yml', '.svg', '.txt', ''])

function* walk(p) {
  if (!existsSync(p)) return
  if (statSync(p).isFile()) { yield p; return }
  for (const e of readdirSync(p)) yield* walk(join(p, e))
}

const hits = []
function scan(label, text) {
  const lower = text.toLowerCase()
  for (const t of terms) {
    const i = lower.indexOf(t)
    if (i !== -1) hits.push(`${label}: "${t}" → …${text.slice(Math.max(0, i - 30), i + t.length + 30).replace(/\s+/g, ' ')}…`)
  }
}
for (const r of roots) for (const f of walk(r)) if (textExt.has(extname(f)) && !f.endsWith('pnpm-lock.yaml')) scan(f, readFileSync(f, 'utf8'))
try { scan('git log', execSync('git log --all --format=%an%n%ae%n%B', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })) } catch {}

if (hits.length) {
  console.error(`${hits.length} ocorrência(s) de termo bloqueado:`)
  for (const h of hits.slice(0, 60)) console.error(' - ' + h)
  process.exit(1)
}
console.log(`Nenhum termo bloqueado encontrado (${terms.length} termos conferidos).`)
