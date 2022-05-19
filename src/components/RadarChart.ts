import { defineComponent, h, PropType } from 'vue'

import { Radar } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    PointElement,
    RadialLinearScale,
    LineElement,
    Plugin
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    PointElement,
    RadialLinearScale,
    LineElement
)

export default defineComponent({
    name: 'RadarChart',
    components: {
        Radar
    },
    props: {
        chartId: {
            type: String,
            default: 'radar-chart'
        },
        width: {
            type: Number,
            default: 800
        },
        height: {
            type: Number,
            default: 800
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object as PropType<Partial<CSSStyleDeclaration>>,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            default: () => {}
        },
        plugins: {
            type: Array as PropType<Plugin<'radar'>[]>,
            default: () => []
        },
        data: {
            type: Array,
            default: () => []
        }
    },
    setup(props) {
        const chartData = {
            labels: [
                'D',
                'I',
                'S',
                'C',
            ],
            datasets: [
                {
                    label: 'Result',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: props.data as Array<number>
                }
            ]
        }

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: false,
                    min: 10,
                    max: 65,
                    startAngle: -45,
                    ticks: {
                        stepSize: 5
                    }
                }
            }
        }

        return () =>
            h(Radar, {
                chartData,
                chartOptions,
                chartId: props.chartId,
                width: props.width,
                height: props.height,
                cssClasses: props.cssClasses,
                styles: props.styles,
                plugins: props.plugins
            })
    }
})
