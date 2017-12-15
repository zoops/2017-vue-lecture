<template>
    <div>
        <footer class="footer" v-show="todos.length">
            <span class="todo-count">
                <strong v-text="remaining"></strong> {{pluralize('item', remaining)}} left
            </span> 
            <ul class="filters">
                <li>
                    <a href="#/all" :class="{selected: vstag == 'all'}">All</a>
                </li> 
                <li>
                    <a href="#/active" :class="{selected: vstag == 'active'}">Active</a>
                </li> 
                <li>
                    <router-link to="/completed" :class="{selected: vstag == 'completed'}">Completed</router-link>
                </li>
            </ul> 
            <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">Clear completed</button>
        </footer>
        <div class="todoapp"><h1>INUTodoFooter</h1></div>
    </div>  
</template>

<script>
import Const from '../constant'

export default {
  name: 'INUTodoFooter',
  data () {
    return {
      
    }
  },
  computed : {
    vstag : function() {
        return this.$store.state.visibility;
    },
    todos : function() {
      return this.$store.state.todos;
    },
    remaining: function () {
      return this.$store.getters.activeTodos.length;
    },
  },  
  methods : {
    pluralize: function (word, count) {
      return word + (count === 1 ? '' : 's');
    },
    removeCompleted : function() {
      this.$store.commit(Const.DELETE_COMPLETED_TODO);
    },
  }  
}
</script>

<style>

</style>
