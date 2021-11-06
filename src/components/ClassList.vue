<template>
<div class="wrapper">
  <div class="classes">
    <table>
    <div class="class" v-for="clas in classes" :key="clas.id">
      <tr>
        <td><button id="checkBox" @click="addClass(clas)">{{clas.add}}</button></td>
        <td>{{clas.name}}</td>
        <td>{{clas.teacher}}</td>
        <td>{{clas.days}}</td>
        <td>{{clas.time}}</td>
      </tr>
    </div>
    </table>
  </div>
</div>
</template>

<script>
export default {
  name: 'ClassList',
  props: {
    classes: Array,
  },
  data() {
    return {
      clas: '',
      buttonText: '+',
    }
  },
  methods: {
    addClass(clas) {
      if (clas.add == "+") {
        clas.add = "-";
        this.$root.$data.myClasses.push(clas);
      }
      else {
        clas.add = "+";
        this.$root.$data.myClasses.splice(this.$root.$data.myClasses.indexOf(clas),1);
      }
    }
  },
}

</script>

<style scoped>
.class {
  padding: 5px;
  font-size: 20px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}

td, th {
  border: 2px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
