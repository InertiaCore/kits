import { Link } from '@inertiajs/react';

export function Layout({
    title,
    children,
}: {
    title: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex items-center justify-between border-b border-gray-200 bg-white p-4">
                <h1 className="text-2xl font-bold">{title}</h1>
                <div className="flex gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/counter">Counter</Link>
                    <Link href="/weather-forecast">Weather</Link>
                </div>
            </div>
            <div className="mt-4 p-4">{children}</div>
        </div>
    );
}
