import {createApp} from 'vue'

import './assets/style/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import store from "./store";

import App from './App.vue'
import {OhVueIcon, addIcons} from 'oh-vue-icons'
import {
  IoEyeSharp,
  IoEyeOff, IoCheckbox,
  BiCalendarWeekFill,
  MdAlarmaddRound,
  BiGrid,
  BiCalendarDay,
  BiCalendar2Date,
  BiCalendar2Month,
  HiSolidChevronRight,
  BiPlusLg,
  FaTrashAlt,
  BiCheckSquare,
  OiSidebarCollapse
} from 'oh-vue-icons/icons'
import router from './router'

addIcons(
  IoEyeSharp,
  IoEyeOff, IoCheckbox,
  BiCalendarWeekFill,
  MdAlarmaddRound, BiGrid,
  BiCalendarDay,
  BiCalendar2Date,
  BiCalendar2Month,
  HiSolidChevronRight,
  BiPlusLg,
  FaTrashAlt,
  BiCheckSquare,
  OiSidebarCollapse
)

const app = createApp(App)

app.component('VIcon', OhVueIcon)

app.use(store)
app.use(router)
app.mount('#app')
