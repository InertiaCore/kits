<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
defineProps<{
    title?: string;
}>();
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <Head :title="title" />
        <div
            class="flex items-center justify-between border-b border-gray-200 bg-white p-4"
        >
            <h1 class="text-2xl font-bold">{{ title }}</h1>
            <div class="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/counter">Counter</Link>
                <Link href="/weather-forecast">Weather</Link>
            </div>
        </div>
        <div class="mt-4 p-4">
            <slot />
        </div>
    </div>
</template>
