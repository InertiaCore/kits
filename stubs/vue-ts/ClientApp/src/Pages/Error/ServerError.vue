<script setup lang="ts">
import Layout from '@/Components/Layout.vue';
import { Link } from '@inertiajs/vue3';

defineProps<{
    message?: string;
    stackTrace?: string;
}>();

</script>
<template>
    <Layout title="Server Error">
        <div
            class="min-h-screen bg-gray-100 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"
        >
            <div class="max-w-max mx-auto">
            <main class="sm:flex">
                <p class="text-4xl font-extrabold text-indigo-600 sm:text-5xl">500</p>
                <div class="sm:ml-6">
                <div class="sm:border-l sm:border-gray-200 sm:pl-6">
                    <h1
                    class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
                    >
                    Server Error
                    </h1>
                    <p class="mt-1 text-base text-gray-500">
                    {{ message || "An unexpected error occurred" }}
                    </p>
                </div>
                <div v-if="stackTrace" class="mt-6 sm:border-l sm:border-gray-200 sm:pl-6">
                    <div class="mt-4">
                        <h3 class="text-sm font-medium text-gray-700 mb-2">
                            Error Details
                        </h3>
                        <pre
                            class="text-xs text-gray-600 overflow-x-auto bg-gray-50 p-4 rounded">
                            {{ stackTrace }}
                        </pre>
                    </div>
                </div>
                <div
                    class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6"
                >
                    <Link
                    href="/"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Go back home
                    </Link>
                </div>
                </div>
            </main>
            </div>
        </div>
    </Layout>
</template>
