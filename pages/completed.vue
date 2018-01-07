<template>
  <div>
    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Active Todos</h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="todo of todos" class="flex ph3 pv3 bb b--light-silver">
          <span class="flex-auto">{{ todo.id}}) {{ todo.task }}</span>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { fetchData } from './shared'

  export default {
    fetch: fetchData,
    computed: {
      ...mapState({
        todos: state => state.todos.filter(todo => todo.complete)
      })
    }
  }
</script>
<style>

button.trans {
    background: transparent;
    border: none !important;
    font-size:0;
}

label.boold {
  font-weight: bold;
}
</style>
