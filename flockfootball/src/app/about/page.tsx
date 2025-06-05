import MainLayout from '@/components/layout/MainLayout';

export default function About() {
  return (
    <MainLayout>
      <div className="py-8">
        <h1 className="text-3xl font-bold text-[#B19CD9] mb-6">About Flock Football Analytics</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#606060] mb-4">Our Mission</h2>
          <p className="text-[#606060] mb-4">
            Flock Football Analytics is dedicated to providing fantasy football enthusiasts with 
            data-driven insights that go beyond basic statistics. Our goal is to help you make 
            more informed decisions by offering deep analytical tools that reveal hidden patterns 
            and trends in NFL player and team performance.
          </p>
          <p className="text-[#606060]">
            Whether you're a casual player or a serious competitor, our interactive dashboards 
            are designed to give you an edge in your fantasy leagues through accessible yet 
            sophisticated analytics.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#606060] mb-4">Our Data</h2>
          <p className="text-[#606060] mb-4">
            We meticulously collect and process data from official NFL statistics, play-by-play data, 
            and advanced metrics to create a comprehensive analytical platform. Our dashboards are 
            updated weekly during the NFL season to ensure you always have the latest information.
          </p>
          <p className="text-[#606060]">
            All data is carefully validated and processed through our analytical pipeline to ensure 
            accuracy and reliability. We combine publicly available statistics with our proprietary 
            models to generate unique insights you won't find on typical fantasy platforms.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#606060] mb-4">The Team</h2>
          <p className="text-[#606060] mb-4">
            Flock Football Analytics was founded by a team of fantasy football enthusiasts with 
            backgrounds in data science, statistics, and web development. Our passion for the 
            game and data analytics drove us to create a platform that we wished existed for our 
            own fantasy football research.
          </p>
          <p className="text-[#606060]">
            We're constantly working to improve our dashboards and add new features based on user 
            feedback. Our goal is to build not just a tool, but a community of data-driven fantasy 
            football players.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}