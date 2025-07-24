<template>
  <form @submit.prevent="submitForm" class="bg-white text-black p-8 md:mb-12 max-w-xl mx-auto rounded space-y-6 shadow-lg">
    <div class="text-center">
      <h2 class="text-2xl font-bold mb-2">Оставить заявку</h2>
      <p class="text-gray-700">Оставьте заявку и мы перезвоним вам в течение 10 минут</p>
    </div>

    <div>
      <label class="block mb-1 font-medium">Ваше имя*</label>
      <input
          v-model="name"
          type="text"
          placeholder="Введите Ваше имя или название компании"
          class="w-full border border-black bg-white text-black placeholder:text-gray-500 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
      />
    </div>

    <div>
      <label class="block mb-1 font-medium">Ваш номер телефона*</label>
      <input
          v-model="phone"
          type="tel"
          placeholder="+7 (___) ___-__-__"
          class="w-full border border-black bg-white text-black placeholder:text-gray-500 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          @input="formatPhone"
          @keydown="restrictNonNumeric"
          required
      />
      <p v-if="!isPhoneValid && phoneTouched" class="text-red-500 text-sm mt-1">
        Введите корректный номер телефона
      </p>
    </div>

    <div class="text-center">
      <button
          type="submit"
          class="bg-[#FFD700] text-black font-semibold px-6 py-3 rounded hover:text-white hover:bg-black transition duration-300"
      >
        Получить консультацию
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'

const name = ref('')
const phone = ref('')
const phoneTouched = ref(false)

const isPhoneValid = computed(() => {
  const digits = phone.value.replace(/\D/g, '')
  return digits.length === 11 && digits.startsWith('7')
})

function restrictNonNumeric(e) {
  const allowed = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab']
  if (!/[0-9]/.test(e.key) && !allowed.includes(e.key)) {
    e.preventDefault()
  }
}

function formatPhone(e) {
  phoneTouched.value = true
  let input = e.target.value.replace(/\D/g, '')

  if (input.startsWith('8')) input = '7' + input.slice(1)
  if (!input.startsWith('7')) input = '7' + input

  if (input.length > 11) input = input.slice(0, 11)

  let formatted = '+7'
  if (input.length > 1) formatted += ` (${input.slice(1, 4)}`
  if (input.length >= 4) formatted += `) ${input.slice(4, 7)}`
  if (input.length >= 7) formatted += `-${input.slice(7, 9)}`
  if (input.length >= 9) formatted += `-${input.slice(9, 11)}`

  phone.value = formatted
}

function submitForm() {
  phoneTouched.value = true
  if (!isPhoneValid.value) return

  alert(`Заявка отправлена\nИмя: ${name.value}\nТелефон: ${phone.value}`)
}
</script>
