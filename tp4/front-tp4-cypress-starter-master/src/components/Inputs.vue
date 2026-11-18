<template>
  <div>

    <input type="text" id="new-todo-field" v-model="contenu"/>

    <button type="button" id="new-button" class="btn btn-primary" @click="button">
      ->
    </button>

  </div>
</template>

<script>
export default {
  name: "Inputs",
  emits: ['newTodo'],
  data() {
    return {
      id: '1',
      contenu: '',
    }
  },
  methods: {
    button() {
      console.log("j'ai un nouveau todo: id="+this.id+" contenu="+this.contenu)
      this.$emit('newTodo', {id:this.id, contenu: this.contenu,})
      this.id= (parseInt(this.id,10)+1).toString()
      this.contenu = ''
    }
  }
}
</script>

<style scoped>
</style>