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
  { name: 'АО «Казахтелеком»', logo: '/icons/logo.png' },
  { name: 'Филиал «Шлюмберже Ложелко Инк» (нефтесервис)', logo: '/icons/logo.png' },
  { name: 'ТОО «JTI Kazakhstan» (Табачная фабрика)', logo: '/icons/logo.png' },
  { name: 'ТОО «Лукойл Лубрикантс Центральная Азия»', logo: '/icons/logo.png' },
  { name: 'АО «Aitas» (Макинская, Усть-Каменогорская, Капчагайская птицефабрика)', logo: '/icons/logo.png' },
  { name: 'АО «Шымкентцемент» (цементный завод)', logo: '/icons/logo.png' },
  { name: 'ТОО «Real Estate and Construction» (ТРЦ Достык Плаза)', logo: '/icons/logo.png' },
  { name: 'ТОО «Мега Плаза» (ТРЦ Мега Силквей)', logo: '/icons/logo.png' },
  { name: 'ТОО «Леруа Мерлен Казахстан»', logo: '/icons/logo.png' },
  { name: 'ТОО «Букмекерская контора Olimp.kz (Олимп.кз)»', logo: '/icons/logo.png' },
  { name: 'ТОО «AB Restaurants» (сеть ресторанов ABR)', logo: '/icons/logo.png' },
  { name: 'АО «Компания ФудМастер»', logo: '/icons/logo.png' },
  // { name: 'АО «Казахтелеком»', logo: '/logos/kazakhtelecom.svg' },
  // { name: 'Филиал «Шлюмберже Ложелко Инк» (нефтесервис)', logo: '/logos/schlumberger.svg' },
  // { name: 'ТОО «JTI Kazakhstan» (Табачная фабрика)', logo: '/logos/jti.svg' },
  // { name: 'ТОО «Лукойл Лубрикантс Центральная Азия»', logo: '/logos/lukoil.svg' },
  // { name: 'АО «Aitas» (Макинская, Усть-Каменогорская, Капчагайская птицефабрика)', logo: '/logos/aitas.svg' },
  // { name: 'АО «Шымкентцемент» (цементный завод)', logo: '/logos/shymkentcement.svg' },
  // { name: 'ТОО «Real Estate and Construction» (ТРЦ Достык Плаза)', logo: '/logos/dostykplaza.svg' },
  // { name: 'ТОО «TS Development Shymkent» (ТРЦ Шымкент Плаза)', logo: '/logos/shymkentplaza.svg' },
  // { name: 'ТОО «Мега Плаза» (ТРЦ Мега Силквей)', logo: '/logos/megasilkway.svg' },
  // { name: 'ТОО «Леруа Мерлен Казахстан»', logo: '/logos/leroymerlin.svg' },
  // { name: 'ТОО «Букмекерская контора Olimp.kz (Олимп.кз)»', logo: '/logos/olimp.svg' },
  // { name: 'ТОО «AB Restaurants» (сеть ресторанов ABR)', logo: '/logos/abrestaurants.svg' },
  // { name: 'ТОО «Эрнст энд Янг – консультационные услуги»', logo: '/logos/ey.svg' },
  // { name: 'АО «Компания ФудМастер»', logo: '/logos/foodmaster.svg' },
]

</script>


<style scoped>

</style>