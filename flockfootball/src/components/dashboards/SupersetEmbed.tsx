'use client';
import { useState } from 'react';

interface SupersetEmbedProps {
  permalink: string;  // Changed from dashboardId to permalink
  title: string;
  height?: string;
}

export default function SupersetEmbed({ 
  permalink,  // Changed parameter name
  title, 
  height = '600px' 
}: SupersetEmbedProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use permalink format instead of dashboard ID format
  const embedUrl = `https://flockfootball.com/superset/dashboard/p/${permalink}/?standalone=1`;

  if (error) {
    return (
      <div className="bg-surface rounded-2xl p-8 shadow-glass">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-dark mb-2">Error loading dashboard</h3>
          <p className="text-dark opacity-70 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-opacity-90 transition-all duration-300 font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-glass" style={{ height }}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-light">
          <div className="text-center">
            {/* Loading Spinner */}
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
            <p className="text-dark opacity-70 font-medium">Loading dashboard...</p>
          </div>
        </div>
      )}
      
      <iframe
        title={title}
        src={embedUrl}
        className="w-full h-full border-0 bg-white"
        style={{ visibility: loading ? 'hidden' : 'visible' }}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError('Failed to load dashboard. Please check your connection and try again.');
        }}
        allow="fullscreen"
        sandbox="allow-same-origin allow-scripts allow-forms allow-top-navigation"
      />
    </div>
  );
}