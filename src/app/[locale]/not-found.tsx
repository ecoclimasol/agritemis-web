import { Link } from "@/i18n/navigation.client";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-6xl font-bold text-agri-green-600">404</h1>
        <h2 className="text-2xl font-bold text-text-primary">Page not found</h2>
        <p className="text-text-secondary">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-agri-green-600 text-white rounded-lg font-medium hover:bg-agri-green-700 transition-colors duration-200"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
