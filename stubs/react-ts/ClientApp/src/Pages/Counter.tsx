import React, { useState } from "react";
import { Layout } from "@/Components/Layout";
import { Page } from "@inertiajs/core";
export default function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter((prev) => prev + 1);
    const decrement = () => setCounter((prev) => prev - 1);

    return (
        <div className="flex flex-col justify-center items-center gap-6" >
            <h1 className="text-2xl font-bold">Counter</h1>

            <p>This is a simple example of a React component.</p>

            <div className="flex gap-6">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={decrement}>
                    Decrement
                </button>
                <div className="text-2xl font-bold" aria-live="polite">
                    <p aria-live="polite">
                        <strong>{counter}</strong>
                    </p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={increment}>
                    Increment
                </button>
            </div>
        </div>
    );
}

Counter.layout = (page: Page) => <Layout title="Counter" children={page as unknown as React.ReactNode} />;
