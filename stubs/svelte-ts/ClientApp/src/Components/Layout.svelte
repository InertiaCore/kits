<script lang="ts">
  import { Link } from "@inertiajs/svelte";
  let { title, children } = $props<{
    title?: string;
    children: any;
  }>();
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class=" bg-gray-50 min-h-screen">
  <div
    class="flex justify-between items-center bg-white border-b border-gray-200 p-4"
  >
    <h1 class="text-2xl font-bold">{title}</h1>
    <div class="flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/counter">Counter</Link>
      <Link href="/weather-forecast">Weather</Link>
    </div>
  </div>
  <div class="mt-4 p-4">
    {@render children()}
  </div>
</div>
