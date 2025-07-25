<template>
  <section class="bg-black/90 pt-12">
    <h2 class="text-center text-[#FFD700] text-3xl font-bold mb-10">
      {{ t('services.title') }}
    </h2>

    <!-- Desktop -->
    <services-top class="hidden md:grid px-4" :services="services" />
    <!-- Mobile: horizontal scroll -->
    <services-mobile class="md:hidden flex px-4" :services="services" />

    <services-bot />
  </section>
</template>


<script setup lang="ts">

import type { ServiceModel } from "../../models/service-model";
import ServicesTop from "./services-top/services-top.vue";
import ServicesMobile from "./services-mobile/services-mobile.vue";
import ServicesBot from "./services-bot/services-bot.vue";

const { t } = useI18n()

const services: ServiceModel[] = [
  {
    id: 'object-guarding',
    title: t('services.objectGuarding.title'),
    icon: 'object-guard.webp',
    description: t('services.objectGuarding.description')
  },
  {
    id: 'cargo-escort',
    title: t('services.cargoEscort.title'),
    icon: 'cargo-escort.webp',
    description: t('services.cargoEscort.description')
  },
  {
    id: 'personal-security',
    title: t('services.personalSecurity.title'),
    icon: 'personal-security.webp',
    description: t('services.personalSecurity.description')
  },
  {
    id: 'event-security',
    title: t('services.eventSecurity.title'),
    icon: 'event-security.webp',
    description: t('services.eventSecurity.description')
  },
  {
    id: 'security-systems',
    title: t('services.securitySystems.title'),
    icon: 'security-systems.webp',
    description: t('services.securitySystems.description')
  },
  {
    id: 'fire-security-alarm',
    title: t('services.fireSecurityAlarm.title'),
    icon: 'fire-security-alarm.webp',
    description: t('services.fireSecurityAlarm.description')
  }
]


</script>


<style scoped>

</style>