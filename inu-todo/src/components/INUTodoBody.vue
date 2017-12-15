<template>
    <section class="main">
        <input type="checkbox" class="toggle-all"> 
        <ul class="todo-list">
            <li class="todo" v-for="todo in filteredTodos" :key="todo.id" :class="{completed: todo.done, editing: todo == editedTodo}">
                <div class="view">
                    <input type="checkbox" class="toggle">
                    <label>{{todo.title}}</label> <button class="destroy"></button></div> <input type="text" class="edit">
            </li>
        </ul>
    </section>
</template>

<script>
export default {
  name: 'INUTodoBody',
  data () {
    return {
      editedTodo : null,      
    }
  },
  computed : {
      filteredTodos : function() {
        return this.$store.getters.filteredTodos;
      }
  }

}
</script>

<style>

</style>
