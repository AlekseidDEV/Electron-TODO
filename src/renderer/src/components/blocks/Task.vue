<script>
import ListView from '../ui/task/ListView.vue';
import TaskListView from "../ui/task/TaskListView.vue";
export default{
    name: 'Task',
    components: {ListView, TaskListView},
}
</script>

<template>
    <div class="wrapper_block_page">
        <ListView/>
        <TaskListView/>
        <div>1</div>
    </div>
</template>

<style scoped>
.wrapper_block_page{
    display: flex;
    height: 100vh;
}
</style>

