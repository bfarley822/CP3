import Vue from "vue";
import VueRouter from "vue-router";
import Add from "../views/Add.vue";
import Notes from "../views/Notes.vue"
import Classes from "../views/Classes.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Add",
    component: Add,
  },
  {
    path: "/about",
    name: "Notes",
    component: Notes,
  },
  {
    path: "/classes",
    name: "Classes",
    component: Classes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
