<script setup lang="ts">
defineProps<{ id: string, title: string, description?: string }>()
</script>

<template>
  <section :id="id" class="border-t border-default">
    <UContainer class="grid gap-x-12 gap-y-8 py-16 lg:grid-cols-12 lg:py-24">
      <header class="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
        <p class="font-mono text-xs text-dimmed"><span class="text-primary">~/</span>{{ id }}</p>
        <h2 class="mt-3 text-3xl font-medium tracking-tight text-highlighted">{{ title }}</h2>
        <p v-if="description" class="mt-3 max-w-sm text-sm leading-6 text-muted">{{ description }}</p>
      </header>
      <div class="lg:col-span-8">
        <slot />
      </div>
    </UContainer>
  </section>
</template>
