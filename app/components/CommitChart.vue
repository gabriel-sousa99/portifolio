<script setup lang="ts">
const props = defineProps<{ data: { year: string, value: number }[] }>()
const max = computed(() => Math.max(...props.data.map(d => d.value)))
const fmt = (n: number) => n.toLocaleString('pt-BR')
</script>

<template>
  <figure>
    <div class="flex h-48 items-end gap-2" role="img" :aria-label="'Commits por ano: ' + data.map(d => `${d.year}, ${fmt(d.value)}`).join('; ')">
      <div v-for="(d, i) in data" :key="d.year" class="flex h-full flex-1 flex-col items-stretch justify-end gap-2">
        <span class="tabular text-center font-mono text-xs" :class="i === data.length - 1 ? 'text-highlighted' : 'text-dimmed'">{{ fmt(d.value) }}</span>
        <div
          class="rounded-t-sm"
          :class="i === data.length - 1 ? 'bg-primary' : 'bg-accented'"
          :style="{ height: `${Math.max(3, (d.value / max) * 100)}%` }"
        />
      </div>
    </div>
    <div class="flex gap-2 border-t border-default pt-2">
      <span v-for="d in data" :key="d.year" class="tabular flex-1 text-center font-mono text-xs text-dimmed">{{ d.year }}</span>
    </div>
    <figcaption class="mt-4 text-xs leading-5 text-dimmed">
      Commits de minha autoria por ano, sem merges, em repositórios de trabalho. 2026 conta até novembro
    </figcaption>
  </figure>
</template>
