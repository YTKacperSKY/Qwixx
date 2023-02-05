<script>
    export default {
        data() {
            return {
            };
        },
        props: ['number', 'inverted', 'color', 'clicked', 'locked'],
        
        methods: {
            getColorClass() {
                if (this.clicked) {
                    switch (this.color) {
                        case 'red':
                            return 'btn-danger colored';
                        case 'yellow':
                            return 'btn-warning colored';
                        case 'green':
                            return 'btn-success colored';
                        case 'blue':
                            return 'btn-primary colored';
                    }
                }
                switch (this.color) {
                    case 'red':
                        return 'btn-outline-danger white';
                    case 'yellow':
                        return 'btn-outline-warning white';
                    case 'green':
                        return 'btn-outline-success white';
                    case 'blue':
                        return 'btn-outline-primary white';
                }
            },
            click() {
                if(!this.locked)
                this.$emit('btnClicked');
            }
        },
        computed: {
            ownNumber() {
                if (this.inverted) {
                    return 14 - this.number;
                } else {
                    return this.number;
                }
            }
        }
    };
</script>

<template>
    <button 
        :class="getColorClass(), {'locked': locked}"
        class="btn"
        @click="click">
        {{ ownNumber }}</button>
</template>

<style scoped>
    .locked {
        text-decoration: line-through;
    }
    .btn:hover {
        color: black;
    }
    .btn {
        width: 50px;
        height: 50px;
        margin: 3px;
        font-size: 20px;
    }
</style>