import { Link } from "@inertiajs/react";

export function Layout({ title, children }: { title: React.ReactNode, children: React.ReactNode }) {
    return (
        <div className=" bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center bg-white border-b border-gray-200 p-4">
                <h1 className="text-2xl font-bold">{title}</h1>
                <div className="flex gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/counter">Counter</Link>
                    <Link href="/weather-forecast">Weather</Link>
                </div>
            </div >
            <div className="mt-4 p-4">
                {children}
            </div>
        </div>
    );
}
