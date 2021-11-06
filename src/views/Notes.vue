<template>
  <div class="content">
    <div class="heading">
      <h1>Your Notes:</h1>
    </div>
    <NotesList :notes="notes" />
  </div>
</template>

<script>
import NotesList from "../components/NotesList.vue";
export default {
  components: {
    NotesList
  },
  data() {
    return {
      name: '',
      content: '',
    }
  },
  computed: {
    notes() {
      return this.$root.$data.notes;
    }
  },
}
</script>

<style scoped>
  .heading {
    text-align: center;
    padding: 15px;
  }
</style>
