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
  const embedUrl = `http://167.71.251.247:8088/superset/dashboard/p/${permalink}/?standalone=1`;

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <h3 className="text-red-800 font-medium">Error loading dashboard</h3>
        <p className="text-red-600">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-2 bg-red-100 text-red-800 px-4 py-2 rounded-md hover:bg-red-200"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-200" style={{ height }}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#B19CD9]"></div>
        </div>
      )}
      
      <iframe
        title={title}
        src={embedUrl}
        className="w-full h-full border-0"
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