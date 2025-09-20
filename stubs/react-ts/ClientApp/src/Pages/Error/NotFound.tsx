import { Layout } from '@/Components/Layout';
import { Link } from '@inertiajs/react';

export default function NotFound() {
    return (
        <Layout title="404 Not Found">
            <div className="text-center">
                <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
                <h2 className="mb-4 text-2xl font-semibold text-gray-700">
                    Page Not Found
                </h2>
                <p className="mb-8 text-gray-600">
                    The page you're looking for doesn't exist.
                </p>
                <p className="mb-8 text-gray-600">{window.location.href}</p>
                <Link
                    href="/"
                    className="inline-block rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
                >
                    Go Home
                </Link>
            </div>
        </Layout>
    );
}
