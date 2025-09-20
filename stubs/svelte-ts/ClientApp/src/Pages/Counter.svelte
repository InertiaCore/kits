<script lang="ts">
    import Layout from '@/Components/Layout.svelte';

    let count = $state(0);
</script>

<Layout title="Counter">
    <div class="flex flex-col items-center justify-center gap-6">
        <h1 class="text-2xl font-bold">Counter</h1>

        <p>This is a simple example of a Svelte component.</p>

        <div class="flex gap-6">
            <button
                class="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white"
                onclick={() => count--}
            >
                Decrement
            </button>
            <div class="text-2xl font-bold" aria-live="polite">
                <p aria-live="polite">
                    <strong>{count.toString()}</strong>
                </p>
            </div>
            <button
                class="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white"
                onclick={() => count++}
            >
                Increment
            </button>
        </div>
    </div>
</Layout>
