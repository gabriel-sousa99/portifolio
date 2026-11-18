<script setup lang="ts">
// Painel ilustrativo com dados de exemplo: uma rota com posição ao vivo e o trace da requisição que a recebe.
const spans = [
  { name: 'POST /posicoes', ms: 84, start: 0, depth: 0 },
  { name: 'valida token', ms: 6, start: 0, depth: 1 },
  { name: 'grava posição', ms: 31, start: 8, depth: 1 },
  { name: 'calcula trecho', ms: 22, start: 40, depth: 1 },
  { name: 'envia por WebSocket', ms: 12, start: 64, depth: 1 }
]
const total = 84
</script>

<template>
  <figure class="overflow-hidden rounded-2xl border border-default bg-elevated" aria-label="Exemplo ilustrativo: rota com posição ao vivo e trace da requisição">
    <div class="flex h-10 items-center justify-between border-b border-default px-4">
      <span class="font-mono text-xs text-dimmed">equipe 07 · rota do dia</span>
      <span class="flex items-center gap-2 font-mono text-xs text-muted">
        <span class="size-1.5 rounded-full bg-primary" />ao vivo
      </span>
    </div>

    <svg viewBox="0 0 520 250" class="block w-full" role="img" aria-label="Mapa com a rota percorrida e a posição atual">
      <g fill="none" stroke="var(--ui-border)" stroke-width="1">
        <path d="M0 46 H520 M0 118 H520 M0 196 H520 M64 0 V250 M172 0 V250 M300 0 V250 M420 0 V250" />
        <path d="M0 230 L210 0 M250 250 L520 60" />
      </g>
      <g fill="var(--ui-bg-accented)" opacity="0.6">
        <rect x="76" y="58" width="84" height="48" rx="4" />
        <rect x="312" y="130" width="96" height="54" rx="4" />
        <rect x="184" y="130" width="58" height="54" rx="4" />
      </g>
      <path d="M40 212 L64 196 H172 V118 H300 L352 82 L420 82" fill="none" stroke="var(--ui-primary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M420 82 V46 H480" fill="none" stroke="var(--ui-text-dimmed)" stroke-width="1.5" stroke-dasharray="3 5" stroke-linecap="round" />
      <g fill="var(--ui-bg-elevated)" stroke="var(--ui-primary)" stroke-width="2">
        <circle cx="40" cy="212" r="4" />
        <circle cx="172" cy="118" r="4" />
        <circle cx="300" cy="118" r="4" />
      </g>
      <circle cx="420" cy="82" r="11" fill="var(--ui-primary)" opacity="0.18" />
      <circle cx="420" cy="82" r="5" fill="var(--ui-primary)" />
      <circle cx="480" cy="46" r="4" fill="none" stroke="var(--ui-text-dimmed)" stroke-width="1.5" />
      <g class="hidden sm:block" font-family="var(--font-mono)" font-size="11" fill="var(--ui-text-dimmed)">
        <text x="30" y="234">08:12 início</text>
        <text x="182" y="110">09:40</text>
        <text x="408" y="68" text-anchor="end">agora · 11,4 km</text>
        <text x="448" y="34">próxima</text>
      </g>
    </svg>

    <div class="border-t border-default px-4 py-4">
      <div class="mb-3 flex items-baseline justify-between font-mono text-xs">
        <span class="text-dimmed">trace da última posição</span>
        <span class="tabular text-muted">{{ total }} ms</span>
      </div>
      <ul class="space-y-1.5">
        <li v-for="s in spans" :key="s.name" class="grid grid-cols-[minmax(0,12.5rem)_1fr_3rem] items-center gap-3 font-mono text-xs">
          <span class="truncate" :class="s.depth ? 'pl-3 text-muted' : 'text-highlighted'">{{ s.name }}</span>
          <span class="relative h-1.5 rounded-full bg-accented/50">
            <span
              class="absolute inset-y-0 rounded-full"
              :class="s.depth ? 'bg-(--ui-text-dimmed)' : 'bg-(--ui-text-highlighted)'"
              :style="{ left: `${(s.start / total) * 100}%`, width: `${(s.ms / total) * 100}%` }"
            />
          </span>
          <span class="tabular text-right text-dimmed">{{ s.ms }} ms</span>
        </li>
      </ul>
    </div>
    <figcaption class="border-t border-default px-4 py-2 text-xs text-dimmed">Exemplo ilustrativo, com dados fictícios</figcaption>
  </figure>
</template>
