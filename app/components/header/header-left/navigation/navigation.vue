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

const props = defineProps<{
  isScrolled: boolean
}>()

const navigationLinks: NavigationLinksModel[] = [
  { id: 'about', title: 'О Компании' },
  {
    id: 'services',
    title: 'Услуги',
    subLinks: [
      { id: 'object-guarding', title: 'Охрана объектов' },
      { id: 'cargo-escort', title: 'Охрана и сопровождение грузов' },
      { id: 'personal-security', title: 'Профессиональная личная охрана' },
      { id: 'event-security', title: 'Охрана массовых мероприятий' },
      { id: 'security-systems', title: 'Технические средства охраны' },
    ],
  },
  { id: 'partners', title: 'Партнеры' },
  { id: 'contacts', title: 'Консультация' },
];

</script>


<style scoped>

</style>