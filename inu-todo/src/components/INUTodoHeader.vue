<template>
    <header class="header">
        <h1>{{msg}}</h1> 
        <input autofocus="autofocus" autocomplete="off" placeholder="What needs to be done?" class="new-todo"
            v-model="newTodo"
            @keyup.enter="addTodo">
    </header>
</template>

<script>
import Const from '../constant'

export default {
  name: 'INUTodoHeader',
  data () {
    return {
      newTodo : '',
    }
  },
  computed : {
      msg : function() {
          return this.$store.state.msg;
      }
  },
  methods : {
      addTodo : function() {
        this.$store.commit(Const.ADD_TODO, { todo : this.newTodo});
        this.newTodo = '';
      }
  }

}
</script>

<style>

</style>
