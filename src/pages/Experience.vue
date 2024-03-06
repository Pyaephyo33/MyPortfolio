<template>
    <div class="bg-zinc-300 shadow min-h-full">
        <div class="container mx-auto sm:px-6 lg:px-8 p-4 sm:p-6">

            <h1 class="text-4xl font-bold md:my-8">Experience</h1>
            <p class="text-justify text-xl">
                I've over one year experience in web development and I love to learn technologies and design patterns in development. 
            </p>
            
            <h1 class="text-3xl font-bold md:my-8">Work Experience</h1>
            <div v-for="experience in experiences" :key="experience" class="card w-full bg-emerald-600 shadow=xl my-3">
                <div class="card-body">
                    <h2 class="card-title text-2xl">{{ experience.company }} - {{ experience.department }}</h2>
                    <h3 class="text-xl">{{ experience.position }}</h3>
                    <h4 class="text-lg">{{ experience.year }} | {{ experience.duration }}</h4>
                </div>
            </div>

            <h1 class="text-3xl font-bold md:my-8">Project</h1>
            <div v-for="project in projects" :key="project" class="card w-full bg-emerald-600 shadow=xl my-3">
                <div class="card-body">
                    <h2 class="card-title text-2xl">{{ project.title }}</h2>
                    <p class="text-xl my-2">{{ project.description }}</p>
                    <h3 class="text-xl text-yellow-300">Techologies - {{ project.technologies }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';

const experiences = inject('experiences')
const projects = inject('projects')
const router = useRouter()


</script>

<style scoped>

</style>