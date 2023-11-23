<template>
  <h1 class="text-white center" v-if="TASKS.length == 0">Задач пока нет</h1>
  <h3 class="text-white center" v-else>Всего активных задач: {{ activeTasks }}</h3>

  <div class="card" v-for="task in TASKS" :key="task.id">
    <h2 class="card-title">
      {{ task.title}}
      <span :class="task.status == 'В работе' ? ' badge primary': task.status == 'Отменено' ? 'badge danger' : 'badge warning'">{{ task.status }}</span>
    </h2>
    <p>
      <strong>
        <small>
          {{ task.date }}
        </small>
      </strong>
    </p>
    <router-link  class="btn primary" :to="'/task/' +  task.id ">Посмотреть</router-link>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['TASKS']),
    activeTasks() {
      return this.TASKS.filter(task => task.status === 'В работе').length
    }
  }, 
  methods: {
    ...mapMutations(['ADD_ALL_TASK_FROM_LS']),
  }

}
</script>
