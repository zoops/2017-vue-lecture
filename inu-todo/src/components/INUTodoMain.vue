<template>
  <div class="todoapp" v-cloak>
    <transition appear
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight">
      <inu-todo-header/>
    </transition>

    <transition appear
      enter-active-class="animated fadeInLeftBig"
      leave-active-class="animated fadeOutRightBig">
      <inu-todo-body/>
    </transition>

    <transition appear
      enter-active-class="animated fadeInRightBig"
      leave-active-class="animated fadeOutLeftBig">
      <inu-todo-footer/>
    </transition>

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
