<script>
import ThePanelControl from "../components/ThePanelControl.vue";
import Task from "../components/blocks/Task.vue";
import Calendar from "../components/blocks/Calendar.vue";
import Pomodoro from "../components/blocks/Pomodoro.vue";
import Matrix from "../components/blocks/Matrix.vue";
export default {
  name: "MainPage",
  components: { ThePanelControl, Task, Calendar, Pomodoro, Matrix },
  data(){
    return{
        isActive: 'Task'
    }
  },
};
</script>

<template>
  <div class="wrapper-main">
    <div class="control-panel">
      <ThePanelControl 
      @visibleBlock="((activeItem) => this.isActive = activeItem)"
      />
    </div>
    <div class="block-view" v-if="isActive === 'Task'">
        <Task/>
    </div>
    <div class="block-view" v-else-if="isActive === 'Calendar'">
        <Calendar/>
    </div>
    <div class="block-view" v-else-if="isActive === 'Pomodoro'">
        <Pomodoro/>
    </div>
    <div class="block-view" v-else>
        <Matrix/>
    </div>
  </div>
</template>

<style scoped>
.wrapper-main {
  height: 100vh;
  display: flex;
}

.block-view{
    width: 100%;
}
</style>
