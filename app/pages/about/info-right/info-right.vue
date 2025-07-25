<template>
  <div class="md:col-span-3 space-y-6">
    <h2 class="text-3xl font-bold text-center text-black">
      {{ t('reuse.companyName') }}
    </h2>

    <div class="space-y-4 text-black text-base leading-relaxed">
      <div
          v-for="i in 5"
          :key="i"
      >
        {{ t(`about.shortInfo.${i - 1}`) }}
      </div>
    </div>

    <ul class="mt-6 space-y-3 text-black text-base">
      <li
          v-for="i in 6"
          :key="i"
          class="flex gap-2 items-center"
      >
        <span class="mt-1 w-3 h-3 bg-[#FFD700] rounded-full shrink-0"></span>
        {{ t(`about.features.${i - 1}`) }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>

</style>