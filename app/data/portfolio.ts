// Todo o conteúdo do site fica aqui. Regra: só tecnologias e práticas, sem nome de sistema, empresa ou cliente.

export const profile = {
  name: 'Gabriel Sousa',
  headline: 'Desenvolvedor back-end e full stack sênior',
  // Texto curto de disponibilidade ao lado do título. Exemplo: 'aberto a freelas'. Vazio = oculto.
  availability: '',
  title: 'Construo sistemas web completos: API, interface, infraestrutura e agentes de IA',
  description:
    'Tenho 8 anos em TI e 5 em desenvolvimento, com mais de 4 em sistemas de saúde. Trabalho com PHP e Laravel, Vue e Quasar, Flutter com GPS e tempo real, Oracle e PostgreSQL, Rust e automação com agentes.',
  github: 'https://github.com/gabriel-sousa99',
  // Preencha para mostrar os botões de contato. Vazio = botão oculto.
  email: 'g.a.sousa@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/gabriel-augusto-sousa',
  location: 'Rio de Janeiro, Brasil'
}

export const stats = [
  { value: '8 anos', label: 'em TI, desde 2018' },
  { value: '5 anos', label: 'em desenvolvimento de software' },
  { value: '4+ anos', label: 'em sistemas de saúde' },
  { value: '10 mil+', label: 'commits em repositórios de trabalho desde 2022' }
]

export const services = [
  {
    icon: 'i-lucide-layers',
    title: 'Sistema web completo',
    description: 'API em Laravel, SPA em Vue e Quasar, banco relacional, autenticação e deploy em contêiner. Um responsável do banco até a tela.'
  },
  {
    icon: 'i-lucide-refresh-cw',
    title: 'Modernização de legado',
    description: 'Migração de PHP antigo (5.3, Symfony 2) para Laravel atual. O método tem 10 fases e compara legado e sistema novo em interface, dados e contrato.'
  },
  {
    icon: 'i-lucide-bot',
    title: 'Automação com agentes de IA',
    description: 'Servidores MCP, skills, hooks e esteiras de agentes que leem chamados, analisam código e abrem merge requests para revisão humana.'
  },
  {
    icon: 'i-lucide-map-pinned',
    title: 'Rastreamento e tempo real',
    description: 'App que captura GPS em segundo plano, API que recebe as posições e mapa que mostra as equipes ao vivo por WebSocket.'
  },
  {
    icon: 'i-lucide-database-zap',
    title: 'Dados e integrações',
    description: 'ETL em Rust, consultas e PL/SQL em Oracle, PostgreSQL, filas e integrações HTTP. Carga em lote com uso de memória previsível.'
  }
]

