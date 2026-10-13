<template>
  <div class="message">
     <p :class="{ 'fw-bold': !message.lu }" class="date">
       {{ message.date.toLocaleDateString() }}
     </p>
     <p :class="{ 'fw-bold': !message.lu }" class="titre">
       {{ message.titre }}
     </p>
     <button @click="marquerCommeLu">Voir</button>
  </div>
</template>

<script>
export default {
  name: 'MessagePreview',
  props: {
      message: {
        type: Object,
        required: true,
      },
  },
  emits: ['messageLu'],
  methods: {
    marquerCommeLu() {
        this.$emit('messageLu', this.message.identifiant)
    }
  },
}
</script>

<style scoped>
.message {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 6px;
  background-color: #f8f9fa;
}

.date {
  font-size: 0.85rem;
  margin-bottom: 0px;
}

.titre {
  font-size: 1.2rem;
  margin-top: 0;
}
</style>
