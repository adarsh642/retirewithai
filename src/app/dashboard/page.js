'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';

export default function DashboardPage() {
  useEffect(() => {
    const container = document.getElementById('particle-container');
    if (!container) return;
    // Prevent double initialization in React StrictMode (dev) or client transitions
    if (container.dataset.particlesInitialized === 'true') return;
    container.dataset.particlesInitialized = 'true';

    const particleElems = [];
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      const size = Math.random() * 4 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100 + 100}%`;
      particle.style.animationDelay = `${Math.random() * 20}s`;
      particle.style.animationDuration = `${Math.random() * 20 + 15}s`;
      particle.style.background = `hsla(${180 + Math.random() * 100}, 90%, 70%, ${Math.random() * 0.5 + 0.1})`;
      container.appendChild(particle);
      particleElems.push(particle);
    }

    return () => {
      particleElems.forEach((p) => p.remove());
      if (container.dataset.particlesInitialized) {
        delete container.dataset.particlesInitialized;
      }
    };
  }, []);

  return (
    <>
      {/* Page-scoped global CSS imports for fonts and Material Symbols */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');
        /* Scoped CSS variables for this dashboard page */
        .dashboard-scope {
          --background: #120B1C;
          --surface: #1E122D;
          --primary: #8006f9;
          --secondary: #21F3E5;
          --on-surface: #D9C9E9;
          --on-surface-variant: #937EAC;
          font-family: 'Inter', sans-serif;
          color: var(--on-surface);
        }

        /* Custom utility classes used by the HTML */
        .glowing-shadow {
          box-shadow: 0 0 25px 8px rgba(128, 6, 249, 0.35), 0 0 10px 2px rgba(33, 243, 229, 0.25);
        }
        .glowing-border {
          border: 1px solid var(--surface);
          box-shadow: 0 0 10px 1px rgba(128, 6, 249, 0.1);
        }
        .neon-gradient-text {
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 10px rgba(33, 243, 229, 0.5);
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          background: var(--secondary);
          animation: float 20s infinite linear;
          opacity: 0;
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          25% { opacity: 0.2; }
          50% { transform: translateY(-100vh) translateX(50vw); opacity: 0.5; }
          75% { opacity: 0.2; }
          100% { transform: translateY(-200vh) translateX(0); opacity: 0; }
        }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 24px; /* Preferred icon size */
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
  <div className="dashboard-scope relative flex min-h-screen w-full bg-background text-on-surface" style={{ backgroundColor: 'var(--background, #120B1C)' }}>
        <div className="absolute inset-0 -z-10 overflow-hidden" id="particle-container"></div>
        
        {/* Navbar Component */}
        <Navbar />

        <div className="flex flex-1 flex-col lg:ml-0 ml-0">
          <header className="flex h-14 sm:h-16 shrink-0 items-center justify-end border-b border-surface bg-background/80 px-3 sm:px-6 backdrop-blur-md" style={{ backgroundColor: 'rgb(18 11 28 / 0.8)' }}>
            <button className="relative rounded-full p-1.5 sm:p-2 transition-colors hover:bg-surface">
              <span className="material-symbols-outlined text-on-surface-variant text-xl sm:text-2xl">notifications</span>
              <span className="absolute right-0.5 top-0.5 sm:right-1 sm:top-1 block h-2 w-2 rounded-full bg-secondary ring-2 ring-background"></span>
            </button>
          </header>
          <main className="flex-1 overflow-y-auto px-3 py-4 sm:px-4 sm:py-6 lg:px-8 lg:py-8">
            <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-white sm:mb-6 sm:text-3xl">Your Retirement Dashboard</h2>
                <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:mb-8 xl:grid-cols-4">
                  <div className="flex flex-col justify-between rounded-xl sm:rounded-2xl bg-surface p-3 sm:p-4 glowing-border ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-[#2a1a40] hover:glowing-shadow" style={{ backgroundColor: 'var(--surface, #1E122D)' }}>
                    <p className="text-xs sm:text-sm font-medium text-on-surface-variant">Current Corpus</p>
                    <p className="text-xl sm:text-2xl font-bold text-white">$250,000</p>
                    <svg className="mt-1 h-8 w-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 20">
                      <path d="M 0 15 Q 10 5, 20 12 T 40 10 T 60 15 T 80 12 T 100 8" fill="none" stroke="currentColor" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between rounded-xl sm:rounded-2xl bg-surface p-3 sm:p-4 glowing-border ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-[#2a1a40] hover:glowing-shadow" style={{ backgroundColor: 'var(--surface, #1E122D)' }}>
                    <p className="text-xs sm:text-sm font-medium text-on-surface-variant">Required Corpus</p>
                    <p className="text-xl sm:text-2xl font-bold text-white">$1,000,000</p>
                    <div className="mt-2 h-2.5 w-full rounded-full bg-gray-700">
                      <div className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 rounded-xl sm:rounded-2xl bg-surface p-3 sm:p-4 glowing-border ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-[#2a1a40] hover:glowing-shadow" style={{ backgroundColor: 'var(--surface, #1E122D)' }}>
                    <p className="text-xs sm:text-sm font-medium text-on-surface-variant -mt-1">Success Probability</p>
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                      <svg className="h-full w-full" viewBox="0 0 36 36">
                        <path className="text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path>
                        <path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="85, 100" strokeLinecap="round" strokeWidth="3" transform="rotate(-90 18 18)"></path>
                      </svg>
                      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl font-bold text-secondary">85%</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between rounded-xl sm:rounded-2xl bg-surface p-3 sm:p-4 glowing-border ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-[#2a1a40] hover:glowing-shadow" style={{ backgroundColor: 'var(--surface, #1E122D)' }}>
                    <p className="text-xs sm:text-sm font-medium text-on-surface-variant">Monthly SIP</p>
                    <p className="text-xl sm:text-2xl font-bold text-white">$1,500</p>
                    <svg className="mt-1 h-8 w-full text-secondary" preserveAspectRatio="none" viewBox="0 0 100 20">
                      <path d="M 0 10 Q 10 18, 20 12 T 40 5 T 60 10 T 80 15 T 100 12" fill="none" stroke="currentColor" strokeWidth="2"></path>
                    </svg>
                  </div>
                </div>
                <div className="group relative mb-6 lg:mb-8 rounded-xl sm:rounded-2xl bg-surface p-4 sm:p-6 glowing-border ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]" style={{ backgroundColor: 'var(--surface, #1E122D)' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                    <div>
                      <p className="text-base sm:text-lg font-semibold text-white">Retirement Projection</p>
                      <p className="text-xs sm:text-sm text-on-surface-variant">Projected corpus at retirement age 60</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-2xl sm:text-3xl font-bold neon-gradient-text">$1,215,000</p>
                      <p className="text-xs sm:text-sm font-medium text-green-400">+12% vs last month</p>
                    </div>
                  </div>
                  <div className="relative h-48 sm:h-64">
                    <svg className="absolute inset-0 h-full w-full" fill="none" preserveAspectRatio="none" viewBox="-3 0 478 150" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_projection_new" x1="236" x2="236" y1="1" y2="149">
                          <stop stopColor="var(--primary)" stopOpacity="0.5"></stop>
                          <stop offset="1" stopColor="var(--primary)" stopOpacity="0"></stop>
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_projection_new" x1="0" x2="472" y1="75" y2="75">
                          <stop stopColor="var(--primary)"></stop>
                          <stop offset="1" stopColor="var(--secondary)"></stop>
                        </linearGradient>
                        <filter height="200%" id="glow" width="200%" x="-50%" y="-50%">
                          <feGaussianBlur result="coloredBlur" stdDeviation="3"></feGaussianBlur>
                          <feMerge>
                            <feMergeNode in="coloredBlur"></feMergeNode>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                          </feMerge>
                        </filter>
                      </defs>
                      <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V150H0V109Z" fill="url(#paint0_linear_projection_new)"></path>
                      <path className="transition-all duration-500" d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" filter="url(#glow)" stroke="url(#paint1_linear_projection_new)" strokeLinecap="round" strokeWidth="4"></path>
                      <path className="opacity-50 transition-opacity duration-300 hover:opacity-100" d="M0 130C18.1538 130 18.1538 60 36.3077 60C54.4615 60 54.4615 80 72.6154 80C90.7692 80 90.7692 110 108.923 110C127.077 110 127.077 70 145.231 70C163.385 70 163.385 120 181.538 120C199.692 120 199.692 90 217.846 90C236 90 236 80 254.154 80C272.308 80 272.308 130 290.462 130C308.615 130 308.615 140 326.769 140C344.923 140 344.923 50 363.077 50C381.231 50 381.231 90 399.385 90C417.538 90 417.538 140 435.692 140C453.846 140 453.846 60 472 60" stroke="#fde047" strokeDasharray="5 5" strokeLinecap="round" strokeWidth="2"></path>
                      <circle className="cursor-pointer group-scope" cx="145.231" cy="33" fill="#21F3E5" r="5">
                        <title>Home Purchase</title>
                      </circle>
                      <circle className="cursor-pointer" cx="363.077" cy="1" fill="#21F3E5" r="5">
                        <title>Child&apos;s Education</title>
                      </circle>
                    </svg>
                  </div>
                  <div className="relative pt-3 sm:pt-4">
                    <label className="mb-2 block text-xs sm:text-sm font-medium text-white" htmlFor="retirementAge">Retirement Age: <span className="font-bold text-secondary">60</span></label>
                    <input className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[var(--background)] accent-[var(--primary)] range-lg" id="retirementAge" max="70" min="50" type="range" defaultValue="60" />
                    <div className="mt-1 flex justify-between text-xs text-on-surface-variant">
                      <span>50</span>
                      <span>55</span>
                      <span>60</span>
                      <span>65</span>
                      <span>70</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="group flex cursor-pointer flex-col items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-surface p-4 sm:p-6 glowing-border ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-[#2a1a40] hover:glowing-shadow" style={{ backgroundColor: 'var(--surface, #1E122D)' }}>
                    <div className="rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-secondary p-2.5 sm:p-3">
                      <span className="material-symbols-outlined text-white text-xl sm:text-2xl">account_balance_wallet</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-white">Tax Optimizer</h3>
                    <p className="flex-grow text-xs sm:text-sm text-on-surface-variant">Optimize your investments for maximum tax efficiency.</p>
                    <a className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:underline" href="#">Optimize Now <span className="material-symbols-outlined text-xs sm:text-sm">arrow_forward</span></a>
                  </div>
                  <div className="group flex cursor-pointer flex-col items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-surface p-4 sm:p-6 glowing-border ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-[#2a1a40] hover:glowing-shadow" style={{ backgroundColor: 'var(--surface, #1E122D)' }}>
                    <div className="rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-secondary p-2.5 sm:p-3">
                      <span className="material-symbols-outlined text-white text-xl sm:text-2xl">pie_chart</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-white">Personalized Plan</h3>
                    <p className="flex-grow text-sm text-on-surface-variant">Your tailored retirement plan based on your goals.</p>
                    <a className="flex items-center gap-1 text-sm font-semibold text-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:underline" href="#">View Plan <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
                  </div>
                  <div className="group flex cursor-pointer flex-col items-start gap-4 rounded-2xl bg-surface p-6 glowing-border ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-[#2a1a40] hover:glowing-shadow" style={{ backgroundColor: 'var(--surface, #1E122D)' }}>
                    <div className="rounded-xl bg-gradient-to-br from-primary to-secondary p-3">
                      <span className="material-symbols-outlined text-white">compare_arrows</span>
                    </div>
                    <h3 className="font-semibold text-white">Scenario Comparison</h3>
                    <p className="flex-grow text-sm text-on-surface-variant">Compare different retirement scenarios to find the best path.</p>
                    <a className="flex items-center gap-1 text-sm font-semibold text-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:underline" href="#">Compare <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
                  </div>
                </div>
              </div>
              <aside className="space-y-4 sm:space-y-6 lg:col-span-4 lg:space-y-8">
                <div className="lg:sticky lg:top-8 rounded-xl sm:rounded-2xl bg-surface p-4 sm:p-6 glowing-border ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]" style={{ backgroundColor: 'var(--surface, #1E122D)' }}>
                  <h3 className="mb-4 sm:mb-6 flex items-center gap-2 text-lg sm:text-xl font-bold text-white"><span className="material-symbols-outlined text-2xl sm:text-3xl text-secondary">psychology</span>Personalized Insights</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4 rounded-lg border border-surface bg-background/50 p-3 sm:p-4 transition-colors hover:border-yellow-400/50">
                      <span className="material-symbols-outlined mt-0.5 sm:mt-1 text-yellow-400 text-xl sm:text-2xl">warning</span>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-white">You&apos;re off track by 7%</h4>
                        <p className="text-xs sm:text-sm text-on-surface">Your current savings rate is slightly below target. Let&apos;s get you back on track!</p>
                        <button className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-secondary hover:underline">See suggestions</button>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4 rounded-lg border border-surface bg-background/50 p-3 sm:p-4 transition-colors hover:border-green-400/50">
                      <span className="material-symbols-outlined mt-0.5 sm:mt-1 text-green-400 text-xl sm:text-2xl">recommend</span>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-white">Increase SIP by 10%</h4>
                        <p className="text-xs sm:text-sm text-on-surface">A small increase in your SIP can lead to a <span className="font-bold text-white">$150,000</span> corpus increase.</p>
                        <button className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-secondary hover:underline">Increase Now</button>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4 rounded-lg border border-surface bg-background/50 p-3 sm:p-4 transition-colors hover:border-blue-400/50">
                      <span className="material-symbols-outlined mt-0.5 sm:mt-1 text-blue-400 text-xl sm:text-2xl">lightbulb</span>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-white">Diversification Opportunity</h4>
                        <p className="text-xs sm:text-sm text-on-surface">Consider diversifying into international equities to improve long-term returns.</p>
                        <button className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-secondary hover:underline">Explore Funds</button>
                      </div>
                    </div>
                    <div className="mt-6 sm:mt-8 border-t border-surface pt-4 sm:pt-6">
                      <h4 className="mb-3 sm:mb-4 text-base sm:text-lg font-bold text-white">Quick Actions</h4>
                      <div className="space-y-2 sm:space-y-3">
                        <button className="flex h-10 sm:h-12 w-full items-center justify-between rounded-lg border border-surface bg-background px-3 sm:px-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:border-primary hover:bg-[#2a1a40]">
                          <span>Update Salary / Expenses</span>
                          <span className="material-symbols-outlined text-xl sm:text-2xl">edit</span>
                        </button>
                        <button className="flex h-10 sm:h-12 w-full items-center justify-between rounded-lg border border-surface bg-background px-3 sm:px-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:border-primary hover:bg-[#2a1a40]">
                          <span>Add New Investment</span>
                          <span className="material-symbols-outlined text-xl sm:text-2xl">add_card</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            </div>
          </main>
          <footer className="px-3 py-4 sm:px-4 sm:py-6 text-center">
            <p className="text-xs sm:text-sm text-on-surface-variant">Made for salaried India • Data stays private & secure</p>
          </footer>
        </div>
      </div>
    </>
  );
}