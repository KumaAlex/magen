<template>
  <section class="bg-white py-14">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-12">{{ t("partners.title") }}</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center">
        <img
            v-for="(company, index) in companies"
            :key="index"
            :src="company.logo"
            :alt="company.name"
            class="h-16 mx-auto lg:grayscale hover:grayscale-0 transition duration-300 ease-in-out hover:scale-140"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
const companies = [
  { name: 'АО «Казахтелеком»', logo: '/logo/logo-kazahtelekom.webp' },
  { name: 'Филиал «Шлюмберже Ложелко Инк» (нефтесервис)', logo: '/logo/schlumberger.webp' },
  { name: 'ТОО «JTI Kazakhstan» (Табачная фабрика)', logo: '/logo/JTI-logo-1.webp' },
  { name: 'ТОО «Лукойл Лубрикантс Центральная Азия»', logo: '/logo/Lukoil-logo.webp' },
  { name: 'АО «Aitas» (Макинская, Усть-Каменогорская, Капчагайская птицефабрика)', logo: '/logo/aitas-logo.webp' },
  { name: 'АО «Шымкентцемент» (цементный завод)', logo: '/logo/heidelbergCement-logo.webp' },
  { name: 'ТОО «Real Estate and Construction» (ТРЦ Достык Плаза)', logo: '/logo/dostykPlaza-logo.webp' },
  { name: 'ТОО «Мега Плаза» (ТРЦ Мега Силквей)', logo: '/logo/megaSilkway-logo.webp' },
  { name: 'ТОО «Леруа Мерлен Казахстан»', logo: '/logo/Leroymerlin-logo.webp' },
  { name: 'ТОО «Букмекерская контора Olimp.kz (Олимп.кз)»', logo: '/logo/olimpbet-logo.webp' },
  { name: 'ТОО «AB Restaurants» (сеть ресторанов ABR)', logo: '/logo/abr-logo.webp' },
  { name: 'АО «Компания ФудМастер»', logo: '/logo/foodMaster-logo.webp' },
]

</script>


<style scoped>

</style>