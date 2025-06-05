import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

export default function Login() {
  return (
    <MainLayout>
      <div className="min-h-[600px] flex items-center justify-center py-12">
        <div className="w-full max-w-md">
          
          {/* Login Card */}
          <div className="bg-surface rounded-2xl p-8 shadow-glass hover:shadow-hover transition-all duration-300">
            
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-light text-primary mb-2">Welcome Back</h1>
              <p className="text-dark opacity-70">Sign in to access your analytics</p>
            </div>
            
            {/* Login Form */}
            <form className="space-y-6">
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white"
                  placeholder="your@email.com"
                />
              </div>
              
              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-dark mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white"
                  placeholder="••••••••"
                />
              </div>
              
              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-dark opacity-70">
                    Remember me
                  </label>
                </div>
                
                <a href="#" className="text-sm text-primary hover:text-dark transition-colors duration-300">
                  Forgot password?
                </a>
              </div>
              
              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-opacity-90 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
              >
                Sign In
              </button>
            </form>
            
            {/* Divider */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-surface text-dark opacity-70">
                    Or continue with
                  </span>
                </div>
              </div>
              
              {/* Social Login Buttons */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-dark hover:bg-gray-50 transition-all duration-300">
                  Google
                </button>
                <button className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-dark hover:bg-gray-50 transition-all duration-300">
                  Twitter
                </button>
              </div>
            </div>
            
            {/* Sign Up Link */}
            <p className="mt-8 text-center text-sm text-dark opacity-70">
              Don't have an account?{' '}
              <Link href="/signup" className="text-primary hover:text-dark font-medium transition-colors duration-300">
                Sign up here
              </Link>
            </p>
          </div>
          
          {/* Free Access Notice */}
          <div className="mt-6 text-center">
            <div className="bg-secondary bg-opacity-50 rounded-xl p-4">
              <p className="text-dark text-sm">
                <span className="font-medium">New to Flock Football?</span><br/>
                Start exploring with our free dashboards - no signup required!
              </p>
              <Link 
                href="/dashboards" 
                className="inline-block mt-3 px-6 py-2 rounded-[25px] border-2 border-dark text-dark font-medium hover:bg-dark hover:text-white transition-all duration-300 text-sm"
              >
                Browse Free Dashboards
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}