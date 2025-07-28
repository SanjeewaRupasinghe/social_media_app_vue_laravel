<script setup>

// App.vue or main.js
import { computed } from 'vue'
import useUserStore from "@/store/user.js";
const auth = useUserStore()
const user = computed(() => auth.user)


</script>

<template>
 {{user}}
 <router-view />
</template>
