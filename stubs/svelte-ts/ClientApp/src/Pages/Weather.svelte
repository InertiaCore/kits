<script lang="ts">
    import Layout from '@/Components/Layout.svelte';

    type WeatherForecast = {
        date: string;
        temperatureF: number;
        temperatureC: number;
        summary: string;
    };

    let { forecasts }: { forecasts: WeatherForecast[] } = $props();
</script>

<Layout title="Weather">
    <div class="mx-auto flex max-w-4xl flex-col gap-4">
        <table>
            <thead>
                <tr class="text-left">
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {#each forecasts as forecast (forecast.date)}
                    <tr class="border-b border-gray-200 py-2 even:bg-gray-50">
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</Layout>
