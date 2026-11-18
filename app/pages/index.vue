<script setup lang="ts">
import type { ButtonProps, NavigationMenuItem, TabsItem } from '@nuxt/ui'
import { profile, stats, services, stack, exploring, evolution, commitsPerYear, timeline, cases, flows, practices, openSource } from '~/data/portfolio'

const nav: NavigationMenuItem[] = [
  { label: 'Entregas', to: '#entregas' },
  { label: 'Stack', to: '#stack' },
  { label: 'Trajetória', to: '#trajetoria' },
  { label: 'Casos', to: '#casos' },
  { label: 'Fluxos', to: '#fluxos' },
  { label: 'Código aberto', to: '#codigo-aberto' },
  { label: 'Contato', to: '#contato' }
]

const contactLinks = computed<ButtonProps[]>(() => {
  const links: ButtonProps[] = []
  if (profile.email) links.push({ label: 'Enviar e-mail', to: `mailto:${profile.email}`, icon: 'i-lucide-mail', size: 'xl' })
  if (profile.linkedin) links.push({ label: 'LinkedIn', to: profile.linkedin, target: '_blank', icon: 'i-simple-icons-linkedin', size: 'xl', color: 'neutral', variant: 'subtle' })
  links.push({ label: 'GitHub', to: profile.github, target: '_blank', icon: 'i-simple-icons-github', size: 'xl', color: 'neutral', variant: links.length ? 'subtle' : 'solid' })
  return links
})

const heroLinks: ButtonProps[] = [
  { label: 'Ver casos', to: '#casos', size: 'xl', trailingIcon: 'i-lucide-arrow-down' },
  { label: 'Falar comigo', to: '#contato', size: 'xl', color: 'neutral', variant: 'subtle' }
]

const flowTabs: TabsItem[] = flows.map((f, i) => ({ label: f.label, icon: f.icon, value: String(i), slot: 'flow' as const }))
</script>

