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
      <div className="py-8">
        <div className="mb-8">
          <Link href="/dashboards" className="text-[#B19CD9] hover:underline flex items-center">
            ← Back to dashboards
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-[#B19CD9] mb-2">{dashboard.title}</h1>
        <p className="text-[#606060] mb-8">{dashboard.description}</p>
        
        {dashboard.isPremium ? (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-[#606060] mb-4">Premium Dashboard</h2>
            <p className="text-[#606060] mb-6">
              This dashboard is available exclusively to premium subscribers.
            </p>
            <div className="mt-4">
              <a 
                href="/pricing" 
                className="bg-[#F2D680] hover:bg-opacity-90 text-[#606060] px-8 py-3 rounded-md text-lg font-medium transition-colors"
              >
                Upgrade to Premium
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-white p-2 rounded-lg shadow-md w-full">
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