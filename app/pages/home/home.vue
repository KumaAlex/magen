<template>
  <div class="h-[calc(100vh-100px)] bg-[linear-gradient(to_top,rgba(0,0,0,0.7),rgba(0,0,0,0)),url('/images/home/security-cameras.webp')] bg-no-repeat bg-cover bg-center text-white flex items-center justify-center px-4">
    <div class="text-center space-y-6">
      <h1 class="text-5xl md:text-7xl font-extrabold text-white">
        {{ t('reuse.companyName') }}
      </h1>
      <h2 class="text-2xl md:text-3xl text-[#FFD700] font-semibold tracking-wide">
        {{ t('home.subTitle') }}
      </h2>
      <p class="text-lg md:text-xl italic text-white">
        {{ t('home.slogan') }}
      </p>
      <a href="https://wa.me/77058957838" target="_blank" rel="noopener noreferrer" class="inline-block mt-4 px-8 py-4 text-lg font-bold bg-[#FFD700] text-black rounded-lg transition-all duration-300 hover:text-white hover:bg-[#e6c200] hover:scale-105">
        {{ t('home.button') }}
      </a>
    </div>
  </div>

</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>

</style>