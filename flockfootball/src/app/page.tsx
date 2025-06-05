import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="text-center my-6 md:my-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#B19CD9] mb-3 md:mb-4">
          Welcome to Flock Football Analytics
        </h1>
        <p className="text-lg md:text-xl text-[#606060] mb-6 md:mb-8">
          Your premier destination for fantasy football research and analytics
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mt-8 md:mt-12">
          {/* Feature 1 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-[#B19CD9] mb-2">Advanced Stats</h3>
            <p className="text-sm md:text-base text-[#606060]">
              Dive deep into player and team analytics with our interactive dashboards
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-[#B19CD9] mb-2">Free Access</h3>
            <p className="text-sm md:text-base text-[#606060]">
              Start with our free dashboards and upgrade for premium insights
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-[#B19CD9] mb-2">Pro Insights</h3>
            <p className="text-sm md:text-base text-[#606060]">
              Get the edge on your competition with our premium analysis
            </p>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12">
          <a 
            href="/dashboards" 
            className="bg-[#B19CD9] hover:bg-opacity-90 text-white px-6 md:px-8 py-2 md:py-3 rounded-md text-base md:text-lg font-medium transition-colors"
          >
            Explore Dashboards
          </a>
        </div>
      </div>
    </MainLayout>
  );
}