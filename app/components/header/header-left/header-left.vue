<template>
  <div class="flex items-center gap-4">
    <a href="#home">
      <NuxtImg
          src="/icons/logo.png"
          width="70"
          alt="Logo"
      />
    </a>
    <Navigation :is-scrolled="isScrolled" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isScrolled: boolean
}>()
</script>

<style scoped>

</style>