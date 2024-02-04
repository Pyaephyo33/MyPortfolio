<template>
  <Disclosure as="nav" class="bg-current shadow" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="flex flex-shrink-0 items-center">
            <router-link to="/" class="px-3 pt-1"><span class="font-bold text-green-600">Pyae</span> <span class="text-white">Phyo</span></router-link>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="#" class="inline-flex items-center border-b-2 px-5 pt-1 text-sm font-medium text-white">Home</a>
            <router-link to="/about" class="inline-flex items-center border-b-2 border-transparent px-5 pt-1 text-sm font-medium text-white hover:border-gray-300 hover:text-green-700">About</router-link>
            <a href="#" class="inline-flex items-center border-b-2 border-transparent px-5 pt-1 text-sm font-medium text-white hover:border-gray-300 hover:text-green-700">Experience</a>
            <a href="#" class="inline-flex items-center border-b-2 border-transparent px-5 pt-1 text-sm font-medium text-white hover:border-gray-300 hover:text-green-700">Contact</a>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-3 pt-2">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <DisclosureButton as="a" href="#" class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700">Dashboard</DisclosureButton>
        <DisclosureButton as="a" href="#" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">Team</DisclosureButton>
        <DisclosureButton as="a" href="#" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">Projects</DisclosureButton>
        <DisclosureButton as="a" href="#" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">Calendar</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
<!-- <div class="container mx-auto sm:px-6 lg:px-8">
    <h1 class="font-semibold text-2xl  text-blue-600">Hello World 123 Testing</h1>


    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div> -->

  <router-view></router-view>


</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
</style>