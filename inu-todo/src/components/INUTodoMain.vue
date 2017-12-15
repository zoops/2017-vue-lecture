<template>
  <div class="todoapp" v-cloak>
    <inu-todo-header/>
    <inu-todo-body/>
    <inu-todo-footer/>
  </div>
</template>

<script>
import InuTodoHeader from '@/components/INUTodoHeader'
import InuTodoBody from '@/components/INUTodoBody'
import InuTodoFooter from '@/components/INUTodoFooter'

export default {
  name: 'INUTodoMain',
  data () {
    return {
      
    }
  },
  components : {InuTodoHeader, InuTodoBody, InuTodoFooter}
}
</script>

<style>

</style>
