<template>
  <div class="card" v-if="this.task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <span>{{ task.status }}</span></p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="changeStatus('В работе')">Взять в работу</button>
      <button class="btn primary" @click="changeStatus('Завершено')">Завершить</button>
      <button class="btn danger" @click="changeStatus('Отменено')" >Отменить</button>
      <button class="btn danger" @click="removeTask()" >Удалить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ res }}</strong> нет
  </h3>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {

  mounted(){
    this.res =  this.$route.params.idx
    this.task = this.TASK_BY_ID(this.res)
  }, 
  methods: {
    ...mapMutations(['SEARCH_TASK_BY_ID', 'REMOVE_TASK_BY_ID']),

    changeStatus(status){
      this.task.status = status
    },
    removeTask(){
      this.REMOVE_TASK_BY_ID(this.task.id)
      window.location.href = 'http://localhost:8080/?#'
    }
  }, 
  computed: {
    ...mapGetters(['TASK_BY_ID']),
  }, 
  data(){
    return {
      task: {}, 
      res: ''
    }
  }

}
</script>
