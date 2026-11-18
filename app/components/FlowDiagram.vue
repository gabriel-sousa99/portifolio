<script setup lang="ts">
defineProps<{ steps: string[], human?: number[] }>()
</script>

<template>
  <ol class="flex flex-wrap items-center gap-y-2">
    <li v-for="(step, i) in steps" :key="step" class="flex items-center">
      <div
        class="flex h-9 items-center gap-2 rounded-lg border px-3"
        :class="human?.includes(i) ? 'border-primary/50 text-highlighted' : 'border-default text-default'"
      >
        <span class="tabular font-mono text-xs text-dimmed">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="text-sm">{{ step }}</span>
        <UIcon v-if="human?.includes(i)" name="i-lucide-user-check" class="size-4 text-primary" aria-label="Etapa com pessoa" />
      </div>
      <span v-if="i < steps.length - 1" class="mx-2 h-px w-4 bg-(--ui-border-accented)" aria-hidden="true" />
    </li>
  </ol>
</template>
