<script>
    export default {
        props: ['clicked'],
        data() {
            return {
            };
        },
        methods: {
            click() {
                this.$emit('btnClicked');
            }
        }
    }
</script>

<template>
    <button
        class="btn mt-2"
        :class="{'clicked btn-danger': clicked, 'notClicked btn-outline-danger': !clicked}"
        @click="click">
        x </button>
</template>

<style scoped>
    .notClicked {
        color: white;
    }
</style>