<template>
  <div>
    <button @click="toggleMenu" class="lg:hidden text-white text-2xl z-50 relative">
      <Icon name="mdi:menu" />
    </button>

    <transition name="fade">
      <div
          v-if="isOpen"
          class="fixed inset-0 bg-black/60 z-40"
          @click="closeMenu"
      />
    </transition>

    <transition name="slide">
      <nav
          v-if="isOpen"
          class="fixed top-0 right-0 w-64 h-full bg-black z-50 shadow-lg flex flex-col p-4 space-y-4 overflow-y-auto"
      >
        <button @click="closeMenu" class="self-end text-white text-2xl">
          <Icon name="mdi:close" />
        </button>

        <ul class="flex flex-col space-y-2">
          <li v-for="nav in navigationLinks" :key="nav.id">
            <div>
              <template v-if="!nav.subLinks">
                <a
                    :href="`#${nav.id}`"
                    class="text-white hover:text-[#FFD700] flex justify-between items-center"
                    @click="closeMenu"
                >
                  {{ nav.title }}
                </a>
              </template>

              <template v-else>
                <button
                    type="button"
                    class="text-white hover:text-[#FFD700] flex justify-between items-center w-full"
                    @click="toggleSub(nav.id)"
                >
                  {{ nav.title }}
                  <Icon
                      name="mdi:chevron-down"
                      class="ml-2 transition-transform duration-300"
                      :class="{ 'rotate-180': openedSub === nav.id }"
                  />
                </button>
              </template>

              <!-- Подменю -->
              <transition name="submenu">
                <ul
                    v-if="nav.subLinks && openedSub === nav.id"
                    class="mt-2 ml-4 space-y-1 overflow-hidden"
                >
                  <li v-for="sub in nav.subLinks" :key="sub.id">
                    <a
                        href="#services"
                        class="text-white text-sm hover:text-[#FFD700]"
                        @click="closeMenu"
                    >
                      {{ sub.title }}
                    </a>
                  </li>
                </ul>
              </transition>

            </div>
          </li>

        </ul>
      </nav>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NavigationLinksModel } from "../../models/navigation-link-model";

const { t } = useI18n()

const isOpen = ref(false)
const openedSub = ref<string | null>(null)

const toggleMenu = () => (isOpen.value = !isOpen.value)
const closeMenu = () => {
  isOpen.value = false
  openedSub.value = null
}
const toggleSub = (id: string) => {
  openedSub.value = openedSub.value === id ? null : id
}

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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}

.submenu-enter-active,
.submenu-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
.submenu-enter-from,
.submenu-leave-to {
  max-height: 0;
  opacity: 0;
}
.submenu-enter-to,
.submenu-leave-from {
  max-height: 500px;
  opacity: 1;
}

</style>
