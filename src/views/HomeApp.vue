<template>
    <the-navbar></the-navbar>
    <div class="container with-nav">
        <TasksApp></TasksApp>
    </div>
</template>

<script>
import TheNavbar from './../components/TheNavbar.vue'
import TasksApp from './TasksApp.vue'
export default {
    components: {
        TheNavbar,
        TasksApp,
    },

};
</script>

<style>
</style>