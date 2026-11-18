<script setup lang="ts">
const props = defineProps<{ data: { year: string, value: number }[] }>()
const max = computed(() => Math.max(...props.data.map(d => d.value)))
const fmt = (n: number) => n.toLocaleString('pt-BR')
</script>

<template>
  <figure>
    <div class="flex h-44 items-end gap-3" role="img" :aria-label="'Commits por ano: ' + data.map(d => `${d.year}, ${fmt(d.value)}`).join('; ')">
      <div v-for="d in data" :key="d.year" class="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
        <span class="font-mono text-xs text-muted">{{ fmt(d.value) }}</span>
        <div class="w-full rounded-t-md bg-primary/80" :style="{ height: `${Math.max(4, (d.value / max) * 100)}%` }" />
      </div>
    </div>
    <div class="mt-2 flex gap-3 border-t border-default pt-2">
      <span v-for="d in data" :key="d.year" class="flex-1 text-center font-mono text-xs text-dimmed">{{ d.year }}</span>
    </div>
    <figcaption class="mt-3 text-xs text-dimmed">
      Commits de minha autoria por ano, sem merges, em repositórios de trabalho. 2026 conta até novembro.
    </figcaption>
  </figure>
</template>
