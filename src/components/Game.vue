<script>
    import ColorRow from './ColorRow.vue'
    import MissBox from './MissBox.vue'

    export default {
        components: {
            ColorRow,
            MissBox,
        },
        data() {
            return {
                misses: [false, false, false, false],
                points: [0, 0, 0, 0],
                map: [[false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false]],
            }
        },
        computed: {
            missCount() {
                let count = 0;
                for (let i = 0; i < this.misses.length; i++) {
                    if (this.misses[i]) {
                        count++;
                    }
                }
                return count;
            },
            totalPoints() {
                let total = 0;
                for (let i = 0; i < this.points.length; i++) {
                    total += this.points[i];
                }
                total -= this.missCount * 5;
                if(total < 0) {
                    total = 0;
                }
                return total;
            }
        },
        methods: {
            btnClicked(index, points, map) {
                this.points[index] = points;
                this.save();
            },
            save() {
                sessionStorage.setItem('misses', JSON.stringify(this.misses));
                sessionStorage.setItem('map', JSON.stringify(this.map));
                sessionStorage.setItem('points', JSON.stringify(this.points));
            },
            clear() {
                this.misses = [false, false, false, false];
                this.points = [0, 0, 0, 0];
                this.map = [[false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false]];
                this.save();
            }
        },
        created() {
            let cache = sessionStorage.getItem('misses');
            if (cache) {
                this.misses = JSON.parse(cache);
            }
            cache = sessionStorage.getItem('map');
            if (cache) {
                this.map = JSON.parse(cache);
            }
            cache = sessionStorage.getItem('points');
            if (cache) {
                this.points = JSON.parse(cache);
            }
        }
    }
</script>

<template>
    <color-row :inverted="false" :clicked="map[0]" color="red" @btnClicked="(a1) => this.btnClicked(0, a1)"></color-row>
    <color-row :inverted="false" :clicked="map[1]" color="yellow" @btnClicked="(a1) => this.btnClicked(1, a1)"></color-row>
    <color-row :inverted="true" :clicked="map[2]" color="green" @btnClicked="(a1) => this.btnClicked(2, a1)"></color-row>
    <color-row :inverted="true" :clicked="map[3]" color="blue" @btnClicked="(a1) => this.btnClicked(3, a1)"></color-row>
    <miss-box v-for="k in 4"
        :clicked="this.misses[k-1]"
        :key="'miss' + id"
        @btnClicked="this.misses[k-1] = !this.misses[k-1]"
        ></miss-box>
    <span id="row">
        <span style="margin-left: 50px;" class="rounded ml-2 mt-2 btn btn-outline-danger disabled">{{ points[0] }}</span>
        +
        <span class="rounded ml-2 mt-2 btn btn-outline-warning disabled">{{ points[1] }}</span>
        +
        <span class="rounded ml-2 mt-2 btn btn-outline-success disabled">{{ points[2] }}</span>
        +
        <span class="rounded ml-2 mt-2 btn btn-outline-primary disabled">{{ points[3] }}</span>
        -
        <span class="rounded ml-2 mt-2 btn btn-outline-secondary disabled">{{ missCount * 5 }}</span>
        =
        <span class="rounded ml-2 mt-2 btn btn-outline-dark disabled">
        {{ totalPoints }}
        </span>
        <span @click="clear()" class="rounded btn btn-danger mt-2" style="margin-left: 10px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg> Clear</span>
    </span>
    
    

</template>

<style scoped>
#row {
    font-size: 1.5em;
}
</style>