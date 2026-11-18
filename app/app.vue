<script setup lang="ts">
import { profile } from '~/data/portfolio'

useSeoMeta({
  title: `${profile.name} · ${profile.headline}`,
  description: profile.description,
  ogTitle: `${profile.name} · ${profile.headline}`,
  ogDescription: profile.description,
  ogType: 'website'
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
