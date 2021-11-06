<template>
  <div class="content">
    <div class="heading">
      <h1>Add Notes:</h1>
    </div>
    <div>
      <input v-model="title" type="text" name="title" id="note-title" placeholder="Enter title here">
      <br/>
      <textarea v-model="content" name="content" id="note-content" cols="40" rows="20" placeholder="Type note here"></textarea>
    </div>
    <button @click="submitNote" id="add-note">Add note</button>
    <h3><br>Your classes:</h3>
    <p id="classList"><br>{{allMyClasses()}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        content: '',
        clas: '',
      }
    },
    props: {
      myClasses: Array,
    },
    methods: {
      submitNote() {
        if(this.title.length > 0 && this.content.length > 0) {
          this.$root.$data.notes.push({
            title: this.title,
            content: this.content,
          })
          this.title = ''
          this.content = ''
        }
      },
      allMyClasses() {
        let size = this.$root.$data.myClasses.length;
        let output = "";
        for (let i = 0; i < size; ++i) {
          output += this.$root.$data.myClasses[i].name;
          if (i < size - 1) {
           output += " | ";
          }
        }
        return output;
      },
    }
  }
</script>

<style scoped>
  .content {
    text-align:center;
  }
  .heading {
    padding: 15px;
  }
  #note-title {
    width: 310px;
  }
</style>