export const stack = [
  {
    icon: 'i-lucide-server',
    title: 'Backend',
    note: 'Arquitetura Action-Based: Actions, DTOs, Services e Contracts.',
    items: ['PHP 8.4', 'Laravel 13', 'APIs REST', 'Sanctum', 'Spatie Permission', 'Máquinas de estados', 'Node.js', 'Eloquent', 'Horizon', 'Octane', 'Inertia', 'Livewire', 'Symfony 2', 'PHP 5.3']
  },
  {
    icon: 'i-lucide-layout-dashboard',
    title: 'Frontend',
    note: 'SPAs administrativas com design system próprio.',
    items: ['Vue 3', 'Quasar 2', 'Nuxt 4', 'Nuxt UI', 'Pinia', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vitest']
  },
  {
    icon: 'i-lucide-cpu',
    title: 'Sistemas',
    note: 'Ferramentas de linha de comando, proxies e apps desktop.',
    items: ['Rust', 'tokio', 'axum', 'egui', 'clap', 'serde', 'Go', 'Python']
  },
  {
    icon: 'i-lucide-database',
    title: 'Dados',
    note: 'Modelagem, consulta e carga em lote.',
    items: ['Oracle', 'PL/SQL', 'PostgreSQL', 'MySQL', 'SQL Server', 'SQLite', 'Redis', 'Typesense']
  },
  {
    icon: 'i-lucide-container',
    title: 'Plataforma',
    note: 'Do commit ao deploy, com observabilidade.',
    items: ['Docker', 'Docker Swarm', 'Podman', 'Portainer', 'GitLab CI', 'GitHub Actions', 'Nginx', 'Caddy', 'Deploy blue-green', 'OpenTelemetry', 'Prometheus', 'Grafana', 'Tempo', 'Loki', 'Kibana APM']
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Qualidade',
    note: 'Gates automáticos antes de cada merge.',
    items: ['Pest', 'PHPUnit', 'PHPStan', 'Pint', 'Testes de arquitetura', 'SonarQube', 'OSV-Scanner', 'Renovate']
  },
  {
    icon: 'i-lucide-sparkles',
    title: 'IA aplicada',
    note: 'Agentes com limites verificáveis.',
    items: ['Claude Code', 'Model Context Protocol', 'Skills e plugins', 'Hooks', 'Subagentes', 'Orquestração de agentes', 'Automação de navegador via CDP']
  },
  {
    icon: 'i-lucide-smartphone',
    title: 'Mobile',
    note: 'Apps de campo com uso offline.',
    items: ['Flutter', 'Dart', 'Dio', 'sqflite', 'Firebase Cloud Messaging', 'Crashlytics']
  },
  {
    icon: 'i-lucide-map-pinned',
    title: 'Geolocalização e tempo real',
    note: 'Posição em segundo plano, mapas e eventos ao vivo.',
    items: ['GPS em segundo plano', 'Geolocator', 'Google Maps', 'Mapbox GL', 'WebSocket', 'Laravel Reverb', 'Laravel Echo', 'Cálculo de distância e rota']
  }
]

export const exploring = ['RabbitMQ', 'OCR com Tesseract', 'Proxy de LLM com streaming SSE', 'n8n']

export const evolution = [
  { from: 'PHP 5.3', to: 'PHP 8.4' },
  { from: 'Symfony 2', to: 'Laravel 13' },
  { from: 'Quasar 1', to: 'Vue 3 + Vite' },
  { from: 'Python + DuckDB', to: 'Rust' },
  { from: 'Triagem manual', to: 'Esteira de agentes' }
]

export const commitsPerYear = [
  { year: '2022', value: 377 },
  { year: '2023', value: 805 },
  { year: '2024', value: 1294 },
  { year: '2025', value: 1810 },
  { year: '2026', value: 5853 }
]

// Experiência profissional. O site mostra o setor de cada empresa, não o nome.
export const timeline = [
  {
    date: 'out 2018 – mai 2021',
    icon: 'i-lucide-server-cog',
    title: 'Assistente de TI · contact center',
    description: 'Suporte a servidores, máquinas virtuais, redes, Azure e Office 365. Ferramentas internas em PHP e MySQL. Relatórios e indicadores em Power BI.'
  },
  {
    date: 'mai 2021 – out 2021',
    icon: 'i-lucide-radar',
    title: 'Analista de monitoramento NOC · serviços de TI',
    description: 'Monitoramento de disponibilidade de sistemas e redes. Configuração de firewalls, switches, roteadores e políticas de SD-WAN.'
  },
  {
    date: 'out 2021 – jun 2022',
    icon: 'i-lucide-code',
    title: 'Analista de desenvolvimento · contact center',
    description: 'Sistemas em PHP, JavaScript e Node.js. Rotinas automatizadas com scripts e ETL. Painéis e relatórios SQL em PostgreSQL, MySQL e SQL Server. Fluxos de chatbot.'
  },
  {
    date: 'jun 2022 – atual',
    icon: 'i-lucide-rocket',
    title: 'Desenvolvedor full stack · saúde',
    description: 'Sistemas hospitalares internos com Laravel, Vue e Oracle, com SSO entre aplicações. Migração de Symfony para Laravel e de Vue 2 para Vue 3. Arquitetura e implementação da API de uma plataforma de atenção domiciliar. Observabilidade, deploy blue-green, gates de qualidade no pipeline, geolocalização em tempo real, ETL em Rust e agentes de IA com servidores MCP.'
  }
]

export const education = [
  { icon: 'i-lucide-graduation-cap', title: 'Pós-graduação em Engenharia de Software', description: 'Universidade Estácio de Sá · 2025' },
  { icon: 'i-lucide-graduation-cap', title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas', description: 'Universidade Estácio de Sá · 2021–2023' },
  { icon: 'i-lucide-circuit-board', title: 'Técnico em Eletrônica', description: 'Escola Técnica Pandiá Calógeras · 2014–2016' },
  { icon: 'i-lucide-badge-check', title: 'Certified Meraki Networking Associate', description: 'Cisco Meraki' },
  { icon: 'i-lucide-languages', title: 'Idiomas', description: 'Português nativo · Inglês intermediário e técnico' }
]

export const cases = [
  {
    icon: 'i-lucide-map-pinned',
    title: 'Monitoramento de equipes em tempo real',
    problem: 'A operação precisava ver onde cada profissional de campo estava e pagar a quilometragem pelo trajeto real.',
    solution: 'O app em Flutter captura o GPS em segundo plano, com um fork próprio do plugin de localização. A captura segue o estado da jornada: ela para na pausa e quando a jornada fecha. A API recebe as posições e transmite cada uma por WebSocket. A SPA mostra as equipes em um mapa ao vivo.',
    result: 'O painel mostra a posição das equipes ao vivo. A quilometragem sai do trajeto registrado, com testes para cada regra de cálculo.',
    tech: ['Flutter', 'Geolocator', 'Laravel Reverb', 'WebSocket', 'Mapbox GL', 'Octane', 'Oracle']
  },
  {
    icon: 'i-lucide-workflow',
    title: 'Esteira de agentes para chamados',
    problem: 'A triagem diária de chamados de TI era manual.',
    solution: 'Um orquestrador despacha 12 agentes especialistas. Eles leem o chamado, localizam o repositório, analisam o código e validam hipóteses em banco somente leitura. A spec passa por aprovação humana antes do código.',
    result: 'O chamado chega ao revisor como merge request, com spec, plano e evidências.',
    tech: ['Python', 'MCP', 'PostgreSQL', 'Podman', 'Caddy', 'Deploy blue-green']
  },
  {
    icon: 'i-lucide-zap',
    title: 'ETL em lote reescrito em Rust',
    problem: 'A carga em Python com DuckDB chegava a 37 GB de memória.',
    solution: 'Reescrevi a carga em Rust com leitura em blocos de 65.536 linhas, inferência de tipo por coluna, carga em massa e troca atômica de tabela. Um segundo binário monitora a carga e envia alertas por e-mail.',
    result: 'A carga roda em streaming, com memória limitada pelo tamanho do bloco.',
    tech: ['Rust', 'Oracle', 'PostgreSQL', 'clap', 'tracing']
  },
  {
    icon: 'i-lucide-radar',
    title: 'Observabilidade ao alcance do agente',
    problem: 'Investigar latência e erros exigia abrir várias telas.',
    solution: 'Escrevi um servidor MCP somente leitura com 17 ferramentas: 10 de APM e 7 de contêineres. Ele remove dado pessoal, limita cada resposta a 60 KB e usa chave com escopo mínimo.',
    result: 'O agente responde perguntas em linguagem natural com a evidência do trace.',
    tech: ['Python', 'MCP', 'httpx', 'Kibana APM', 'ES|QL', 'pytest']
  },
  {
    icon: 'i-lucide-arrow-left-right',
    title: 'Deploy blue-green com rollback',
    problem: 'Cada release interrompia o sistema para os usuários.',
    solution: 'Projetei o deploy com dois ambientes e alternância pelo proxy. Se a versão nova falha na verificação, o tráfego volta para a anterior de forma automática.',
    result: 'As releases entram com menos interrupção e com retorno automático.',
    tech: ['Docker', 'Nginx', 'GitLab CI']
  },
  {
    icon: 'i-lucide-wifi-off',
    title: 'Sincronização offline em app de campo',
    problem: 'O download de dados sobrescrevia registros feitos offline e as requisições chegavam fora de ordem.',
    solution: 'O app envia a fila local antes de baixar dados novos. Um interceptor HTTP mantém a ordem de envio.',
    result: 'A sincronização preserva a ordem dos registros feitos sem rede.',
    tech: ['Flutter', 'Dart', 'Dio', 'sqflite']
  },
  {
    icon: 'i-lucide-chart-line',
    title: 'Painéis de negócio e de banco',
    problem: 'Faltava visão de indicadores e de consultas lentas.',
    solution: 'Instrumentei a aplicação com OpenTelemetry e publiquei 15 métricas de negócio e 14 painéis de desempenho de banco, com spans de consulta lenta.',
    result: 'O time acompanha capacidade, prazo de atendimento e P99 das consultas.',
    tech: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Tempo', 'TraceQL']
  },
  {
    icon: 'i-lucide-refresh-cw',
    title: 'Método de migração de legado',
    problem: 'Sistemas em PHP antigo sem documentação nem testes.',
    solution: 'Criei um método em 10 fases, do inventário ao desligamento. Cada fase é uma skill de agente. A paridade compara legado e sistema novo em três camadas: interface, dados e contrato.',
    result: 'Cada onda de migração sai com spec, plano, testes e relatório de paridade.',
    tech: ['Laravel', 'Vue', 'Quasar', 'Pest', 'Symfony 2', 'Skills de agente']
  },
  {
    icon: 'i-lucide-shield',
    title: 'Banco de dados seguro para agentes',
    problem: 'Os agentes precisavam explorar o schema sem risco de alterar dados.',
    solution: 'Publiquei um catálogo somente leitura com SQL fixo e parametrizado, em mais de um ambiente, com bloqueio em duas camadas.',
    result: 'Os agentes consultam tabelas, views, PL/SQL e jobs sem permissão de escrita.',
    tech: ['Oracle', 'PL/SQL', 'MCP']
  },
  {
    icon: 'i-lucide-package',
    title: 'Ambiente local com PHP antigo e Oracle',
    problem: 'A ferramenta open source de ambiente local não atendia PHP antigo nem Oracle.',
    solution: 'Mantenho um fork em Go com mais de 150 commits: imagens de PHP 5.6 em diante com cliente Oracle, correções de segurança e CI que acompanha as versões do projeto original.',
    result: 'Um único ambiente em contêineres atende projetos novos e legados.',
    tech: ['Go', 'Podman', 'Quadlet', 'GitHub Actions']
  }
]

export const flows = [
  {
    label: 'Esteira de agentes',
    icon: 'i-lucide-bot',
    description: 'Do chamado ao merge request, com aprovação humana no meio e no fim.',
    steps: ['Chamado novo', 'Triagem', 'Análise de código e banco', 'Spec', 'Aprovação humana', 'Plano em tarefas', 'Código e revisão', 'Merge request'],
    human: [4, 7]
  },
  {
    label: 'CI/CD com gates',
    icon: 'i-lucide-git-merge',
    description: 'Nenhum merge passa sem teste, auditoria de dependências e quality gate.',
    steps: ['Commit convencional', 'Lint e testes', 'Auditoria de dependências', 'Quality gate', 'Build da imagem', 'Homologação', 'Produção'],
    human: []
  },
  {
    label: 'Observabilidade',
    icon: 'i-lucide-activity',
    description: 'A pergunta entra em linguagem natural e a resposta sai com evidência.',
    steps: ['Pergunta', 'Ferramenta MCP somente leitura', 'APM e contêineres', 'Remoção de dado pessoal', 'Limite de tamanho', 'Resposta com evidência'],
    human: []
  },
  {
    label: 'Migração de legado',
    icon: 'i-lucide-refresh-cw',
    description: 'Dez fases agrupadas em oito etapas. Decisões de negócio têm um portão próprio.',
    steps: ['Inventário', 'Documentação técnica', 'Documentação funcional', 'Decisões', 'Spec por onda', 'Execução com TDD', 'Paridade', 'Desligamento'],
    human: [3]
  }
]

export const practices = [
  { icon: 'i-lucide-git-branch', title: 'Git Flow e Conventional Commits', description: 'Branch por chamado, merge request com pipeline e histórico legível.' },
  { icon: 'i-lucide-flask-conical', title: 'Testes fora do banco real', description: 'Suítes em SQLite em memória. Uma delas tem 1.106 testes e roda em cerca de 2 minutos.' },
  { icon: 'i-lucide-lock', title: 'Guard rails de banco', description: 'Sem comando destrutivo fora do ambiente de teste. Correção de dados só como script revisável.' },
  { icon: 'i-lucide-file-text', title: 'Decisão registrada', description: 'ADR e spec antes do código. Revisão em duas rodadas.' },
  { icon: 'i-lucide-monitor-check', title: 'QA no navegador', description: 'Cenários executados no navegador antes da entrega, com relatório de etapas.' },
  { icon: 'i-lucide-key-round', title: 'Segredos fora do código', description: 'Credenciais em arquivo protegido e chaves com escopo mínimo.' }
]

// Repositórios públicos no GitHub. Aqui o nome pode aparecer, porque o código é aberto.
export const openSource = [
  {
    icon: 'i-lucide-package',
    name: 'lerd',
    kind: 'Fork · Go',
    url: 'https://github.com/gabriel-sousa99/lerd',
    description: 'Ambiente local de PHP em contêineres Podman. No meu fork: imagens de PHP 5.6 em diante com cliente Oracle, correções de segurança e release próprio que acompanha o projeto original.',
    tech: ['Go', 'Podman', 'Quadlet', 'GitHub Actions']
  },
  {
    icon: 'i-lucide-gauge',
    name: 'claude-code-usage-monitor',
    kind: 'Derivado de projeto aberto · Rust',
    url: 'https://github.com/gabriel-sousa99/claude-code-usage-monitor',
    description: 'App desktop nativo para Windows que mostra o uso do Claude Code. Minhas mudanças: tema, tradução para pt-BR, cache de token para não acordar o WSL a cada consulta e log de diagnóstico mais seguro.',
    tech: ['Rust', 'egui', 'serde']
  },
  {
    icon: 'i-lucide-map-pin',
    name: 'background_locator_fixed',
    kind: 'Fork · Kotlin',
    url: 'https://github.com/gabriel-sousa99/background_locator_fixed',
    description: 'Plugin Flutter que atualiza a localização em segundo plano. No meu fork: migração para o Kotlin embutido do Gradle, para o plugin compilar em projetos atuais.',
    tech: ['Kotlin', 'Flutter', 'Android']
  },
  {
    icon: 'i-lucide-spell-check',
    name: 'asd-ste100-skill',
    kind: 'Fork · Python',
    url: 'https://github.com/gabriel-sousa99/asd-ste100-skill',
    description: 'Skill de agente que aplica o Simplified Technical English. No meu fork: adaptação das regras para pt-BR e correção no lint de detecção de idioma.',
    tech: ['Python', 'Skills de agente']
  }
]
