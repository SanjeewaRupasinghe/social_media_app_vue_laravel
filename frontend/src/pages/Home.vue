<script setup>
import DefaultLayout from "@/components/DefaultLayout.vue";
import { PhotoIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <DefaultLayout>
    <header class="bg-white shadow-sm">
      <div class="px-4 py-6 mx-2 max-w-7xl">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          Dashboard
        </h1>
      </div>
    </header>

    <div class="px-4 py-6 mx-2">
      <form action="">
        <div class="row">
          <div class="col-span-full">
            <label
              for="cover-photo"
              class="block font-medium text-gray-900 text-sm/6"
              >Cover photo</label
            >
            <div
              class="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25"
            >
              <div class="text-center">
                <PhotoIcon
                  class="mx-auto text-gray-300 size-12"
                  aria-hidden="true"
                />
                <div class="flex mt-4 text-gray-600 text-sm/6">
                  <label
                    for="file-upload"
                    class="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      class="sr-only"
                    />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-gray-600 text-xs/5">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
          <div class="col-span-full">
            <label for="about" class="block font-medium text-gray-900 text-sm/6"
              >About</label
            >
            <div class="mt-2">
              <textarea
                name="about"
                id="about"
                rows="3"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div class="mt-3 col-span-full float-end">
            <button
              type="submit"
              class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </DefaultLayout>
</template>
