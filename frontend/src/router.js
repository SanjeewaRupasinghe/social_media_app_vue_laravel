import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Login from "./pages/auth/Login.vue";
import Signup from "./pages/auth/SignUp.vue";
import NotFound from "./pages/error/NotFound.vue";
import DefaultLayout from "./components/DefaultLayout.vue";
import useUserStore from "./store/user";
import Images from "./pages/Image.vue";

const routes = [
  // {
  //   path: "/",
  //   component: DefaultLayout,
  //   children: [
  //     {
  //       path: "",
  //       name: "home",
  //       component: Home,
  //     },
  //     {
  //       path: "images",
  //       name: "images",
  //       component: Images,
  //     },
  //   ],
  //   beforeEnter: async (to, from, next) => {
  //     try {
  //       const userStore = useUserStore();
  //       await userStore.fetchUser();
  //       next()
  //     } catch (error) {
  //       next(false);
  //     }
  //   },
  // },  
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: "/images",
    name: "images",
    component: Images,
    meta: { requiresAuth: true }
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

// Global route guard
// router.beforeEach(async (to, from, next) => {
//   const auth = useUserStore()
//   if (to.meta.requiresAuth) {
//     if (!auth.user) await auth.fetchUser()
//     if (!auth.user) return next('/login')
//   }
//   next()
// })

router.beforeEach(async (to, from, next) => {
  const authStore = useUserStore()
  
  // Initialize Sanctum on first load
  if (!authStore.user) {
    try {
      console.log("try");
      console.log(authStore.user);
      console.log(authStore.loading);
      
      await authStore.fetchUser()
    } catch (error) {
      console.error('Failed to initialize Sanctum:', error)
    }
  }
  
  
  next()
})

export default router;
