<script>
import ThePanelControl from '../components/ThePanelControl.vue';
export default {
    name: 'MainPage',
    components: { ThePanelControl }
}
</script>

<template>
    <div class="wrapper-main">
        <div class="control-panel">
            <ThePanelControl />
        </div>
    </div>
</template>

<style scoped>
.wrapper-main {
    height: 100vh;
}
</style>
