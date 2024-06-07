import { createApp } from 'vue'

import './assets/style/style.css'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoEyeSharp, IoEyeOff, IoCheckbox, BiCalendarWeekFill, MdAlarmaddRound, BiGrid } from 'oh-vue-icons/icons'

addIcons(IoEyeSharp, IoEyeOff, IoCheckbox, BiCalendarWeekFill, MdAlarmaddRound, BiGrid )

import router from './router'

const app = createApp(App)

app.component('VIcon', OhVueIcon)

app.use(router)
app.mount('#app')
