<template>
  <div
      class="overflow-x-auto gap-4 scroll-snap-x snap-x px-[15%] pb-4"
  >
    <div
        v-for="(service, index) in services"
        :key="'mobile-' + index"
        class="w-[70vw] min-h-[300px] bg-gray-900/80 text-white p-6 rounded-xl flex-shrink-0 snap-center text-center"
        :id="service.id"
    >
      <img
        :src="`/images/services/${service.icon}`"
        :alt="service.icon"
        class="h-[120px] sm:h-[160px] text-[#FFD700] mb-4 mx-auto rounded"
      />
      <h3 class="text-[#FFD700] text-lg font-bold mb-2">
        {{ service.title }}
      </h3>
      <p class="text-sm mb-2">{{ service.description }}</p>
    </div>
  </div>

</template>

<script setup lang="ts">
import type { ServiceModel } from "../../../models/service-model";

const props = defineProps<{
  services: ServiceModel[]
}>()
</script>

<style scoped>

</style>