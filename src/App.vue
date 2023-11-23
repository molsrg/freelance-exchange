<template>
    <the-navbar></the-navbar>
    <div class="container with-nav">
        <router-view />
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import TheNavbar from "./components/TheNavbar.vue";
export default {
    mounted() {
        window.addEventListener("beforeunload", this.handleBeforeUnload);

        const taskArrayFromLocalStorage = localStorage.getItem("taskArray");
        if (taskArrayFromLocalStorage) {
            const parsedTaskArray = JSON.parse(taskArrayFromLocalStorage);
            this.ADD_ALL_TASK_FROM_LS(parsedTaskArray);
        }
    },
    beforeUnmount() {
        window.removeEventListener("beforeunload", this.handleBeforeUnload);
    },
    methods: {
        ...mapMutations(["ADD_ALL_TASK_FROM_LS"]),
        handleBeforeUnload() {
            if (this.TASKS.length > 0) {
                const stringifiedArray = JSON.stringify(this.TASKS);
                localStorage.setItem("taskArray", stringifiedArray);
            }
        },
    },
    components: {
        TheNavbar,
    },
    computed: {
        ...mapGetters(["TASKS"]),
    },
};
</script>


