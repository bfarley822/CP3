<template>
  <div class="content">
    <div class="heading">
      <h1>Classes:</h1>
    </div>
    <ClassList :classes="classes" />
  </div>
</template>

<script>
import ClassList from "../components/ClassList.vue";
export default {
  components: {
    ClassList
  },
  data() {
    return {
      name: '',
      teacher: '',
      clas: '',
    }
  },
  computed: {
    classes() {
      return this.$root.$data.classes;
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
