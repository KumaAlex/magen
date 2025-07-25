<template>
  <section class="bg-[#F2F2F2] py-16 px-6 md:px-16">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-black mb-12">
      {{ t('staff.title') }}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="space-y-6 text-black text-lg leading-relaxed">
        <p>{{ t('staff.p1') }}</p>
        <p>{{ t('staff.p2') }}</p>
        <p>{{ t('staff.p3') }}</p>
      </div>

      <div class="flex flex-col items-center">
        <div class="w-full h-[400px] max-w-3xl bg-gray-800/80 rounded-lg shadow-lg p-4">
          <LineChart :chart-data="chartData" :chart-options="chartOptions" />
        </div>
        <p class="mt-4 text-black text-center text-sm md:text-base">
          {{ t('staff.chartNote') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LineChart from "../../components/line-chart/line-chart.vue";

const { t } = useI18n()

const chartData = {
  labels: ['2013–2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      backgroundColor: (context: any) => {
        const ctx = context.chart.ctx
        const gradient = ctx.createLinearGradient(0, 0, 0, 400)
        gradient.addColorStop(0, 'yellow')
        gradient.addColorStop(1, 'black')
        return gradient
      },
      borderColor: '#facc15', // жёлтый
      data: [610, 810, 931, 1120, 1260, 1350],
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: '#facc15',
      pointBorderColor: '#fff',
      pointBorderWidth: 2
    },
  ],
}
const chartOptions = {
  responsive: true,
      maintainAspectRatio: false,
      scales: {
    x: {
      ticks: {
        color: '#ffffff', // цвет текста по оси X
            font: {
          size: 16,        // размер шрифта оси X
              weight: 'bold',  // жирность
        },
      },
      grid: {
        color: '#444' // цвет сетки (опционально)
      }
    },
    y: {
      ticks: {
        color: '#ffffff', // цвет текста по оси Y
            font: {
          size: 16,        // размер шрифта оси Y
              weight: 'bold',
        },
      },
      grid: {
        color: '#444'
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
          text: t('staff.chartTitle'),
          color: '#fff',
          font: {
        size: 20
      }
    }
  }
}

</script>

<style scoped>

</style>