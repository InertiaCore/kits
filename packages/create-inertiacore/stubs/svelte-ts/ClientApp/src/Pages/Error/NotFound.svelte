<script lang="ts">
    import Layout from '@/Components/Layout.svelte';
    import { Link } from '@inertiajs/svelte';
</script>

<svelte:head>
    <title>404 Not Found</title>
</svelte:head>

<Layout title="404 Not Found">
    <div class="flex flex-col gap-y-4 p-4">
        <h1 class="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <h2 class="mb-4 text-2xl font-semibold text-gray-700">
            Page Not Found
        </h2>
        <p class="mb-8 text-gray-600">
            The page you're looking for doesn't exist.
        </p>
        <p class="mb-8 text-gray-600">
            {window.location.href}
        </p>

        <Link
            href="/"
            class="inline-block rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
        >
            Go Home
        </Link>
    </div>
</Layout>
