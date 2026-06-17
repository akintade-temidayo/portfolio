import { useState } from 'react';

const SplashScreen = ({ onEnter }) => {
  const [leaving, setLeaving] = useState(false);

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(onEnter, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gray-900 flex flex-col items-center justify-center transition-opacity duration-700 ${
        leaving ? 'opacity-0' : 'opacity-100'
      }`}
    >
      

      {/* Content */}
      <div className="relative text-center px-6">

        {/* Logo */}
        <div className="text-6xl md:text-8xl font-bold text-white mb-2">
          AT<span className="text-[#2563EB]">.</span>
        </div>

        <p className="text-gray-400 text-sm md:text-base tracking-widest uppercase mb-2">
          Akintade Temidayo
        </p>

        <p className="text-gray-500 text-sm mb-12">
          Frontend Developer
        </p>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-[#2563EB] mx-auto mb-12"></div>

        {/* CTA Button */}
        <button
          onClick={handleEnter}
          className="group relative inline-flex items-center gap-3 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
        >
          <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></span>
          Enter Portfolio
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </button>

        <p className="text-gray-600 text-xs mt-6">
          Available for work 
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;