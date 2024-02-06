<template>
    <div class="bg-zinc-300 shadow min-h-full">
        <div class="container mx-auto sm:px-6 lg:px-8 p-4 sm:p-6">

            <h1 class="text-4xl font-bold md:my-8">About Me</h1>
            <p class="text-justify text-xl">
                Hello, I'm Pyae Phyo from Yangon, Myanmar, a fast learner and self-motivated individual in web development. Eager to expand knowledge, he actively engages with the development community, seeking opportunities to advance skills and contribute to the field
            </p>

            <h1 class="text-3xl font-bold md:my-8">My Tech Stack</h1>
            <div>
                
            </div>

            <h1 class="text-3xl font-bold md:my-8">Education</h1>
            <div v-for="education in educations" :key="education.id" class="card w-full bg-base-100 shadow-xl my-3 hover:bg-green-600 hover:text-white">
                <div class="card-body">
                    <h2 class="card-title text-2xl">{{ education.title }}</h2>
                    <h3 class="text-lg">{{ education.subtitle }}</h3>
                    <h4 class="text-md">{{ education.year }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';

const educations = inject('educations')
const router = useRouter()


</script>

<style scoped>

</style>