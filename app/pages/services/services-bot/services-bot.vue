<template>
  <div class="flex mt-10 w-full py-16">
    <div class="p-default max-w-5xl mx-auto text-center">
      <h3 class="text-[#FFD700] text-2xl font-bold mb-8">
        {{ t('services.bot.title') }}
      </h3>
      <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-4 list-disc list-inside text-white text-left px-6">
        <li
            v-for="i in 4"
            :key="i"
            class="marker:text-[#FFD700]"
        >
          {{ t(`services.bot.factors.${i - 1}`) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

const { t } = useI18n()

</script>

<style scoped>

</style>