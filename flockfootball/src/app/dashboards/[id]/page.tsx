import { notFound } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import SupersetEmbed from '@/components/dashboards/SupersetEmbed';

// This would eventually come from your API or database
const getDashboardData = (id: string) => {
  const dashboards = {
    'passing-stats': {
      title: 'Passing Stats',
      description: 'Comprehensive quarterback metrics including accuracy, depth of target, red zone performance, and more.',
      dashboardId: 'mxAGv0pOgqb', // You'll need to get this ID from Superset
      isPremium: false
    },
    'rushing-stats': {
      title: 'Rushing Stats',
      description: 'Running back and rushing performance metrics including yards after contact, broken tackles, and red zone usage.',
      dashboardId: 'jwgQ81PGW1x', // You'll need to get this ID from Superset
      isPremium: false
    },
    'receiving-stats': {
      title: 'Receiving Stats',
      description: 'Wide receiver and tight end metrics including target share, yards after catch, and route running efficiency.',
      dashboardId: '9DPJqMNJEdx', // You'll need to get this ID from Superset
      isPremium: false
    },
    'production-share': {
      title: 'Production Share',
      description: 'Analysis of how offensive production is distributed among skill position players.',
      permalink: 'r14GDLDGAXD', //  Real dashboard ID 
      isPremium: true
    },
    'position-share-over-time': {
      title: 'Position Share over Time',
      description: 'Trends in how teams allocate touches to different positions throughout the season.',
      dashboardId: '7w9JL1ROpr4', // You'll need to get this ID from Superset
      isPremium: true
    },
    'snap-count': {
      title: 'Snap Count',
      description: 'Player participation metrics with insights into play type and formation tendencies.',
      dashboardId: 'M7xGVopJ6Kl', // You'll need to get this ID from Superset
      isPremium: true
    },
    'team-share-deep-dive': {
      title: 'Team Share Deep Dive',
      description: 'Detailed breakdown of team play-calling tendencies and situational preferences.',
      dashboardId: 'YdNGEVgJRKV', // You'll need to get this ID from Superset
      isPremium: true
    },
    'team-share-comparison': {
      title: 'Team Share Comparison',
      description: 'Side-by-side comparison of how different teams distribute touches and targets.',
      dashboardId: 'pE2J5AKJLkK', // You'll need to get this ID from Superset
      isPremium: true
    }
  };

  return dashboards[id as keyof typeof dashboards] || null;
};

export default function DashboardDetail({ params }: { params: { id: string } }) {
  const dashboard = getDashboardData(params.id);
  
  if (!dashboard) {
    notFound();
  }

  return (
    <MainLayout>
      <div className="py-12">
        
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/dashboards" 
            className="inline-flex items-center text-primary hover:text-dark transition-colors duration-300 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboards
          </Link>
        </div>

        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="bg-surface rounded-2xl p-8 shadow-glass">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-4xl font-light text-primary">
                {dashboard.title}
              </h1>
              {dashboard.isPremium && (
                <span className="bg-secondary text-dark px-4 py-2 rounded-full text-sm font-medium">
                  Premium
                </span>
              )}
            </div>
            <p className="text-dark opacity-80 text-lg max-w-3xl">
              {dashboard.description}
            </p>
          </div>
        </div>
        
        {/* Dashboard Content */}
        {dashboard.isPremium ? (
          /* Premium Upgrade Card */
          <div className="bg-surface rounded-2xl p-12 shadow-glass text-center">
            <div className="max-w-2xl mx-auto">
              
              {/* Lock Icon */}
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-light text-primary mb-4">Premium Dashboard</h2>
              <p className="text-dark opacity-80 mb-8 text-lg">
                This advanced analytics dashboard is available exclusively to premium subscribers. 
                Unlock deeper insights and gain the competitive edge you need to dominate your fantasy league.
              </p>
              
              {/* Features List */}
              <div className="bg-background rounded-xl p-6 mb-8">
                <h3 className="font-bold text-dark mb-4">Premium Features Include:</h3>
                <ul className="text-left space-y-2 text-dark opacity-80">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Advanced player and team analytics
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Historical trend analysis
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Weekly data updates
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Export capabilities
                  </li>
                </ul>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/pricing" 
                  className="px-8 py-4 bg-primary text-white rounded-[25px] font-bold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
                >
                  Upgrade to Premium
                </a>
                <Link 
                  href="/dashboards" 
                  className="px-8 py-4 border-2 border-dark text-dark rounded-[25px] font-bold hover:bg-dark hover:text-white transition-all duration-300"
                >
                  View Free Dashboards
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* Free Dashboard Embed */
          <div className="bg-surface rounded-2xl p-4 shadow-glass">
            <SupersetEmbed
              permalink={dashboard.permalink}
              title={dashboard.title}
              height="1500px"
            />
          </div>
        )}
      </div>
    </MainLayout>
  );
}