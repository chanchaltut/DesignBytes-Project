import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, rgba(0, 187, 240, 0.1) 2%, transparent 0%),
              radial-gradient(circle at 75px 75px, rgba(27, 14, 65, 0.1) 2%, transparent 0%)
            `,
            backgroundSize: '100px 100px'
          }}
        ></div>
      </div>

      {/* Loader Content - Perfectly Centered */}
      <div className="relative flex flex-col items-center justify-center text-center max-w-md mx-auto px-4">
        {/* Main Spinner - Perfectly Centered */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Outer Ring */}
          <div className="w-20 h-20 border-4 border-gray-200 rounded-full animate-spin border-t-[#00BBF0] border-r-[#1B0E41]"></div>

          {/* Inner Ring - Properly Centered */}
          <div className="absolute inset-2 w-16 h-16 border-4 border-transparent rounded-full animate-spin border-t-[#1B0E41] border-r-[#00BBF0]" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>

          {/* Center Dot - Perfectly Centered */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-[#00BBF0] to-[#1B0E41] rounded-full animate-pulse"></div>
        </div>

        {/* Logo/Text - Centered */}
        <div className="mb-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-[#1B0E41] mb-3 text-center">
            Design<span className="text-[#00BBF0]">Bytes</span>
          </h2>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-[#00BBF0] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-[#1B0E41] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-[#00BBF0] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>

        {/* Loading Text - Centered */}
        <p className="text-gray-600 text-sm animate-pulse mb-6 text-center">Loading amazing content...</p>

        {/* Progress Bar - Centered */}
        <div className="w-48 mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div className="h-1 rounded-full bg-gradient-to-r from-[#00BBF0] to-[#1B0E41] loader-progress"></div>
          </div>
        </div>
      </div>



      {/* Custom Styles */}
      <style jsx>{`
        @keyframes loadingProgress {
          0%, 100% {
            width: 0%;
          }
          50% {
            width: 100%;
          }
        }
        
        .animate-spin {
          animation: spin 1.5s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader; 