import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Login from "./pages/auth/Login.vue";
import Signup from "./pages/auth/SignUp.vue";
import NotFound from "./pages/error/NotFound.vue";
import DefaultLayout from "./components/DefaultLayout.vue";
import useUserStore from "./store/user";
import Images from "./pages/Image.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "images",
        name: "images",
        component: Images,
      },
    ],
    beforeEnter: async (to, from, next) => {
      try {
        const userStore = useUserStore();
        await userStore.fetchUser();
        next()
      } catch (error) {
        next(false);
      }
    },
  },  
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  // {
  //   path: "/profile",
  //   name: "profile",
  //   component: Profile,
  // },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
