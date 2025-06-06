import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section - using your existing structure but updated colors */}
      <div className="min-h-[600px] flex items-center justify-center">
        <div className="w-full max-w-4xl">
          
          {/* Main Hero Card - now uses off-white background */}
          <div className="bg-content-bg rounded-3xl p-12 shadow-glass hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
            
            {/* Hero Text Content */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-light text-dark mb-6 leading-tight">
                Dominating fantasy football with data-driven insights.
              </h1>
              <p className="text-xl text-dark opacity-80 max-w-2xl mx-auto mb-10">
                Advanced analytics and visualizations to give you the edge in your fantasy league.
              </p>
              
              {/* Call to Action Button */}
              <a 
                href="/dashboards" 
                className="inline-block px-8 py-4 rounded-[25px] border-2 border-dark text-dark font-bold hover:bg-dark hover:text-content-bg transition-all duration-300 text-lg mb-12"
              >
                Explore Dashboards
              </a>
            </div>
            
            {/* Dashboard Preview Grid - NEW from v33 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Dashboard 1 - Quarterback Analytics */}
              <div className="bg-surface rounded-2xl p-5 shadow-glass hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-white/30">
                <div className="w-full h-36 rounded-xl mb-4 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold text-center">
                  <span>Passing Stats<br/>Dashboard</span>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-dark mb-2">Quarterback Analytics</h3>
                  <p className="text-sm text-dark opacity-70 mb-3 leading-relaxed">
                    Comprehensive QB metrics including accuracy, red zone performance, and pressure ratings.
                  </p>
                  <span className="inline-block px-3 py-1 rounded-xl text-xs font-medium bg-secondary text-dark">
                    Free Access
                  </span>
                </div>
              </div>
              
              {/* Dashboard 2 - Wide Receiver Insights */}
              <div className="bg-surface rounded-2xl p-5 shadow-glass hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-white/30">
                <div className="w-full h-36 rounded-xl mb-4 bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-semibold text-center">
                  <span>Receiving Stats<br/>Dashboard</span>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-dark mb-2">Wide Receiver Insights</h3>
                  <p className="text-sm text-dark opacity-70 mb-3 leading-relaxed">
                    Target share analysis, route efficiency, and yards after catch breakdowns.
                  </p>
                  <span className="inline-block px-3 py-1 rounded-xl text-xs font-medium bg-secondary text-dark">
                    Free Access
                  </span>
                </div>
              </div>
              
              {/* Dashboard 3 - Running Back Analysis */}
              <div className="bg-surface rounded-2xl p-5 shadow-glass hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-white/30">
                <div className="w-full h-36 rounded-xl mb-4 bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-semibold text-center">
                  <span>Rushing Stats<br/>Dashboard</span>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-dark mb-2">Running Back Analysis</h3>
                  <p className="text-sm text-dark opacity-70 mb-3 leading-relaxed">
                    Efficiency metrics, goal line usage, and snap count analysis for all RBs.
                  </p>
                  <span className="inline-block px-3 py-1 rounded-xl text-xs font-medium bg-secondary text-dark">
                    Free Access
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}