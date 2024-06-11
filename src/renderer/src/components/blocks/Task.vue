<script>
import ListView from '../ui/task/ListView.vue';
import TaskListView from "../ui/task/TaskListView.vue";
import EmptyDetail from "../ui/task/EmptyDetail.vue";
export default{
    name: 'Task',
    components: {ListView, TaskListView, EmptyDetail},
}
</script>

<template>
    <div class="wrapper_block_page">
        <ListView/>
        <TaskListView/>
        <EmptyDetail/>
    </div>
</template>

<style scoped>
.wrapper_block_page{
    display: flex;
    height: 100vh;
}
</style>

