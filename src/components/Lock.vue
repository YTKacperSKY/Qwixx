<script>
    export default {
        data() {
            return {
            };
        },
        props: ['count', 'color', 'full', 'locked'],
        
        methods: {
            getColorClass() {
                if (this.count >= 5 && this.full) {
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
                this.$emit('lockClicked');
            }
            
        },

        computed: {
            
        }
    };
</script>

<template>
    <button 
        :class="getColorClass()" 
        class="btn rounded-circle"
        @click="click">
        <svg v-if="locked" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-unlock-fill" viewBox="0 0 16 16">
            <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"/>
        </svg>
    </button>
</template>

<style scoped>
    .btn:hover {
        color: black;
    }
    .btn {
        width: 50px;
        height: 50px;
        margin: 3px;
        font-size: 10px;
    }
</style>