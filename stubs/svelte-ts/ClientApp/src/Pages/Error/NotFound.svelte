<script lang="ts">
  import Layout from "@/Components/Layout.svelte";
  import { Link } from "@inertiajs/svelte";
</script>

<svelte:head>
  <title>404 Not Found</title>
</svelte:head>

<Layout title="404 Not Found">
  <div class="p-4 gap-y-4 flex flex-col">
    <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
    <h2 class="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
    <p class="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
    <p class="text-gray-600 mb-8">
      {window.location.href}
    </p>

    <Link
      href="/"
      class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
    >
      Go Home
    </Link>
  </div>
</Layout>
