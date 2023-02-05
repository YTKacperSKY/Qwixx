<script>
    import NumberField from './NumberField.vue';
    import Lock from './Lock.vue';

    export default {
        name: "ColorRow",
        components: {
            NumberField,
            Lock,
        },
        data() {
            return {
                pointsMap: [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78],
                locked: false,
            };
        },
        props: ['inverted', 'color', 'clicked'],
        methods: {
            getRowClass() {
                switch (this.color) {
                    case 'red':
                        return 'alert-danger';
                    case 'yellow':
                        return 'alert-warning';
                    case 'green':
                        return 'alert-success';
                    case 'blue':
                        return 'alert-primary';
                }
            },
            btnClick(i) {
                this.clicked[i] = !this.clicked[i];
                this.$emit('btnClicked', this.points);
                sessionStorage.setItem(this.color, JSON.stringify(this.clicked));
            },
            
        },
        computed: {
            count() {
                let count = 0;
                for (let i = 0; i < this.clicked.length; i++) {
                    if (this.clicked[i]) {
                        count++;
                    }
                }
                if(count >= 5 && this.clicked[10]) {
                    count++;
                }
                return count;
            },
            points() {
                return this.pointsMap[this.count];
            }
        }
    };
</script>

<template>
    <div class="p-1 rounded" :class="color">
        <number-field 
            v-for="i in 11" 
            :key="color + (i + 1)" 
            :number="i + 1" 
            :inverted="inverted" 
            :color="color"
            :clicked="clicked[i-1]"
            :locked="locked"
            @btnClicked="btnClick(i-1)"
            ></number-field>
            <lock
                :count="count"
                :color="color"
                :locked="locked"
                @lockClicked="locked = !locked"
                :full="clicked[10]">
            </lock>
    </div>
</template>

<style scoped>

    div {
        width: fit-content;
    }
    .white {
        background-color: white;
    }
    .btn-danger {
        background-color: #ce7f85;
    }
    .btn-warning {
        background-color: #fde89d;
    }
    .btn-success {
        background-color: #7fcf7b;
    }
    .btn-primary {
        background-color: #7196ce;
    }
    .red {
        background-color: #d73f4c;
    }
    .yellow {
        background-color: #fee34a;
    }
    .green {
        background-color: #419e5b;
    }
    .blue {
        background-color: #384a8a;
    }
</style>