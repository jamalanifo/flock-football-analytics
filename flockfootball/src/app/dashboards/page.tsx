import MainLayout from '@/components/layout/MainLayout';

export default function Dashboards() {
  // Dashboard categories with explanations
  const categories = [
    {
      id: 'player-comparison',
      title: 'Player Comparison',
      description: 'Compare players across different metrics to make informed fantasy decisions',
      isPrimarilyFree: true,
      icon: '🏈'
    },
    {
      id: 'team-deep-dive',
      title: 'Team Deep Dive',
      description: 'Analyze team performance patterns and offensive tendencies',
      isPrimarilyFree: false,
      icon: '🔍'
    },
    {
      id: 'team-preference',
      title: 'Team Preference',
      description: 'Understand how teams distribute opportunities among players',
      isPrimarilyFree: false,
      icon: '⚖️'
    },
    {
      id: 'team-comparison',
      title: 'Team Comparison',
      description: 'Compare teams head-to-head across various metrics',
      isPrimarilyFree: false,
      icon: '🆚'
    }
  ];

  // Dashboard data organized by category
  const dashboardsByCategory = {
    'player-comparison': [
      {
        id: 'passing-stats',
        title: 'Passing Stats',
        description: 'Comprehensive quarterback metrics including accuracy, depth of target, red zone performance, and more.',
        isPremium: false,
        gradient: 'from-[#E6D9F5] to-[#F2D680]'
      },
      {
        id: 'rushing-stats',
        title: 'Rushing Stats',
        description: 'Running back and rushing performance metrics including yards after contact, broken tackles, and red zone usage.',
        isPremium: false,
        gradient: 'from-[#F2D680] to-[#F4A7B9]'
      },
      {
        id: 'receiving-stats',
        title: 'Receiving Stats',
        description: 'Wide receiver and tight end metrics including target share, yards after catch, and route running efficiency.',
        isPremium: false,
        gradient: 'from-[#F4A7B9] to-[#E6D9F5]'
      }
    ],
    'team-deep-dive': [
      {
        id: 'production-share',
        title: 'Production Share',
        description: 'Analysis of how offensive production is distributed among skill position players.',
        isPremium: true,
        gradient: 'from-[#E6D9F5] to-[#F4A7B9]'
      },
      {
        id: 'position-share-over-time',
        title: 'Position Share over Time',
        description: 'Trends in how teams allocate touches to different positions throughout the season.',
        isPremium: true,
        gradient: 'from-[#F4A7B9] to-[#F2D680]'
      },
      {
        id: 'snap-count',
        title: 'Snap Count',
        description: 'Player participation metrics with insights into play type and formation tendencies.',
        isPremium: true,
        gradient: 'from-[#F2D680] to-[#E6D9F5]'
      }
    ],
    'team-preference': [
      {
        id: 'team-share-deep-dive',
        title: 'Team Share Deep Dive',
        description: 'Detailed breakdown of team play-calling tendencies and situational preferences.',
        isPremium: true,
        gradient: 'from-[#E6D9F5] via-[#F2D680] to-[#F4A7B9]'
      }
    ],
    'team-comparison': [
      {
        id: 'team-share-comparison',
        title: 'Team Share Comparison',
        description: 'Side-by-side comparison of how different teams distribute touches and targets.',
        isPremium: true,
        gradient: 'from-[#F4A7B9] via-[#E6D9F5] to-[#F2D680]'
      }
    ]
  };

  return (
    <MainLayout>
      {/* Premium Hero Section */}
      <div className="min-h-[500px] flex items-center justify-center mb-16">
        <div className="w-full max-w-full">
          <div className="bg-gradient-to-br from-[#B19CD9] to-[#F4A7B9] rounded-3xl p-12 shadow-hero hover:shadow-hero-hover transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="text-6xl mb-6">📊</div>
              <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight">
                Football Analytics Dashboards
              </h1>
              <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-8">
                Unlock the power of professional NFL analytics. From basic player comparisons to 
                advanced team tendencies - discover insights that give you the edge.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gradient-to-r from-[#B19CD9] to-[#F4A7B9] px-6 py-3 rounded-full text-white font-medium shadow-lg">
                🆓 3 Free Dashboards
              </span>
              <span className="bg-gradient-to-r from-[#B19CD9] to-[#F4A7B9] px-6 py-3 rounded-full text-white font-medium shadow-lg">
                ⭐ 5 Premium Analytics
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Categories - Premium Layout */}
      <div className="max-w-7xl mx-auto space-y-20">
        {categories.map((category, index) => (
          <div key={category.id} className="relative">
            
            {/* Floating Category Header */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B19CD9] to-[#F4A7B9] rounded-3xl opacity-10"></div>
              <div className="relative bg-white bg-opacity-60 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-glass">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{category.icon}</div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-dark mb-2">{category.title}</h2>
                      <p className="text-lg text-dark opacity-80">{category.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-6 py-3 rounded-full text-sm font-bold shadow-lg ${
                      category.isPrimarilyFree 
                        ? 'bg-[#F2D680] text-dark' 
                        : 'bg-gradient-to-r from-[#F4A7B9] to-[#B19CD9] text-white'
                    }`}>
                      {category.isPrimarilyFree ? '🆓 Free' : '⭐ Premium'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Premium Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {dashboardsByCategory[category.id].map((dashboard, dashIndex) => (
                <div 
                  key={dashboard.id}
                  className={`group relative ${dashboard.isPremium ? 'premium-card' : 'free-card'}`}
                >
                  {/* Card Background with Glassmorphism */}
                  <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-lg rounded-2xl border border-white/30 shadow-glass group-hover:shadow-hover transition-all duration-500"></div>
                  
                  {/* Premium Indicator Glow */}
                  {dashboard.isPremium && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#F4A7B9] to-[#B19CD9] rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur"></div>
                  )}
                  
                  {/* Card Content */}
                  <div className="relative p-8 group-hover:-translate-y-2 transition-transform duration-500">
                    
                    {/* Premium Dashboard Visual */}
                    <div className={`w-full h-56 rounded-xl mb-6 overflow-hidden bg-gradient-to-br ${dashboard.gradient} relative`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-5xl mb-4">
                            {dashboard.isPremium ? '⭐' : '📈'}
                          </div>
                          <div className="bg-black bg-opacity-30 backdrop-blur-sm px-4 py-2 rounded-full">
                            <span className="font-bold text-lg">
                              {dashboard.isPremium ? 'Premium Analytics' : 'Free Dashboard'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Access Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          dashboard.isPremium 
                            ? 'bg-white text-[#B19CD9]' 
                            : 'bg-[#F2D680] text-dark'
                        }`}>
                          {dashboard.isPremium ? 'PREMIUM' : 'FREE'}
                        </span>
                      </div>
                    </div>
                    
                    {/* Dashboard Info */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-dark group-hover:text-[#B19CD9] transition-colors duration-300">
                        {dashboard.title}
                      </h3>
                      
                      <p className="text-sm text-dark opacity-70 leading-relaxed">
                        {dashboard.description}
                      </p>
                      
                      <div className="pt-2">
                        <a 
                          href={`/dashboards/${dashboard.id}`} 
                          className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                            dashboard.isPremium 
                              ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-600 cursor-not-allowed' 
                              : 'bg-gradient-to-r from-[#B19CD9] to-[#F4A7B9] text-white hover:shadow-lg hover:-translate-y-1'
                          }`}
                        >
                          <span>{dashboard.isPremium ? 'Upgrade Required' : 'Explore Dashboard'}</span>
                          {!dashboard.isPremium && <span>→</span>}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to Action Section */}
      <div className="mt-20 mb-12">
        <div className="bg-gradient-to-r from-[#B19CD9] to-[#F4A7B9] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Premium Analytics?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Unlock all premium dashboards and get the complete picture of NFL analytics
          </p>
          <a 
            href="/login" 
            className="inline-block bg-white text-[#B19CD9] px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 hover:-translate-y-1 transition-all duration-300"
          >
            Upgrade to Premium
          </a>
        </div>
      </div>
    </MainLayout>
  );
}