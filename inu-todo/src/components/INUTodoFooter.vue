<template>
    <div>
        <footer class="footer">
            <span class="todo-count"><strong>3</strong> items left</span> 
            <ul class="filters">
                <li>
                    <a href="#/all" class="selected">All</a>
                </li> 
                <li>
                    <a href="#/active" class="">Active</a>
                </li> 
                <li>
                    <router-link to="/completed" class="">Completed</router-link>
                </li>
            </ul> 
            <button class="clear-completed" style="display: none;">Clear completed</button>
        </footer>
        <div class="todoapp"><h1>INUTodoFooter</h1></div>
    </div>  
</template>

<script>
export default {
  name: 'INUTodoFooter',
  data () {
    return {
      
    }
  },

}
</script>

<style>

</style>