<template>
  <div>
    <UHeader :title="profile.name" to="#topo">
      <template #title>
        <span class="font-mono text-sm"><span class="text-primary">~/</span>{{ profile.name.toLowerCase().replace(' ', '-') }}</span>
      </template>
      <UNavigationMenu :items="nav" variant="link" />
      <template #right>
        <UColorModeButton />
        <UButton :to="profile.github" target="_blank" icon="i-simple-icons-github" color="neutral" variant="ghost" aria-label="GitHub" />
      </template>
      <template #body>
        <UNavigationMenu :items="nav" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>

    <UMain>
      <div id="topo" class="relative">
        <div class="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <UPageHero
          :title="profile.title"
          :description="profile.description"
          :links="heroLinks"
          :ui="{ title: 'font-display text-4xl sm:text-6xl tracking-tight', container: 'relative' }"
        >
          <template #headline>
            <UBadge variant="subtle" size="lg" class="font-mono">
              <span class="mr-1 inline-block size-1.5 rounded-full bg-primary" />
              {{ profile.headline }}<template v-if="profile.availability"> · {{ profile.availability }}</template>
            </UBadge>
          </template>
        </UPageHero>

        <UContainer class="relative pb-16">
          <dl class="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-default bg-(--ui-border) lg:grid-cols-4">
            <div v-for="s in stats" :key="s.label" class="flex flex-col-reverse justify-end bg-default p-5">
              <dt class="mt-1 text-sm text-muted">{{ s.label }}</dt>
              <dd class="font-display text-3xl font-semibold text-highlighted">{{ s.value }}</dd>
            </div>
          </dl>
        </UContainer>
      </div>

      <UPageSection id="entregas" headline="Para quem contrata" title="O que eu entrego" description="Cinco tipos de trabalho que já fiz em produção.">
        <UPageGrid class="lg:grid-cols-2">
          <UPageCard v-for="s in services" :key="s.title" :icon="s.icon" :title="s.title" :description="s.description" variant="subtle" />
        </UPageGrid>
      </UPageSection>

      <UPageSection id="stack" headline="Stack" title="Tecnologias que uso" description="Só entra aqui o que usei em código real.">
        <div class="grid gap-4 sm:grid-cols-2">
          <UPageCard v-for="g in stack" :key="g.title" :icon="g.icon" :title="g.title" :description="g.note">
            <div class="flex flex-wrap gap-1.5">
              <UBadge v-for="t in g.items" :key="t" color="neutral" variant="subtle" class="font-mono">{{ t }}</UBadge>
            </div>
          </UPageCard>
        </div>
        <p class="text-sm text-muted">
          <span class="font-medium text-highlighted">Em provas de conceito:</span>
          {{ exploring.join(' · ') }}
        </p>
      </UPageSection>

      <UPageSection id="trajetoria" headline="Trajetória" title="De onde vim e para onde fui" description="A evolução técnica desde 2022, medida em código.">
        <div class="grid gap-10 lg:grid-cols-2">
          <UTimeline :items="timeline" :default-value="timeline.length - 1" />
          <div class="space-y-8">
            <UPageCard title="Ritmo de entrega" variant="subtle">
              <CommitChart :data="commitsPerYear" />
            </UPageCard>
            <UPageCard title="De → para" variant="subtle">
              <ul class="space-y-2.5">
                <li v-for="e in evolution" :key="e.to" class="flex items-center gap-2 font-mono text-sm">
                  <span class="text-muted line-through decoration-dimmed/60">{{ e.from }}</span>
                  <UIcon name="i-lucide-arrow-right" class="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span class="text-highlighted">{{ e.to }}</span>
                </li>
              </ul>
            </UPageCard>
          </div>
        </div>
      </UPageSection>

      <UPageSection id="casos" headline="Casos" title="Problemas que resolvi" description="Os casos estão sem nome de sistema ou de cliente. O que importa é o problema, a técnica e o resultado.">
        <div class="grid gap-4 lg:grid-cols-2">
          <UPageCard v-for="c in cases" :key="c.title" :icon="c.icon" :title="c.title" spotlight>
            <dl class="space-y-3 text-sm">
              <div>
                <dt class="font-mono text-xs uppercase tracking-wider text-dimmed">Problema</dt>
                <dd class="mt-0.5 text-muted">{{ c.problem }}</dd>
              </div>
              <div>
                <dt class="font-mono text-xs uppercase tracking-wider text-dimmed">O que fiz</dt>
                <dd class="mt-0.5 text-muted">{{ c.solution }}</dd>
              </div>
              <div>
                <dt class="font-mono text-xs uppercase tracking-wider text-primary">Resultado</dt>
                <dd class="mt-0.5 text-highlighted">{{ c.result }}</dd>
              </div>
            </dl>
            <div class="mt-4 flex flex-wrap gap-1.5 border-t border-default pt-4">
              <UBadge v-for="t in c.tech" :key="t" color="neutral" variant="outline" class="font-mono">{{ t }}</UBadge>
            </div>
          </UPageCard>
        </div>
      </UPageSection>

      <UPageSection id="fluxos" headline="Fluxos" title="Como o trabalho anda" description="Quatro fluxos que desenhei e uso. As etapas em destaque dependem de uma pessoa.">
        <UTabs :items="flowTabs" default-value="0" class="w-full" :ui="{ list: 'overflow-x-auto', trigger: 'min-w-max', label: 'overflow-visible' }">
          <template #flow="{ item }">
            <div class="mt-4 rounded-xl border border-default p-5 sm:p-6">
              <p class="mb-5 text-muted">{{ flows[Number(item.value)]!.description }}</p>
              <FlowDiagram :steps="flows[Number(item.value)]!.steps" :human="flows[Number(item.value)]!.human" />
            </div>
          </template>
        </UTabs>

        <UPageGrid>
          <UPageCard v-for="p in practices" :key="p.title" :icon="p.icon" :title="p.title" :description="p.description" variant="ghost" />
        </UPageGrid>
      </UPageSection>

      <UPageSection id="codigo-aberto" headline="Código aberto" title="Projetos no GitHub" description="Repositórios públicos com contribuição minha. Clique para ver o código.">
        <div class="grid gap-4 sm:grid-cols-2">
          <UPageCard v-for="r in openSource" :key="r.name" :icon="r.icon" :to="r.url" target="_blank" spotlight>
            <template #title>
              <span class="font-mono">{{ r.name }}</span>
              <UIcon name="i-lucide-arrow-up-right" class="ml-1 inline size-4 text-dimmed" aria-hidden="true" />
            </template>
            <template #description>
              <span class="font-mono text-xs uppercase tracking-wider text-primary">{{ r.kind }}</span>
              <span class="mt-2 block">{{ r.description }}</span>
            </template>
            <div class="flex flex-wrap gap-1.5">
              <UBadge v-for="t in r.tech" :key="t" color="neutral" variant="outline" class="font-mono">{{ t }}</UBadge>
            </div>
          </UPageCard>
        </div>
      </UPageSection>

      <UPageCTA
        id="contato"
        title="Tem uma vaga ou um projeto?"
        description="Posso assumir um sistema do zero, modernizar um legado ou automatizar um fluxo com agentes. Fale comigo."
        :links="contactLinks"
        variant="subtle"
        class="rounded-none"
      />
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">© {{ new Date().getFullYear() }} {{ profile.name }}. Feito com Nuxt e Nuxt UI.</p>
      </template>
      <template #right>
        <UButton :to="profile.github" target="_blank" icon="i-simple-icons-github" color="neutral" variant="ghost" aria-label="GitHub" />
      </template>
    </UFooter>
  </div>
</template>
