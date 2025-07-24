<template>
  <section class="bg-[#F2F2F2] py-16 px-6 md:px-16">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-black mb-12">
      Профессиональная подготовка сотрудников охраны
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Левая колонка -->
      <div class="space-y-6 text-black text-lg leading-relaxed">
        <p>
          Особое внимание уделяется профессиональной подготовке сотрудников охраны.
          На работу принимаются сотрудники, имеющие опыт работы в сфере охранных услуг.
        </p>
        <p>
          Ежемесячно проводятся тестирования сотрудников охраны по проверке теоретических знаний и
          практические учения по действию в чрезвычайных ситуациях.
        </p>
        <p>
          За каждым объектом закрепляется начальник охраны, организующий и контролирующий работу
          личного состава на местах.
        </p>
      </div>

      <!-- Правая колонка -->
      <div class="flex flex-col items-center">
        <div class="w-full h-auto max-w-md bg-gray-800 rounded-lg shadow-lg">
          <NuxtImg
              src="/images/object-guard.jpg"
              class="w-full h-full object-contain rounded-lg"
              alt="График роста сотрудников"
          />
        </div>
        <p class="mt-4 text-black text-center text-sm md:text-base">
          Наши кадры постоянно растут, обеспечивая надежность и качество услуг.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>