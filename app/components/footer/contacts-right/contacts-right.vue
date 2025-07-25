<template>
  <div class="flex flex-col justify-between space-y-4">
    <div class="space-y-2 text-sm">
      <div class="flex items-center gap-3">
        <Icon name="mdi:map-marker" class="text-2xl text-gray-200" />
        <span>{{ t("reuse.address") }}</span>
      </div>
      <div class="flex items-center gap-3">
        <Icon name="mdi:phone" class="text-2xl text-gray-200" />
        <a href="tel:+77273131366">{{  t("reuse.office")  }}: +7 (727) 313-13-66</a>
      </div>
      <div class="flex items-center gap-3">
        <Icon name="mdi:cellphone-iphone" class="text-2xl text-gray-200" />
        <a href="tel:+77058957838">{{  t("reuse.mobileShort")  }}: +7 (705) 895-78-38</a>
      </div>
      <div class="flex items-center gap-3">
        <Icon name="mdi:email-edit-outline" class="text-2xl text-gray-200" />
        <a href="mailto:info@magen.kz">info@magen.kz</a>
      </div>
      <div class="flex items-center gap-3">
        <Icon name="mdi:web" class="text-2xl text-gray-200" />
        <a href="https://www.magen.kz" target="_blank" rel="noopener noreferrer">www.magen.kz</a>
      </div>
    </div>

    <div class="pt-6 border-t border-gray-700 text-xs text-gray-400">
      <p class="italic mb-1">{{ t('home.slogan') }}</p>
      <p>&copy; {{ t('reuse.copyright') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>

</style>