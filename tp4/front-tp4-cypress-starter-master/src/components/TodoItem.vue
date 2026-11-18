<template>
  <div>
    <p :id="'todoitem-' + todo.id" class="todo">
      Todo n°{{todo.id}}: {{todo.contenu}}
    </p>

    <button type="button" :id="'sup-button-'+ todo.id" class="btn btn-danger" @click="button">
      supprimer
    </button>

  </div>
</template>

<script>
export default {
  name: "TodoItem",
  emits: ['deleteTodo'],
  props: {
    todo: {
      type: Object,
      required: true,
    }
  },
  methods: {
    button() {
      this.$emit('deleteTodo', {id: this.todo.id})
    }
  }
}
</script>

<style scoped>

</style>