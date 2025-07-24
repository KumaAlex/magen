<script lang="ts" setup>
import { defineProps } from 'vue'
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Filler)

const props = defineProps<{
  chartData: any
  chartOptions?: any
}>()
</script>

<template>
  <Line :data="props.chartData" :options="props.chartOptions" />
</template>
