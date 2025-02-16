<script setup lang="ts">
import Layout from '@/Components/Layout.vue';
import { ref } from 'vue'

defineProps<{
    title?: string;
}>();

const count = ref(0)

</script>

<template>
    <Layout title="Counter">
        <div class="flex flex-col justify-center items-center gap-6" >
            <h1 class="text-2xl font-bold">Counter</h1>

            <p>This is a simple example of a Vue component.</p>

            <div class="flex gap-6">
                <button class="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" @click="count--">
                    Decrement
                </button>
                <div class="text-2xl font-bold" aria-live="polite">
                    <p aria-live="polite">
                        <strong>{{ count }}</strong>
                    </p>
                </div>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" @click="count++">
                    Increment
                </button>
            </div>
        </div>
    </Layout>
</template>
