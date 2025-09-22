import Navbar from '@/components/Navbar';
import Topbar from '@/components/Topbar';

export default function ProjectionPage() {
  return (
    <div className="projection-page bg-[#100a1f] text-white min-h-screen" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      {/* Fonts and icons */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');`}</style>

      {/* Page CSS variables and utilities */}
      <style>{`
        .projection-page {
          --primary-50: #f1e6fe;
          --primary-100: #e3ceff;
          --primary-200: #d0b0ff;
          --primary-300: #b98eff;
          --primary-400: #a16bff;
          --primary-500: #8a4fff;
          --primary-600: #7f06f9;
          --primary-700: #6f00e2;
          --primary-800: #5e00bf;
          --primary-900: #4e009f;
          --primary-950: #2d0066;
        }
        .neon-glow { box-shadow: 0 0 5px var(--primary-400), 0 0 10px var(--primary-400), 0 0 15px var(--primary-500); }
        .glassmorphism {
          background: rgba(45, 0, 102, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glowing-edge {
          border: 1px solid transparent;
          border-image: linear-gradient(to right, var(--primary-400), #00f2ea) 1;
          box-shadow: 0 0 10px rgba(161, 107, 255, 0.2), 0 0 20px rgba(0, 242, 234, 0.2);
        }
      `}</style>

      <div className="relative flex min-h-screen w-full dark group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow">
          <Navbar />
          <div className="flex flex-1 flex-col">
            <Topbar />
            {/* Main */}
            <main className="flex-1 px-16 py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h1 className="text-4xl font-bold tracking-tight">Your Retirement Projection</h1>
                <p className="mt-2 text-lg text-gray-400">AI-powered, personalized for your salary, expenses, and lifestyle goals.</p>
              </div>
              <div className="glassmorphism glowing-edge rounded-xl p-6">
                <div className="mb-4 flex items-baseline justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Projected Corpus</p>
                    <p className="text-4xl font-bold text-white">₹1.25Cr</p>
                  </div>
                  <div className="flex items-center gap-2 text-teal-400">
                    <span className="material-symbols-outlined"> trending_up </span>
                    <p className="text-base font-medium">+15%</p>
                  </div>
                </div>
                <div className="h-[350px]">
                  <svg width="100%" height="100%" viewBox="0 0 500 350" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <defs>
                      <linearGradient id="confidenceBand" x1="0" y1="0" x2="0" y2="350" gradientUnits="userSpaceOnUse">
                        <stop stopColor="rgba(0, 242, 234, 0.2)" />
                        <stop offset="1" stopColor="rgba(0, 242, 234, 0)" />
                      </linearGradient>
                      <linearGradient id="projectionLine" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a16bff" />
                        <stop offset="100%" stopColor="#00f2ea" />
                      </linearGradient>
                      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <path d="M0 272.5C46.85 272.5 46.85 52.5 93.7 52.5C140.55 52.5 140.55 102.5 187.4 102.5C234.25 102.5 234.25 232.5 281.1 232.5C327.95 232.5 327.95 82.5 374.8 82.5C421.65 82.5 421.65 252.5 468.5 252.5C515.35 252.5 515.35 62.5 562.2 62.5V349H0V272.5Z" fill="url(#confidenceBand)" />
                    <path d="M0 272.5C46.85 272.5 46.85 52.5 93.7 52.5C140.55 52.5 140.55 102.5 187.4 102.5C234.25 102.5 234.25 232.5 281.1 232.5C327.95 232.5 327.95 82.5 374.8 82.5C421.65 82.5 421.65 252.5 468.5 252.5C515.35 252.5 515.35 62.5 562.2 62.5" stroke="url(#projectionLine)" strokeWidth="3" strokeLinecap="round" filter="url(#glow)" />
                    <circle cx="374.8" cy="82.5" r="8" fill="white" className="neon-glow" />
                    <g className="group cursor-pointer">
                      <circle cx="374.8" cy="82.5" r="12" fill="transparent" />
                      <foreignObject x="300" y="20" width="150" height="60" className="hidden group-hover:block">
                        <div className="glassmorphism glowing-edge rounded-lg p-3 text-center">
                          <p className="text-sm font-bold">Retirement at 60</p>
                          <p className="text-xs text-gray-300">₹1.1Cr Corpus</p>
                        </div>
                      </foreignObject>
                    </g>
                  </svg>
                </div>
                <div className="mt-4 flex justify-between text-sm text-gray-400">
                  <span>25</span><span>35</span><span>45</span><span>55</span><span>65</span><span>75</span>
                </div>
                <div className="text-center text-sm font-medium text-gray-400">Age / Years</div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="glassmorphism glowing-edge rounded-xl p-6">
                  <p className="text-sm font-medium text-gray-400">Current Savings</p>
                  <p className="mt-1 text-3xl font-bold">₹50L</p>
                </div>
                <div className="glassmorphism glowing-edge rounded-xl p-6">
                  <p className="text-sm font-medium text-gray-400">Projected Corpus</p>
                  <p className="mt-1 text-3xl font-bold">₹1.25Cr</p>
                </div>
                <div className="glassmorphism glowing-edge rounded-xl p-6">
                  <p className="text-sm font-medium text-gray-400">Success Probability</p>
                  <p className="mt-1 text-3xl font-bold text-teal-400">85%</p>
                </div>
              </div>
            </div>

            {/* Right-side controls and AI insight */}
            <aside className="space-y-8">
              <div className="glassmorphism glowing-edge rounded-xl p-6">
                <h3 className="mb-6 text-2xl font-bold tracking-tight">Projection Controls</h3>
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex justify-between">
                      <label className="text-base font-medium" htmlFor="monthly-savings">Monthly Savings</label>
                      <span className="text-base font-semibold text-[var(--primary-300)]">₹10,000</span>
                    </div>
                    <input id="monthly-savings" type="range" min="1000" max="100000" defaultValue="10000" className="w-full h-2 bg-[var(--primary-950)] rounded-lg appearance-none cursor-pointer range-lg accent-[var(--primary-500)]" />
                  </div>
                  <div>
                    <div className="mb-2 flex justify-between">
                      <label className="text-base font-medium" htmlFor="retirement-age">Retirement Age</label>
                      <span className="text-base font-semibold text-[var(--primary-300)]">60 years</span>
                    </div>
                    <input id="retirement-age" type="range" min="50" max="70" defaultValue="60" className="w-full h-2 bg-[var(--primary-950)] rounded-lg appearance-none cursor-pointer range-lg accent-[var(--primary-500)]" />
                  </div>
                  <div>
                    <div className="mb-2 flex justify-between">
                      <label className="text-base font-medium" htmlFor="growth-rate">Expected Growth Rate</label>
                      <span className="text-base font-semibold text-[var(--primary-300)]">8%</span>
                    </div>
                    <input id="growth-rate" type="range" min="1" max="20" defaultValue="8" className="w-full h-2 bg-[var(--primary-950)] rounded-lg appearance-none cursor-pointer range-lg accent-[var(--primary-500)]" />
                  </div>
                  <div>
                    <div className="mb-2 flex justify-between">
                      <label className="text-base font-medium" htmlFor="inflation-rate">Inflation Rate</label>
                      <span className="text-base font-semibold text-[var(--primary-300)]">4%</span>
                    </div>
                    <input id="inflation-rate" type="range" min="1" max="10" defaultValue="4" className="w-full h-2 bg-[var(--primary-950)] rounded-lg appearance-none cursor-pointer range-lg accent-[var(--primary-500)]" />
                  </div>
                </div>
              </div>

              <div className="glassmorphism relative overflow-hidden rounded-xl border border-[var(--primary-700)] bg-cover bg-center p-6 shadow-[0_0_20px_var(--primary-900)]" style={{ backgroundImage: 'linear-gradient(135deg, rgba(127, 6, 249, 0.3) 0%, rgba(16, 10, 31, 0.5) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZ3b3rclAB2HoXxvqIMtY9TfymyEz1cjFe36TvIWKh0_ywULVbnLDL2KevJvGppwW6CQNK4_Rj4PsS0tQQ3keOhrAUGozP7dYZk_k9GqCSrwN_gqRk90mqAqByFO51ZNB_rXbuQKkPkixefQE7R5Nt74n7RJjb74JMVEZjriHO23owbxavwGEXff9URgrqca3Lh1wPQb_xZLAkVH55Zt0QtOA8ACnHSh6Ha-hXgbS9jQWrrPj38nsn5HXlOhtR-mCP0yFz17O-lrg")' }}>
                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-3xl text-teal-400"> auto_awesome </span>
                    <h3 className="text-2xl font-bold">AI Insight</h3>
                  </div>
                  <p className="mt-4 text-lg font-medium leading-relaxed">Increase SIP by <span className="text-teal-400">₹5,000</span> and retire <span className="text-teal-400">3 years</span> earlier.</p>
                </div>
              </div>
            </aside>
          </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
