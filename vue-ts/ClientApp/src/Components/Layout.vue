<script setup lang="ts">
import { Link, Head } from '@inertiajs/vue3';
defineProps<{
    title?: string;
}>();
</script>

<template>
    <div class=" bg-gray-50 min-h-screen">
        <Head title={title} />
        <div class="flex justify-between items-center bg-white border-b border-gray-200 p-4">
            <h1 class="text-2xl font-bold">{{title}}</h1>
            <div class="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/counter">Counter</Link>
                <Link href="/weather-forecast">Weather</Link>
            </div>
        </div >
        <div class="mt-4 p-4">
            <slot />
        </div>
    </div>
</template>
