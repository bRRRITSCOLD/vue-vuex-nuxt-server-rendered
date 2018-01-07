<template>
  <div>
    <form class="pl5 pt4" @submit.prevent="add(task)">
      <label class="boold">New Task:  </label> <input v-model="task" type="text">
      <input type="submit" value="Add">
    </form>

    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Todos</h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="todo of todos" class="flex ph3 pv3 bb b--light-silver">
          <span class="flex-auto" v-bind:class="{strike: todo.complete}">{{ todo.id}}) {{ todo.task }}</span>
          <button class="trans" @click="toggle(todo)"><img src="https://icon.now.sh/check"></button>
          <button class="trans" @click="remove(todo)"><img src="https://icon.now.sh/trash"></button>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex'
  import { fetchData } from './shared'

  export default {
    fetch: fetchData,
    data: () => {
      return {
        task: null
      }
    },
    computed: {
      ...mapState({
        todos: state => state.todos
      })
    },
    methods: {
      ...mapMutations([
        'init'
      ]),
      ...mapActions([
        'add',
        'remove',
        'toggle'
      ])
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
