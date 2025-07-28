import { defineStore } from "pinia";
import axiosClient from "@/axios";

const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  actions: {
    fetchUser() {

        axiosClient.get("/sanctum/csrf-cookie").then((response) => {
            axiosClient.get("/api/user").then((response) => {
              console.log("========================");
              
              this.user = response.data;

              console.log(this.user);
              
            }).catch((error) => {
              console.log(error);
            });
          });


    //   axiosClient.get("/sanctum/csrf-cookie").then((response) => {
    //     axiosClient
    //       .get("/api/user")
    //       .then((response) => {
    //         console.log(response);
    //         this.user = response.data;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   });
    },
  },
});

export default useUserStore;
