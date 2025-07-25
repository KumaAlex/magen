<template>
  <div class="flex items-center gap-4">
    <a href="#home">
      <img
        src="/icons/logo.png"
        alt="Logo"
        class="w-[70px]"
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