import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
addEventListener('popstate', (event) => {
    console.log(event);
    if(event.state == null) {
        return;
    }
});
