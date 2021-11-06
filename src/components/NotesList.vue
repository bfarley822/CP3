<template>
<div class="wrapper">
  <div class="notes">
    <div class="note" v-for="note in notes" :key="note">
      <div class="info">
        <h3 class="title">{{note.title}}</h3>
        <p class="content">{{note.content}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'NotesList',
  props: {
    notes: Array,
  },
  data() {
    return {
      note: '',
    }
  },
}
</script>

<style scoped>
  .info {
    padding: 5px;
  }
  .title {
    padding-top: 10px;
  }
  .content {
    padding: 5px 0px 5px 0px;
  }
</style>
