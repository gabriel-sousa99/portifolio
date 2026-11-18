<script setup lang="ts">
import type { NavigationMenuItem, TabsItem } from '@nuxt/ui'
import { profile, stats, services, stack, exploring, evolution, commitsPerYear, timeline, education, cases, flows, practices, openSource } from '~/data/portfolio'

const nav: NavigationMenuItem[] = [
  { label: 'Entregas', to: '#entregas' },
  { label: 'Stack', to: '#stack' },
  { label: 'Trajetória', to: '#trajetoria' },
  { label: 'Casos', to: '#casos' },
  { label: 'Fluxos', to: '#fluxos' },
  { label: 'Código aberto', to: '#codigo-aberto' }
]

const flowTabs: TabsItem[] = flows.map((f, i) => ({ label: f.label, value: String(i), slot: 'flow' as const }))
const slug = profile.name.toLowerCase().replace(' ', '-')
</script>

<template>
  <div>
    <UHeader to="#topo" :ui="{ root: 'border-default bg-default/90' }">
      <template #title>
        <span class="font-mono text-sm font-medium"><span class="text-primary">~/</span>{{ slug }}</span>
      </template>
      <UNavigationMenu :items="nav" variant="link" color="neutral" />
      <template #right>
        <UColorModeButton color="neutral" variant="ghost" />
        <UButton to="#contato" label="Contato" color="neutral" size="sm" class="hidden sm:inline-flex" />
      </template>
      <template #body>
        <UNavigationMenu :items="nav" orientation="vertical" color="neutral" class="-mx-2.5" />
      </template>
    </UHeader>

    <UMain>
      <section id="topo">
        <UContainer class="grid items-center gap-x-12 gap-y-12 py-16 lg:grid-cols-12 lg:py-24">
          <div class="lg:col-span-6">
            <p class="font-mono text-xs text-dimmed">
              {{ profile.headline }} · {{ profile.location }}<template v-if="profile.availability"> · {{ profile.availability }}</template>
            </p>
            <h1 class="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.025em] text-highlighted sm:text-5xl lg:text-[3.5rem]">
              {{ profile.title }}
            </h1>
            <p class="mt-6 max-w-xl text-lg leading-7 text-muted">{{ profile.description }}</p>
            <div class="mt-8 flex flex-wrap items-center gap-3">
              <UButton to="#casos" label="Ver casos" color="neutral" size="xl" />
              <UButton to="#contato" label="Falar comigo" color="neutral" variant="link" size="xl" trailing-icon="i-lucide-arrow-right" />
            </div>
          </div>
          <div class="lg:col-span-6">
            <HeroPanel />
          </div>
        </UContainer>

        <UContainer class="pb-16 lg:pb-24">
          <dl class="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-default pt-8 lg:grid-cols-4">
            <div v-for="(s, i) in stats" :key="s.label" class="flex flex-col-reverse justify-end">
              <dt class="mt-2 text-sm leading-5 text-muted">{{ s.label }}</dt>
              <dd class="tabular text-3xl font-medium tracking-tight" :class="i === stats.length - 1 ? 'text-primary' : 'text-highlighted'">{{ s.value }}</dd>
            </div>
          </dl>
        </UContainer>
      </section>

      <SectionBlock id="entregas" title="O que eu entrego" description="Cinco tipos de trabalho que já fiz em produção">
        <ol class="divide-y divide-default border-y border-default">
          <li v-for="(s, i) in services" :key="s.title" class="grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[2rem_14rem_1fr]">
            <span class="tabular font-mono text-xs leading-6 text-dimmed">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="font-medium text-highlighted">{{ s.title }}</h3>
            <p class="text-sm leading-6 text-muted">{{ s.description }}</p>
          </li>
        </ol>
      </SectionBlock>

      <SectionBlock id="stack" title="Tecnologias que uso" description="Só entra aqui o que usei em código real">
        <dl class="divide-y divide-default border-y border-default">
          <div v-for="g in stack" :key="g.title" class="grid gap-x-8 gap-y-2 py-3 sm:grid-cols-[11rem_1fr]">
            <dt>
              <span class="font-medium text-highlighted">{{ g.title }}</span>
              <span class="mt-1 block text-xs leading-5 text-dimmed">{{ g.note.replace(/\.$/, '') }}</span>
            </dt>
            <dd class="flex flex-wrap content-start gap-x-2 gap-y-2">
              <span v-for="t in g.items" :key="t" class="rounded-md border border-default px-2 py-0.5 font-mono text-xs leading-5 text-default">{{ t }}</span>
            </dd>
          </div>
          <div class="grid gap-x-8 gap-y-2 py-3 sm:grid-cols-[11rem_1fr]">
            <dt class="font-medium text-highlighted">Em provas de conceito</dt>
            <dd class="text-sm leading-6 text-muted">{{ exploring.join(' · ') }}</dd>
          </div>
        </dl>
      </SectionBlock>

      <SectionBlock id="trajetoria" title="De onde vim e para onde fui" description="Do suporte e das redes até a arquitetura de sistemas. O site mostra o setor de cada empresa, não o nome.">
        <ol class="divide-y divide-default border-y border-default">
          <li v-for="t in [...timeline].reverse()" :key="t.date" class="grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[11rem_1fr]">
            <span class="tabular font-mono text-xs leading-6 text-dimmed">{{ t.date }}</span>
            <div>
              <h3 class="font-medium text-highlighted">{{ t.title }}</h3>
              <p class="mt-1 text-sm leading-6 text-muted">{{ t.description }}</p>
            </div>
          </li>
        </ol>

        <div class="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-[3fr_2fr]">
          <div>
            <h3 class="mb-6 font-medium text-highlighted">Ritmo de entrega</h3>
            <CommitChart :data="commitsPerYear" />
          </div>
          <div>
            <h3 class="mb-6 font-medium text-highlighted">O que troquei pelo caminho</h3>
            <ul class="space-y-3">
              <li v-for="e in evolution" :key="e.to" class="grid grid-cols-[1fr_1rem_1fr] items-center gap-2 font-mono text-xs">
                <span class="text-dimmed">{{ e.from }}</span>
                <span class="h-px bg-(--ui-border-accented)" aria-hidden="true" />
                <span class="text-highlighted">{{ e.to }}</span>
              </li>
            </ul>
          </div>
        </div>

        <h3 class="mb-2 mt-12 font-medium text-highlighted">Formação</h3>
        <ul class="divide-y divide-default border-y border-default">
          <li v-for="e in education" :key="e.title" class="grid gap-x-8 py-3 text-sm sm:grid-cols-[1fr_auto]">
            <span class="text-default">{{ e.title }}</span>
            <span class="text-dimmed">{{ e.description }}</span>
          </li>
        </ul>
      </SectionBlock>

      <SectionBlock id="casos" title="Problemas que resolvi" description="Os casos estão sem nome de sistema ou de cliente. Clique em um caso para ver o problema e o que fiz.">
        <div class="divide-y divide-default border-y border-default">
          <details v-for="(c, i) in cases" :key="c.title" :open="i === 0" class="group">
            <summary class="grid cursor-pointer list-none grid-cols-[2.25rem_1fr_1.25rem] items-baseline gap-y-1 py-5 outline-none transition-colors duration-150 hover:bg-elevated focus-visible:bg-elevated sm:-mx-3 sm:rounded-lg sm:px-3 [&::-webkit-details-marker]:hidden">
              <span class="tabular font-mono text-xs text-dimmed">{{ String(i + 1).padStart(2, '0') }}</span>
              <span>
                <span class="block text-lg font-medium leading-7 text-highlighted">{{ c.title }}</span>
                <span class="mt-1 block text-sm leading-6 text-muted group-open:hidden">{{ c.result }}</span>
              </span>
              <UIcon name="i-lucide-plus" class="size-4 self-center text-dimmed transition-transform duration-150 group-open:rotate-45" aria-hidden="true" />
            </summary>
            <div class="pb-8 pl-9">
              <dl class="grid gap-x-8 gap-y-4 text-sm leading-6 md:grid-cols-[2fr_3fr_2fr]">
                <div>
                  <dt class="text-xs text-dimmed">Problema</dt>
                  <dd class="mt-1 text-muted">{{ c.problem }}</dd>
                </div>
                <div>
                  <dt class="text-xs text-dimmed">O que fiz</dt>
                  <dd class="mt-1 text-muted">{{ c.solution }}</dd>
                </div>
                <div>
                  <dt class="text-xs text-primary">Resultado</dt>
                  <dd class="mt-1 text-highlighted">{{ c.result }}</dd>
                </div>
              </dl>
              <p class="mt-4 font-mono text-xs leading-5 text-dimmed">{{ c.tech.join(' · ') }}</p>
            </div>
          </details>
        </div>
      </SectionBlock>

      <SectionBlock id="fluxos" title="Como o trabalho anda" description="Quatro fluxos que desenhei e uso. As etapas com contorno dependem de uma pessoa.">
        <UTabs :items="flowTabs" default-value="0" color="neutral" variant="link" class="w-full" :ui="{ list: 'overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden', trigger: 'min-w-max' }">
          <template #flow="{ item }">
            <div class="pt-6">
              <p class="mb-5 text-sm leading-6 text-muted">{{ flows[Number(item.value)]!.description.replace(/\.$/, '') }}</p>
              <FlowDiagram :steps="flows[Number(item.value)]!.steps" :human="flows[Number(item.value)]!.human" />
            </div>
          </template>
        </UTabs>

        <h3 class="mb-2 mt-12 font-medium text-highlighted">Práticas fixas</h3>
        <dl class="grid gap-x-12 border-t border-default sm:grid-cols-2">
          <div v-for="p in practices" :key="p.title" class="border-b border-default py-4">
            <dt class="text-sm font-medium text-highlighted">{{ p.title }}</dt>
            <dd class="mt-1 text-sm leading-6 text-muted">{{ p.description }}</dd>
          </div>
        </dl>
      </SectionBlock>

      <SectionBlock id="codigo-aberto" title="Projetos no GitHub" description="Repositórios públicos com contribuição minha">
        <ul class="divide-y divide-default border-y border-default">
          <li v-for="r in openSource" :key="r.name">
            <a :href="r.url" target="_blank" rel="noopener" class="group grid gap-x-8 gap-y-1 py-5 outline-none transition-colors duration-150 hover:bg-elevated focus-visible:bg-elevated sm:grid-cols-[16rem_1fr_1.5rem] sm:px-3 sm:-mx-3 sm:rounded-lg">
              <div>
                <span class="font-mono text-sm font-medium text-highlighted">{{ r.name }}</span>
                <span class="mt-1 block text-xs text-dimmed">{{ r.kind }}</span>
              </div>
              <p class="text-sm leading-6 text-muted">{{ r.description }}</p>
              <UIcon name="i-lucide-arrow-up-right" class="hidden size-4 text-dimmed transition-colors duration-150 group-hover:text-primary sm:block" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </SectionBlock>

      <section id="contato" class="border-t border-default bg-muted">
        <UContainer class="grid gap-x-12 gap-y-8 py-16 lg:grid-cols-12 lg:py-24">
          <div class="lg:col-span-7">
            <p class="font-mono text-xs text-dimmed"><span class="text-primary">~/</span>contato</p>
            <h2 class="mt-3 text-3xl font-medium tracking-tight text-highlighted sm:text-4xl">Tem uma vaga ou um projeto?</h2>
            <p class="mt-4 max-w-xl leading-7 text-muted">Posso assumir um sistema do zero, modernizar um legado ou automatizar um fluxo com agentes.</p>
          </div>
          <div class="flex flex-col items-start justify-end gap-3 lg:col-span-5 lg:items-end">
            <UButton v-if="profile.email" :to="`mailto:${profile.email}`" :label="profile.email" icon="i-lucide-mail" color="neutral" size="xl" />
            <div class="flex gap-5">
              <UButton v-if="profile.linkedin" :to="profile.linkedin" target="_blank" label="LinkedIn" color="neutral" variant="link" trailing-icon="i-lucide-arrow-up-right" class="px-0" />
              <UButton :to="profile.github" target="_blank" label="GitHub" color="neutral" variant="link" trailing-icon="i-lucide-arrow-up-right" class="px-0" />
            </div>
          </div>
        </UContainer>
      </section>
    </UMain>

    <footer class="border-t border-default">
      <UContainer class="flex flex-wrap items-center justify-between gap-2 py-6 text-xs text-dimmed">
        <span>© {{ new Date().getFullYear() }} {{ profile.name }}</span>
        <span class="font-mono">Nuxt · Nuxt UI · Vercel</span>
      </UContainer>
    </footer>
  </div>
</template>
