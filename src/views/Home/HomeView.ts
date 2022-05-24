import {defineComponent} from 'vue';

// Components
import RadarChart from '@/components/RadarChart';

export default defineComponent({
    name: 'HomeView',

    components: {
        RadarChart,
    },

    data() {
        return {
            d: [],
            i: [],
            s: [],
            c: [],
            showResult: false,
            rules: [
                (v: number) => (v && v >= 1) || "Waarde moet 1 of hoger zijn",
                (v: number) => (v && v <= 4) || "Waarde mag niet hoger dan 4 zijn",
            ],
        };
    },

    computed: {
        dTotal(): number {
            return this.d.reduce((acc: number, cur: number) => acc + cur, 0);
        },
        iTotal(): number {
            return this.i.reduce((acc: number, cur: number) => acc + cur, 0);
        },
        sTotal(): number {
            return this.s.reduce((acc: number, cur: number) => acc + cur, 0);
        },
        cTotal(): number {
            return this.c.reduce((acc: number, cur: number) => acc + cur, 0);
        },
        totals(): number {
            return (this.dTotal + this.iTotal + this.sTotal + this.cTotal);
        },
        isValid(): boolean {
            return this.totals === 160;
        },
    },
    methods: {
        toggleShowResult(): void {
            this.showResult = true;
        },
    },
});
