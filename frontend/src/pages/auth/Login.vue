<script setup>
import GuestLayout from "@/components/GuestLayout.vue";
</script>

<template>
  <GuestLayout>
    <div class="mt-10 space-y-6 sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 font-bold tracking-tight text-center text-gray-900 text-2xl/9"
      >
        Sign in to your account
      </h2>
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block font-medium text-gray-900 text-sm/6"
            >Email address</label
          >
          <div class="mt-2">
            <input
              type="email"
              name="email"
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
            <!-- <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Forgot password?</a
              >
            </div> -->
          </div>
          <div class="mt-2">
            <input
              type="password"
              name="password"
              id="password"
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
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-gray-500 text-sm/6">
        Not a member?
        {{ " " }}
        <router-link :to="{name:'signup'}" class="font-semibold text-indigo-600 hover:text-indigo-500"
          >Sign up</router-link
        >
      </p>
    </div>
  </GuestLayout>
</template>
