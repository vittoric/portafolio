import { useState, useEffect, useRef } from 'react';

export function ContentSection() {
  const [highlightProgress, setHighlightProgress] = useState({
    line1: 0,
    line2: 0,
    line3: 0,
    line4: 0,
  });

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const calculateProgress = (element) => {
            if (!element) return 0;
            const rect = element.getBoundingClientRect();
            const start = window.innerHeight * 0.85; // Comienza cuando la línea entra en el 85% de la ventana
            const end = window.innerHeight * 0.3; // Termina cuando la línea alcanza el 30% de la ventana
            return Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
          };

          setHighlightProgress({
            line1: calculateProgress(line1Ref.current),
            line2: calculateProgress(line2Ref.current),
            line3: calculateProgress(line3Ref.current),
            line4: calculateProgress(line4Ref.current),
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Correr una vez para la posición inicial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 text-center py-20">
        
        {/* Main highlight text */}
        <div className="mb-16">
          <div className="relative inline-block" ref={line1Ref}>
            <h2 className="text-[clamp(3rem,8vw,12rem)] font-black tracking-tighter leading-[0.85] uppercase">
              <span className="highlight-text-container relative">
                <span className="text-gray-300 relative z-10">
                  WHERE INNOVATION
                </span>
                <span 
                  className="absolute top-0 left-0 text-black z-20 overflow-hidden"
                  style={{
                    width: `${highlightProgress.line1 * 100}%`,
                    transition: 'width 0.1s ease-out'
                  }}
                >
                  WHERE INNOVATION
                </span>
              </span>
            </h2>
          </div>
          
          <div className="relative inline-block mt-4" ref={line2Ref}>
            <h2 className="text-[clamp(3rem,8vw,12rem)] font-black tracking-tighter leading-[0.85] uppercase">
              <span className="highlight-text-container relative">
                <span className="text-gray-300 relative z-10">
                  MEETS STRATEGY
                </span>
                <span 
                  className="absolute top-0 left-0 text-black z-20 overflow-hidden"
                  style={{
                    width: `${highlightProgress.line2 * 100}%`,
                    transition: 'width 0.1s ease-out'
                  }}
                >
                  MEETS STRATEGY
                </span>
              </span>
            </h2>
          </div>
        </div>

        {/* Description text with staggered highlight effect */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="relative" ref={line3Ref}>
            <p className="text-2xl leading-relaxed font-medium tracking-wide">
              <span className="highlight-text-container relative">
                <span className="text-gray-400">
                  I TRANSFORM COMPLEX TECHNICAL VISIONS INTO SCALABLE BUSINESS REALITIES,
                </span>
                <span 
                  className="absolute top-0 left-0 text-gray-800 overflow-hidden"
                  style={{
                    width: `${highlightProgress.line3 * 100}%`,
                    transition: 'width 0.1s ease-out'
                  }}
                >
                  I TRANSFORM COMPLEX TECHNICAL VISIONS INTO SCALABLE BUSINESS REALITIES,
                </span>
              </span>
            </p>
          </div>
          
          <div className="relative" ref={line4Ref}>
            <p className="text-2xl leading-relaxed font-medium tracking-wide">
              <span className="highlight-text-container relative">
                <span className="text-gray-400">
                  BRIDGING THE GAP BETWEEN WHAT'S POSSIBLE AND WHAT'S PROFITABLE.
                </span>
                <span 
                  className="absolute top-0 left-0 text-gray-800 overflow-hidden"
                  style={{
                    width: `${highlightProgress.line4 * 100}%`,
                    transition: 'width 0.1s ease-out'
                  }}
                >
                  BRIDGING THE GAP BETWEEN WHAT'S POSSIBLE AND WHAT'S PROFITABLE.
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Accent line that grows with scroll */}
        <div className="mt-16 flex justify-center">
          <div 
            className="h-1 bg-[#00D4AA] transition-all duration-300"
            style={{
              width: `${highlightProgress.line4 * 220}px`,
            }}
          ></div>
        </div>
        
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 opacity-10">
        <div className="text-[20rem] font-black text-gray-200 select-none pointer-events-none">
          TB
        </div>
      </div>
      
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 opacity-10">
        <div className="text-[20rem] font-black text-gray-200 select-none pointer-events-none">
          D
        </div>
      </div>
    </div>
  );
}