<template>
  <div
      class="p-default text-white flex justify-between items-center w-[100%] h-[100px] gap-4"
      :class="[
      'fixed top-0 w-full z-50 transition-colors duration-300',
      isScrolled ? 'bg-black/70 shadow-md' : 'bg-black'
    ]">
    <header-left :is-scrolled="isScrolled" />
    <header-right />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  const isScrolled = ref(false)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 100
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>


<style scoped>

</style>