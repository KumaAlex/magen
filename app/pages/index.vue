<template>
  <div class="pt-[100px]">
    <Home id="home" class="scroll-mt-[100px]" />
    <About id="about" class="scroll-mt-[100px]" />
    <Services id="services" class="scroll-mt-[100px]" />
    <Staff/>
    <Partners id="partners" class="scroll-mt-[100px]" />
    <ConsultationForm id="contacts" class="scroll-mt-[100px]" />

    <a href="https://wa.me/77058957838" target="_blank" rel="noopener noreferrer">
      <PulseIcon>
        <Icon name="mdi:whatsapp" class="text-5xl text-white" />
      </PulseIcon>
    </a>
  </div>
</template>

<script setup lang="ts">
import Home from "./home/home.vue";
import About from "./about/about.vue";
import Services from "./services/services.vue";
import Staff from "./staff/staff.vue";
import Partners from "./partners/partners.vue";
</script>

<style scoped>

</style>