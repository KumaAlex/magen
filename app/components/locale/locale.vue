<template>
  <button
      class="px-3 py-1 rounded-xl border w-12"
      @click="cycleLanguage"
  >
    {{ locale.toUpperCase() }}
  </button>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const router = useRouter()

const cycleLanguage = () => {
  const codes = locales.value.map(l => l.code)
  const nextCode = codes[(codes.indexOf(locale.value) + 1) % codes.length]
  if (nextCode) {
    setLocale(nextCode)
    router.push('/')
  }
}

</script>
