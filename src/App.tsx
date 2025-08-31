import { ParallaxHero } from "./components/ParallaxHero";
import { ContentSection } from "./components/ContentSection";

export default function App() {
  return (
    <div className="bg-white">
      <ParallaxHero />
      <ContentSection />

      {/* Additional content to enable scrolling and showcase parallax */}
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-5xl font-black mb-8 text-black tracking-tight">
                APPROACH
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                My design philosophy centers on creating
                meaningful connections between users and digital
                products through thoughtful interaction design
                and visual storytelling.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each project begins with deep research and
                empathy, evolving into solutions that are both
                beautiful and purposeful.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-[#00D4AA] pl-6">
                <h4 className="text-xl font-black mb-2 text-black">
                  Research
                </h4>
                <p className="text-gray-600">
                  Understanding user needs and business goals
                </p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6">
                <h4 className="text-xl font-black mb-2 text-black">
                  Design
                </h4>
                <p className="text-gray-600">
                  Crafting intuitive and engaging experiences
                </p>
              </div>
              <div className="border-l-4 border-gray-300 pl-6">
                <h4 className="text-xl font-black mb-2 text-black">
                  Iterate
                </h4>
                <p className="text-gray-600">
                  Refining through testing and feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final section with call to action */}
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center max-w-4xl mx-auto px-8">
          <h2 className="text-6xl font-black mb-8 tracking-tight">
            LET'S CREATE
          </h2>
          <p className="text-xl mb-12 opacity-80 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's
            collaborate on something extraordinary.
          </p>
          <button className="bg-[#00D4AA] text-white px-12 py-4 text-lg font-black tracking-wide hover:bg-[#00C299] transition-colors duration-300">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
  );
}