<template>
  <section class="bg-black/90 pt-12">
    <h2 class="text-center text-[#FFD700] text-3xl font-bold mb-10">
      С 2012 года мы рады предложить Вам следующие услуги:
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

const services: ServiceModel[] = [
  {
    id: 'object-guarding',
    title: 'Охрана объектов',
    icon: 'object-guard.jpg',
    description: 'Охрана различных объектов: бизнес-центров, складов, торговых точек и т.д.'
  },
  {
    id: 'cargo-escort',
    title: 'Охрана и сопровождение грузов',
    icon: 'cargo-escort.jpg',
    description: 'Гарантированная безопасность при транспортировке.'
  },
  {
    id: 'personal-security',
    title: 'Профессиональная личная охрана',
    icon: 'personal-security.jpg',
    description: 'Сопровождение VIP персон, политиков, бизнесменов.'
  },
  {
    id: 'event-security',
    title: 'Охрана массовых мероприятий',
    icon: 'event-security.webp',
    description: 'Безопасность на концертах, фестивалях, конференциях.'
  },
  {
    id: 'security-systems',
    title: 'Технические средства охраны',
    icon: 'security-systems.webp',
    description: 'Cистемы охранной и пожарной сигнализации, системы управления доступом, системы видеонаблюдения, инженерно-технические средства охраны.'
  }
]

</script>


<style scoped>

</style>