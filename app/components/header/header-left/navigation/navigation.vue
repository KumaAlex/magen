<template>
  <ul class="hidden lg:flex gap-4">
    <li v-for="nav in navigationLinks" :key="nav.id" class="relative group">
      <a :href="`#${nav.id}`" class="flex items-center gap-1 hover:text-[#FFD700]">
        {{ nav.title }}
        <Icon
            v-if="nav.subLinks"
            name="mdi:chevron-down"
            class="text-xl transition-transform duration-300 group-hover:rotate-180"
        />
      </a>

      <div
          v-if="nav.subLinks && nav.subLinks.length"
          class="absolute left-[-16px] pt-7 w-48 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-x-2 group-hover:translate-x-0 z-50"
      >
        <ul
            :class="[
      isScrolled ? 'bg-black/70 shadow-md' : 'bg-black',
      'transition-colors duration-300 mt-2'
    ]"
        >
          <li
              v-for="(sub, index) in nav.subLinks"
              :key="`${sub.id}-${index}`"
              class="px-4 py-2 hover:bg-gray-600/50 hover:text-[#FFD700]"
          >
            <a :href="`#${sub.id}`">{{ sub.title }}</a>
          </li>
        </ul>
      </div>
    </li>
  </ul>

</template>

<script setup lang="ts">

import type { NavigationLinksModel } from "../../../../models/navigation-link-model";

const { t } = useI18n()

const props = defineProps<{
  isScrolled: boolean
}>()

const navigationLinks = computed<NavigationLinksModel[]>(() => [
  { id: 'about', title: t('components.navigation.about') },
  {
    id: 'services',
    title: t('components.navigation.services.title'),
    subLinks: [
      { id: 'object-guarding', title: t('components.navigation.services.object-guarding') },
      { id: 'cargo-escort', title: t('components.navigation.services.cargo-escort') },
      { id: 'personal-security', title: t('components.navigation.services.personal-security') },
      { id: 'event-security', title: t('components.navigation.services.event-security') },
      { id: 'security-systems', title: t('components.navigation.services.security-systems') },
      { id: 'fire-security-alarm', title: t('components.navigation.services.fire-security-alarm') },
    ],
  },
  { id: 'partners', title: t('components.navigation.partners') },
  { id: 'contacts', title: t('components.navigation.contacts') },
])

</script>


<style scoped>

</style>