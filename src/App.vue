<template>
  <Disclosure as="nav" class="bg-current shadow" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <router-link to="/" class="px-3 pt-1 items-center flex"><span class="font-bold text-green-600">Pyae</span> <span class="text-white px-1">Phyo</span></router-link>
        <div class="flex">
          <!-- <div class="flex flex-shrink-0 items-center">
          </div> -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link to="/" class="inline-flex items-center border-b-2 pt-1 text-sm font-medium text-white focus:text-green-700 focus:border-gray-300">Home</router-link>
            <router-link to="/about" class="inline-flex items-center border-b-2 border-transparent pt-1 text-sm font-medium text-white hover:border-gray-300 hover:text-green-700 focus:text-green-700 focus:border-gray-300">About</router-link>
            <router-link to="/experience" class="inline-flex items-center border-b-2 border-transparent pt-1 text-sm font-medium text-white hover:border-gray-300 hover:text-green-700">Experience</router-link>
            <router-link to="/contact" class="inline-flex items-center border-b-2 border-transparent pt-1 text-sm font-medium text-white hover:border-gray-300 hover:text-green-700">Contact</router-link>
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
        <router-link to="/" class="block border-l-4 border-indigo-500 bg-white py-2 pl-3 pr-4 text-base font-medium text-green-700">Home</router-link>
        <router-link to="/about" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-white hover:text-green-700">About</router-link>
        <router-link to="/experience" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-white hover:text-green-700">Experience</router-link>
        <router-link to="/contact" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-white hover:text-green-700">Contact</router-link>
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
import { provide, ref } from "vue";

const educations = ref([
  {
    id: 1,
    title: 'University of Greenwich',
    subtitle: 'B.SC (Hons) In Computing - First Class',
    year: '2022 - 2023',
  },
  {
    id: 2,
    title: 'NCC Education',
    subtitle: 'Diploma - L5 Diploma in Business Information System',
    year: '2021 - 2022',
  },
  {
    id: 3,
    title: 'NCC Education',
    subtitle: 'Diploma - L4 Diploma in Business Information System',
    year: '2019 - 2020',
  },
  {
    id: 4,
    title: 'Dagon University',
    subtitle: 'Major - Physics',
    year: 'First Year',
  },
  {
    id: 5,
    title: 'TTC',
    subtitle: 'Practising High School of Yangon Uni of Education',
    year: '2019',
  },
])


const certificate = ref([
  {
    id: 1,
    title: 'Fairway Technology',
    subtitle: 'Professional Web Development',
    year: 'Feb 2023 - March 2023',
  }
])


const experiences = ref([
  {
    id: 1,
    company: 'KMD',
    department: 'SoftComm (Software Department)',
    duration: 'six weeks',
    year: '2023 April - 2023 May',
    position: 'Intern Web Developer',
  },
  {
    id: 2,
    company: 'KMD',
    department: 'SoftComm (Software Department)',
    duration: '1 years Contract',
    year: '2023 July - 2024 September',
    position: 'Web Developer',
  }
])

const projects = ref([
  {
    id: 1,
    title: 'Hotel Room Bookings',
    description: 'Smooth high transaction used in both managing and orgnization the system. Main target audience in traveller and agents to cooperate with hotels.',
    technologies: 'PHP, Laravel, TailwindCSS, DaisyUI, JavaScript, PgSQL and other npm & composer Packages'
  },
  {
    id: 2,
    title: 'Invoice',
    description: 'Similar voucher slip system using with Laravel',
    technologies: 'Laravel, Vue, Inertia JS'
  },
  {
    id: 3,
    title: 'Quizz App',
    description: '',
    technologies: 'Vue'
  },
  
])


provide('educations', educations)
provide('experiences', experiences)
provide('projects', projects)
provide('certificate', certificate)

</script>

<style scoped>
*{
  font-family: monospace;
}
</style>