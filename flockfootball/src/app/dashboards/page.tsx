import MainLayout from '@/components/layout/MainLayout';

export default function Dashboards() {
  // Dashboard categories with explanations
  const categories = [
    {
      id: 'player-comparison',
      title: 'Player Comparison',
      description: 'Compare players across different metrics to make informed fantasy decisions',
      isPrimarilyFree: true
    },
    {
      id: 'team-deep-dive',
      title: 'Team Deep Dive',
      description: 'Analyze team performance patterns and offensive tendencies',
      isPrimarilyFree: false
    },
    {
      id: 'team-preference',
      title: 'Team Preference',
      description: 'Understand how teams distribute opportunities among players',
      isPrimarilyFree: false
    },
    {
      id: 'team-comparison',
      title: 'Team Comparison',
      description: 'Compare teams head-to-head across various metrics',
      isPrimarilyFree: false
    }
  ];

  // Dashboard data organized by category
  const dashboardsByCategory = {
    'player-comparison': [
      {
        id: 'passing-stats',
        title: 'Passing Stats',
        description: 'Comprehensive quarterback metrics including accuracy, depth of target, red zone performance, and more.',
        isPremium: false
      },
      {
        id: 'rushing-stats',
        title: 'Rushing Stats',
        description: 'Running back and rushing performance metrics including yards after contact, broken tackles, and red zone usage.',
        isPremium: false
      },
      {
        id: 'receiving-stats',
        title: 'Receiving Stats',
        description: 'Wide receiver and tight end metrics including target share, yards after catch, and route running efficiency.',
        isPremium: false
      }
    ],
    'team-deep-dive': [
      {
        id: 'production-share',
        title: 'Production Share',
        description: 'Analysis of how offensive production is distributed among skill position players.',
        isPremium: true
      },
      {
        id: 'position-share-over-time',
        title: 'Position Share over Time',
        description: 'Trends in how teams allocate touches to different positions throughout the season.',
        isPremium: true
      },
      {
        id: 'snap-count',
        title: 'Snap Count',
        description: 'Player participation metrics with insights into play type and formation tendencies.',
        isPremium: true
      }
    ],
    'team-preference': [
      {
        id: 'team-share-deep-dive',
        title: 'Team Share Deep Dive',
        description: 'Detailed breakdown of team play-calling tendencies and situational preferences.',
        isPremium: true
      }
    ],
    'team-comparison': [
      {
        id: 'team-share-comparison',
        title: 'Team Share Comparison',
        description: 'Side-by-side comparison of how different teams distribute touches and targets.',
        isPremium: true
      }
    ]
  };

  return (
    <MainLayout>
      <div className="py-5 md:py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#B19CD9] mb-2">Football Analytics Dashboards</h1>
        <p className="text-sm md:text-base text-[#606060] mb-6 md:mb-8">Explore our interactive dashboards organized by research focus area</p>
        
        {/* Display each category and its dashboards */}
        {categories.map((category) => (
          <div key={category.id} className="mb-8 md:mb-12">
            <div className="border-b-2 border-[#B19CD9] pb-2 mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#606060]">{category.title}</h2>
              <p className="text-sm md:text-base text-[#606060] mt-1">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {dashboardsByCategory[category.id].map((dashboard) => (
                <div key={dashboard.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Dashboard preview (placeholder) */}
                  <div className="h-32 md:h-40 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400 text-sm md:text-base">
                      {dashboard.isPremium ? 'Premium Dashboard' : 'Free Dashboard'}
                    </span>
                  </div>
                  
                  {/* Dashboard info */}
                  <div className="p-3 md:p-4">
                    <div className="flex justify-between items-start flex-wrap gap-1">
                      <h3 className="text-lg md:text-xl font-bold text-[#606060]">{dashboard.title}</h3>
                      {dashboard.isPremium && (
                        <span className="bg-[#F2D680] text-[#606060] text-xs px-2 py-1 rounded-full">
                          Premium
                        </span>
                      )}
                    </div>
                    <p className="text-xs md:text-sm text-[#606060] mt-2">{dashboard.description}</p>
                    <div className="mt-3 md:mt-4">
                      <a 
                        href={`/dashboards/${dashboard.id}`} 
                        className={`inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-md text-white text-xs md:text-sm font-medium ${
                          dashboard.isPremium 
                            ? 'bg-gray-300 cursor-not-allowed' 
                            : 'bg-[#B19CD9] hover:bg-opacity-90'
                        }`}
                      >
                        {dashboard.isPremium ? 'Upgrade to Access' : 'View Dashboard'}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}