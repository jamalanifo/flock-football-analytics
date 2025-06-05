import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section - matches the demo's elevated card style */}
      <div className="min-h-[600px] flex items-center justify-center">
        <div className="w-full max-w-4xl">
          
          {/* Main Hero Card - elevated with rounded corners */}
          <div className="bg-primary rounded-3xl p-12 shadow-glass hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
            
            {/* Hero Text Content */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-light text-dark mb-6 leading-tight">
                Dominating fantasy football with data-driven insights.
              </h1>
              <p className="text-xl text-dark opacity-80 max-w-2xl mx-auto">
                Advanced analytics and visualizations to give you the edge in your fantasy league.
              </p>
            </div>
            
            {/* Call to Action Button */}
            <div className="text-center mb-12">
              <a 
                href="/dashboards" 
                className="inline-block px-8 py-4 rounded-[25px] border-2 border-dark text-dark font-bold hover:bg-dark hover:text-primary transition-all duration-300 text-lg"
              >
                Explore Dashboards
              </a>
            </div>
            
            {/* Dashboard Preview Mockup */}
            <div className="glass rounded-2xl p-6">
              <div className="h-32 bg-gradient-to-r from-dark to-transparent rounded-xl opacity-60 mb-4"></div>
              <div className="text-dark opacity-70 text-sm">
                Player Performance Analytics ↓
              </div>
            </div>
          </div>
          
          {/* Feature Cards - below the main hero */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            
            {/* Feature 1 */}
            <div className="bg-surface rounded-2xl p-6 shadow-glass hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-primary mb-3">Advanced Stats</h3>
              <p className="text-dark opacity-80">
                Dive deep into player and team analytics with our interactive dashboards
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-surface rounded-2xl p-6 shadow-glass hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-primary mb-3">Free Access</h3>
              <p className="text-dark opacity-80">
                Start with our free dashboards and upgrade for premium insights
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-surface rounded-2xl p-6 shadow-glass hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-primary mb-3">Pro Insights</h3>
              <p className="text-dark opacity-80">
                Get the edge on your competition with our premium analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}