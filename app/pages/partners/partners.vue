<template>
  <section class="bg-white py-14">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-12">С кем мы работали</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center">
        <img
            v-for="(company, index) in companies"
            :key="index"
            :src="company.logo"
            :alt="company.name"
            class="h-16 mx-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const companies = [
  { name: 'АО «Казахтелеком»', logo: '/logos/logo-kazahtelekom.png' },
  { name: 'Филиал «Шлюмберже Ложелко Инк» (нефтесервис)', logo: '/logos/schlumberger.jpg' },
  { name: 'ТОО «JTI Kazakhstan» (Табачная фабрика)', logo: '/logos/JTI-logo-1.png' },
  { name: 'ТОО «Лукойл Лубрикантс Центральная Азия»', logo: '/logos/Lukoil-logo.png' },
  { name: 'АО «Aitas» (Макинская, Усть-Каменогорская, Капчагайская птицефабрика)', logo: '/logos/aitas-logo.jpg' },
  { name: 'АО «Шымкентцемент» (цементный завод)', logo: '/logos/heidelbergCement-logo.png' },
  { name: 'ТОО «Real Estate and Construction» (ТРЦ Достык Плаза)', logo: '/logos/dostykPlaza-logo.png' },
  { name: 'ТОО «Мега Плаза» (ТРЦ Мега Силквей)', logo: '/logos/megaSilkway-logo.jpg' },
  { name: 'ТОО «Леруа Мерлен Казахстан»', logo: '/logos/Leroymerlin-logo.jpeg' },
  { name: 'ТОО «Букмекерская контора Olimp.kz (Олимп.кз)»', logo: '/logos/olimpbet-logo.png' },
  { name: 'ТОО «AB Restaurants» (сеть ресторанов ABR)', logo: '/logos/abr-logo.png' },
  { name: 'АО «Компания ФудМастер»', logo: '/logos/foodMaster-logo.jpg' },
]

</script>


<style scoped>

</style>