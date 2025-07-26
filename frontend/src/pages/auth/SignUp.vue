<script setup>
import GuestLayout from "@/components/GuestLayout.vue";
</script>

<template>
  <GuestLayout> 
    <div class="mt-10 space-y-6 sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 font-bold tracking-tight text-center text-gray-900 text-2xl/9"
      >
        Sign up to your account
      </h2>
      <form class="space-y-3" action="#" method="POST">
        <div>
          <label for="name" class="block font-medium text-gray-900 text-sm/6"
            >Name</label
          >
          <div class="mt-1">
            <input
              type="text"
              id="name"
              autocomplete="name"
              required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label for="email" class="block font-medium text-gray-900 text-sm/6"
            >Email address</label
          >
          <div class="mt-1">
            <input
              type="email"
              id="email"
              autocomplete="email"
              required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block font-medium text-gray-900 text-sm/6"
              >Password</label
            >
          </div>
          <div class="mt-1">
            <input
              type="password"
              id="password"
              autocomplete="current-password"
              required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label
              for="confirm-password"
              class="block font-medium text-gray-900 text-sm/6"
              >Confirm Password</label
            >
          </div>
          <div class="mt-1">
            <input
              type="password"
              id="confirm-password"
              autocomplete="current-password"
              required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-gray-500 text-sm/6">
        Already have an account?
        {{ " " }}
        <router-link :to="{name:'login'}" class="font-semibold text-indigo-600 hover:text-indigo-500"
          >Login</router-link
        >
      </p>
    </div>
    </GuestLayout>
</template>
