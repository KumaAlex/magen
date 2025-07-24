// plugins/chart.ts
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
} from 'chart.js'

export default defineNuxtPlugin(() => {
    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        PointElement,
        LinearScale,
        CategoryScale
    )
})
