<script setup lang="ts">
import Layout from '@/Components/Layout.vue';

type WeatherForecast = {
    date: string;
    temperatureF: number;
    temperatureC: number;
    summary: string;
};

defineProps<{
    forecasts: WeatherForecast[];
}>();
</script>

<template>
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
                    <tr
                        v-for="forecast in forecasts"
                        :key="forecast.date"
                        class="border-b border-gray-200 py-2 even:bg-gray-50"
                    >
                        <td>{{ forecast.date }}</td>
                        <td>{{ forecast.temperatureC }}</td>
                        <td>{{ forecast.temperatureF }}</td>
                        <td>{{ forecast.summary }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Layout>
</template>
