import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

export default function Login() {
  return (
    <MainLayout>
      <div className="py-8 flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-3xl font-bold text-[#B19CD9] mb-6 text-center">Log In</h1>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#606060] mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B19CD9]"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#606060] mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B19CD9]"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#B19CD9] focus:ring-[#B19CD9] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-[#606060]">
                  Remember me
                </label>
              </div>
              
              <a href="#" className="text-sm text-[#B19CD9] hover:underline">
                Forgot password?
              </a>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full bg-[#B19CD9] hover:bg-opacity-90 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B19CD9]"
              >
                Sign in
              </button>
            </div>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-[#606060]">
                  Or continue with
                </span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                
                  href="#"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-[#606060] hover:bg-gray-50"
                >
                  Google
                </a>
              </div>
              <div>
                
                  href="#"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-[#606060] hover:bg-gray-50"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          
          <p className="mt-6 text-center text-sm text-[#606060]">
            Not a member?{' '}
            <Link href="/signup" className="text-[#B19CD9] hover:underline">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}