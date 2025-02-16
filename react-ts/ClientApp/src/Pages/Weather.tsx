import { Layout } from "@/Components/Layout";

type WeatherForecast = {
    date: string;
    temperatureF: number;
    temperatureC: number;
    summary: string;
}

export default function Weather({ forecasts }: { forecasts: WeatherForecast[] }) {
    const rows = forecasts.map((forecast) => (
        <tr key={forecast.date} className="border-b border-gray-200 py-2 even:bg-gray-50">
            <td>{forecast.date}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
        </tr>
    ));

    return (
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            <table>
                <thead>
                    <tr className="text-left">
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

Weather.layout = (page: React.ReactNode) => <Layout title="Weather" children={page} />;
