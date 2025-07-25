<template>
  <div class="grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-6">
    <div
        v-for="(service, index) in services"
        :key="index"
        class="scroll-mt-[100px] bg-black/40 text-white p-6 rounded-xl flex flex-col items-center text-center shadow-lg"
        :id="service.id"
    >
      <img
        :src="`/images/services/${service.icon}`"
        :alt="service.icon"
        class="h-[200px] text-[#FFD700] mb-4 rounded"
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