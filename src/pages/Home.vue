<template>
    <div class="bg-zinc-300 shadow min-h-full xl:p-[250px] lg:p-[200px] md:p-[150px]">
        <div class="container mx-auto sm:px-6 lg:px-8 p-4 sm:p-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="sm:order-2">
                    <!-- Image for larger screens, ordered second in small screens -->
                    <img src="/images/developer.gif" alt="Developer" class="rounded-lg m-auto">
                </div>
                <div class="sm:order-1">
                    <!-- Text content for larger screens, ordered first in small screens -->
                    <h1 class="text-4xl mb-4">Welcome Visitors</h1>
                    <h2 class="text-2xl text-justify">I'm <span class="text-green-700 text-2xl">Pyae Phyo Linn</span>, a passionate and results-driven web developer with a strong foundation. With one and a half years of hands-on experience in the field.</h2>
                    <router-link to="/contact" class="btn btn-success mt-8 text-white px-12">Contact Me</router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped>

</style>