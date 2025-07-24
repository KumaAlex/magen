<template>
  <div class="fixed bottom-8 right-8 z-50">
    <div class="relative w-18 h-18">
      <span class="ping-custom absolute inset-0 rounded-full bg-green-400 opacity-75"></span>
      <span class="ping-custom absolute inset-0 rounded-full bg-green-400 opacity-75 animation-delay-1000"></span>
      <button
          class="relative z-10 w-18 h-18 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-transform"
      >
        <slot />
      </button>
    </div>
  </div>
</template>

<style scoped>
@keyframes ping-slow {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.ping-custom {
  animation: ping-slow 1.7s ease-out infinite;
  position: absolute;
}

.animation-delay-1000 {
  animation-delay: .3s;
}
</style>
