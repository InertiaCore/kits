import { Link } from '@inertiajs/react'
import { Layout } from '@/Components/Layout'

export default function NotFound() {
  return (
    <Layout title="404 Not Found">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <p className="text-gray-600 mb-8">
          {window.location.href}
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
        >
          Go Home
        </Link>
      </div>
    </Layout >
  )
}
