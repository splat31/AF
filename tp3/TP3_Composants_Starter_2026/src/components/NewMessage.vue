<template>
  <div>
    <!-- TODO exercice 1 : réaliser le formulaire de saisie -->
    <h2>Nouveau message</h2>
     <form @submit.prevent="message">
            <input
                v-model="titre"
                placeholder="nouveau titre"
            />
            <input
                v-model="contenu"
                placeholder="nouveau contenu"
            />
            <button type="submit" class="btn btn-primary">
                Soumettre le contenu
            </button>
     </form>
  </div>
</template>

<script>
export default {
  name: 'NewMessage',
  emits: ['messageSubmit'],
  data() {
    return {
      // TODO exercice 1 : définir les données du formulaire
      titre: '',
      contenu: '',
    }
  },
  // TODO exercice 1 : émettre un événement lorsque le formulaire est validé
  methods: {
    message() {
          console.log(this.titre + ': ' + this.contenu)
          this.$emit('messageSubmit', {
            titre: this.titre,
            contenu: this.contenu,
          })

          this.titre = ''
          this.contenu = ''
        },
  }
}
</script>

<style scoped>
</style>
