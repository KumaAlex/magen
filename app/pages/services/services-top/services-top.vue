<template>
  <div class="grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-6">
    <div
        v-for="(service, index) in services"
        :key="index"
        class="scroll-mt-[100px] bg-gray-900/80 text-white p-6 rounded-xl flex flex-col items-center text-center"
        :id="service.id"
    >
      <NuxtImg
          :src="`/images/services/${service.icon}`"
          class="h-50 text-[#FFD700] mb-4"
          :alt="service.icon"
      />
      <h3 class="text-[#FFD700] text-xl font-bold mb-2">{{ service.title }}</h3>
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