'use client'
import { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageTitle, setImageTitle] = useState<string>('');

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const openModal = (imageSrc: string, title: string) => {
    setSelectedImage(imageSrc);
    setImageTitle(title);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setImageTitle('');
  };

  return (
    <MainLayout>
      {/* Hero Section - using your existing structure but updated colors */}
      <div className="min-h-[600px] flex items-center justify-center">
        <div className="w-full max-w-full">
          
          {/* Main Hero Card - now uses off-white background */}
          <div className="bg-[rgba(254,252,255,0)] rounded-3xl p-8 shadow-glass hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
            
            {/* Hero Text Content */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-semibold text-dark mb-6 leading-tight">
                Dominating fantasy football with data-driven insights.
              </h1>
              <p className="text-xl text-dark opacity-80 max-w-2xl mx-auto mb-10">
                Advanced analytics and visualizations to give you the edge in your fantasy league.
              </p>
              
              {/* Call to Action Button */}
              <a 
                href="/dashboards" 
                className="inline-block px-8 py-4 rounded-[25px] border-2 border-dark text-dark font-bold hover:bg-dark hover:text-white transition-all duration-300 text-lg mb-12"
              >
                Explore Dashboards
              </a>
            </div>
            
            {/* Dashboard Preview Grid - Centered and Fixed */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-9xl">
                
                {/* Dashboard 1 - Quarterback Analytics */}
                <div className="bg-surface rounded-2xl p-6 shadow-glass hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-white/30">
                  <div 
                    className="w-full h-64 rounded-xl mb-4 overflow-hidden flex items-center justify-center bg-white cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-300 group relative"
                    onClick={() => openModal('/Target_Share.jpg', 'Quarterback Analytics Dashboard')}
                  >
                    <img 
                      src="/Target_Share.jpg" 
                      alt="Quarterback Analytics Dashboard" 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-20">
                      <span className="text-white text-sm font-medium bg-black bg-opacity-50 px-3 py-1 rounded-full">
                        🔍 Click to zoom
                      </span>
                    </div>
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
                <div className="bg-surface rounded-2xl p-6 shadow-glass hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-white/30">
                  <div 
                    className="w-full h-64 rounded-xl mb-4 overflow-hidden flex items-center justify-center bg-white cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-300 group relative"
                    onClick={() => openModal('/Snap_Share.jpg', 'Wide Receiver Insights Dashboard')}
                  >
                    <img 
                      src="/Snap_Share.jpg" 
                      alt="Wide Receiver Insights Dashboard" 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-20">
                      <span className="text-white text-sm font-medium bg-black bg-opacity-50 px-3 py-1 rounded-full">
                        🔍 Click to zoom
                      </span>
                    </div>
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
                <div className="bg-surface rounded-2xl p-6 shadow-glass hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-white/30">
                  <div 
                    className="w-full h-64 rounded-xl mb-4 overflow-hidden flex items-center justify-center bg-white cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-300 group relative"
                    onClick={() => openModal('/Custom_Table.jpg', 'Running Back Analysis Dashboard')}
                  >
                    <img 
                      src="/Custom_Table.jpg" 
                      alt="Running Back Analysis Dashboard" 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-20">
                      <span className="text-white text-sm font-medium bg-black bg-opacity-50 px-3 py-1 rounded-full">
                        🔍 Click to zoom
                      </span>
                    </div>
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
      </div>

      {/* Premium Modal Overlay */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          />
          
          <div className="relative max-w-[95vw] max-h-[95vh] mx-4">
            <div className="flex items-center justify-between mb-4 text-white">
              <h3 className="text-xl font-semibold">{imageTitle}</h3>
              <div className="flex items-center space-x-4">
                <span className="text-sm opacity-80">Press ESC to close</span>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 flex items-center justify-center text-2xl font-bold transition-all duration-200 hover:scale-110"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-2xl p-4">
              <img
                src={selectedImage}
                alt={imageTitle}
                className="max-w-full max-h-[85vh] object-contain mx-auto rounded-lg"
              />
            </div>
            
            <div className="mt-4 text-center text-white text-sm opacity-80">
              Click anywhere outside the image to close
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}