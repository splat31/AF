<template>
  <div>
    <section class="col-12 col-lg-4">
      <Inputs @newTodo="handleNewTodo"/>

      <p id="nbTodo" :style="{ color: todos.length >= 5 ? 'red' : 'black' }">
        Nombre de todo: {{ Total }}
      </p>

      <TodoItem v-for="to in todos" :key="to.id" :todo="to" @deleteTodo="handleDeleteTodo"/>
    </section>

  </div>
</template>

<script>
import Inputs from "./components/Inputs";
import TodoItem from "./components/TodoItem";

export default {
  name: 'App',
  components: {
    Inputs,
    TodoItem
  },
  data: function () {
    return {
      todos: []
    }
  },
  methods: {
    handleNewTodo(message) {
      console.log("j'ai bien recu le todo d'Id="+message.id+" et avec comme contenu= "+message.contenu)
      const nouveauTodo = {id: message.id, contenu: message.contenu}
      this.todos.push(nouveauTodo)
  },
    handleDeleteTodo(message) {
      const index = this.todos.findIndex(todo => todo.id === message.id);

      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    }
  },
  computed: {
    Total: function () {
      let total = this.todos.length;
      return total.toFixed(0);
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#counter {
  font-weight: bold;
}
</style>
