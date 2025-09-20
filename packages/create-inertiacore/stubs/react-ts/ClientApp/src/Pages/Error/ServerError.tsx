import { Head } from '@inertiajs/react';

export interface ServerErrorProps {
    message?: string;
    stackTrace?: string;
}

export default function ServerError({ message, stackTrace }: ServerErrorProps) {
    return (
        <>
            <Head title="Server Error" />
            <div className="min-h-screen bg-gray-100 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="mx-auto max-w-max">
                    <main className="sm:flex">
                        <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
                            500
                        </p>
                        <div className="sm:ml-6">
                            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                                    Server Error
                                </h1>
                                <p className="mt-1 text-base text-gray-500">
                                    {message || 'An unexpected error occurred'}
                                </p>
                            </div>
                            {stackTrace && (
                                <div className="mt-6 sm:border-l sm:border-gray-200 sm:pl-6">
                                    <div className="mt-4">
                                        <h3 className="mb-2 text-sm font-medium text-gray-700">
                                            Error Details
                                        </h3>
                                        <pre className="overflow-x-auto rounded bg-gray-50 p-4 text-xs text-gray-600">
                                            {stackTrace}
                                        </pre>
                                    </div>
                                </div>
                            )}
                            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                <a
                                    href="/"
                                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                                >
                                    Go back home
                                </a>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
