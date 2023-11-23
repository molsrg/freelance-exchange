<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!validTask" @click="addTask()">Создать</button>
  </form>
</template>


<script>

import { mapMutations } from 'vuex'
export default {
  data(){
    return {
      title: '', 
      date: '', 
      description: ''
    }
  }, 
  methods: {
    ...mapMutations(["ADD_TASK"]),
    addTask(){
      // Вычисление статуса  
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      const inputDate = new Date(this.date);
      const isNotLessThanToday = inputDate.getTime() >= currentDate.getTime();

      const status = isNotLessThanToday ? 'В работе' : 'Отменено';


      // Генерация id 
      const id = Math.random().toString(16).slice(2)

      const data = {
        title: this.title, 
        date: this.date, 
        description: this.description,
        status: status,
        id: id
      }

      this.ADD_TASK(data)
      window.location.href = 'http://localhost:8080/?#'
    }
    
  },
  computed: {
    validTask(){

      return this.title.length > 0 && this.date.length > 0 && this.description.length > 0
    }
  }
}
</script>