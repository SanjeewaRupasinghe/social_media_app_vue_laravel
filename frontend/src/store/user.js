import { defineStore } from "pinia";
import axiosClient from "@/axios";

const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  actions: {
    fetchUser() {
      axiosClient.get("/sanctum/csrf-cookie").then((response) => {
        axiosClient
          .get("/api/user")
          .then((response) => {
            this.user = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      })
    },
  },
});

export default useUserStore;
