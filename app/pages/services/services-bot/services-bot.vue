<template>
  <div class="flex mt-10 w-full py-16">
    <div class="p-default max-w-5xl mx-auto text-center">
      <h3 class="text-[#FFD700] text-2xl font-bold mb-8">
        При определении стоимости услуг учитываются факторы:
      </h3>
      <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-4 list-disc list-inside text-white text-left px-6">
        <li v-for="item in factors" :key="item" class="marker:text-[#FFD700]">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const factors = [
  'Специфика работы компании.',
  'Местонахождение.',
  'Режим работы.',
  'Количество сотрудников охраны.'
]
</script>

<style scoped>

</style>