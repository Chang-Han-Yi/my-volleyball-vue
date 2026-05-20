<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import SectionSubNav from '@/components/layout/SectionSubNav.vue'
import SectionPageHeader from '@/components/layout/SectionPageHeader.vue'
import { SECTIONS, type SectionKey } from '@/constants/navigation'

const route = useRoute()

const sectionKey = computed(() => route.meta.section as SectionKey)
const sectionConfig = computed(() => SECTIONS[sectionKey.value])
const pageTitle = computed(() => {
  const layerTitle = route.meta.layerTitle as string | undefined
  if (layerTitle) return `${sectionConfig.value.title} · ${layerTitle}`
  return sectionConfig.value.title
})
const pageSubtitle = computed(() => route.meta.subtitle as string | undefined)
const pageIcon = computed(() => route.meta.icon as string | undefined)
</script>

<template>
  <div class="section-layout pb-5">
    <div class="container pt-2">
      <SectionPageHeader :title="pageTitle" :subtitle="pageSubtitle" :icon="pageIcon" />
      <SectionSubNav :section="sectionKey" />
      <RouterView />
    </div>
  </div>
</template>
