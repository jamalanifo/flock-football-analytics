import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-6xl font-bold text-[#B19CD9] mb-4">404</h1>
        <h2 className="text-2xl font-medium text-[#606060] mb-6">Page Not Found</h2>
        <p className="text-[#606060] mb-8 text-center max-w-md">
          Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or never existed.
        </p>
        <Link
          href="/"
          className="bg-[#B19CD9] hover:bg-opacity-90 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
        >
          Return Home
        </Link>
      </div>
    </MainLayout>
  );
}