<script setup lang="ts">
defineProps<{ steps: string[], human?: number[] }>()
</script>

<template>
  <ol class="flex flex-wrap items-stretch gap-y-3">
    <li v-for="(step, i) in steps" :key="step" class="flex items-center">
      <div
        class="flex h-full items-center gap-2.5 rounded-lg border px-3.5 py-2.5"
        :class="human?.includes(i) ? 'border-primary/60 bg-primary/10' : 'border-default bg-elevated/40'"
      >
        <span class="font-mono text-xs text-dimmed">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="text-sm font-medium text-highlighted">{{ step }}</span>
        <UIcon v-if="human?.includes(i)" name="i-lucide-user-check" class="size-4 text-primary" aria-label="Etapa com pessoa" />
      </div>
      <UIcon v-if="i < steps.length - 1" name="i-lucide-chevron-right" class="mx-1.5 size-4 shrink-0 text-dimmed" aria-hidden="true" />
    </li>
  </ol>
</template>
