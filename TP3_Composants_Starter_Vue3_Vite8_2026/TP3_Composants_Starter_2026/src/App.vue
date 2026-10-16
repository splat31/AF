<template>
  <main class="container-fluid py-4">
    <div class="row g-4">
      <section class="col-12 col-lg-4">
        <NewMessage @messageSubmit="handleMessageSubmit"/>
      </section>

      <section class="col-12 col-lg-4">
        <!-- TODO exercice 2 : afficher la liste des messages -->
        <MessagePreview v-for="mes in messages" :key="mes.identifiant" :message="mes" @selectMessage="marquerCommeLu"/>
        <p>Total : {{ Total }} </p>
      </section>

      <section class="col-12 col-lg-4">
        <!-- TODO exercice 3 : afficher le message sélectionné -->
        <MessageDetail v-if="messageSelectionne" :message="messageSelectionne"/>
      </section>
    </div>
  </main>
</template>

<script>
import NewMessage from './components/NewMessage.vue'
import MessagePreview from './components/MessagePreview.vue'
import MessageDetail from './components/MessageDetail.vue'

export default {
  name: 'App',
  components: {
    NewMessage,
    MessagePreview,
    MessageDetail,
  },
  data() {
    return {
      messages: [],
      selected: null,
    }
  },
  // TODO exercices 1 et 3 : écouter les événements des composants enfants
  methods: {
    handleMessageSubmit(message) {
          const nouveauMessage = {
                titre: message.titre,
                contenu: message.contenu,
                identifiant: this.messages.length,
                date: new Date(),
                lu: false,
              }

              this.messages.push(nouveauMessage)
    },
    marquerCommeLu(identifiant) {
        const message = this.messages.find(
          mes => mes.identifiant === identifiant
        )

        if (message) {
          message.lu = true
          if (this.selected === identifiant) {
            this.selected=null //pour pouvoir fermer le message
          } else {
            this.selected = identifiant
          }
        }
      },
  },
  // TODO exercice 2 : ajouter une propriété calculée (computed)
  computed: {
    Total: function() {
      let total = 0;
      for (let i of this.messages) {
          total+=1;
      }
      return total.toFixed(0);
    },
    messageSelectionne() {
      return this.messages.find(
              mes => mes.identifiant === this.selected
      )
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
