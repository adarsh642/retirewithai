"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Topbar from '@/components/Topbar';

export default function SetupPlanPage() {
  const [age, setAge] = useState(60);

  // Compute gradient for the slider background based on value
  const gradientPercent = ((age - 40) / (70 - 40)) * 100;
  const sliderStyle = {
    background: `linear-gradient(to right, #8006f9 ${gradientPercent}%, #4d2f6a ${gradientPercent}%)`,
  };

  return (
    <div className="setup-plan-page font-inter text-white min-h-[120vh]" style={{
      background: 'linear-gradient(to bottom, rgb(26,16,35), rgb(15,10,23))',
    }}>
      {/* Fonts and icons */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');`}</style>
      {/* Page utilities */}
      <style>{`
        :root {
          --foreground-rgb: 255, 255, 255;
          --background-start-rgb: 26, 16, 35;
          --background-end-rgb: 15, 10, 23;
          --glow-start-rgb: 128, 6, 249;
          --glow-end-rgb: 0, 255, 255;
        }
        .glow-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: conic-gradient(from 180deg at 50% 50%, rgba(var(--glow-start-rgb), 0.8) 0deg, rgba(var(--glow-end-rgb), 0.8) 180deg, rgba(var(--glow-start-rgb), 0.8) 360deg);
          filter: blur(32px);
          border-radius: inherit;
          z-index: -1;
        }
        .input-glow:focus-within { box-shadow: 0 0 12px 0px rgba(var(--glow-start-rgb), 0.6); border-color: rgba(var(--glow-start-rgb), 0.8); }
        input[type='range']::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 20px; height: 20px; background: #8006f9; border: 2px solid white; border-radius: 50%; cursor: pointer; transition: box-shadow 0.2s; box-shadow: 0 0 8px 0px rgba(var(--glow-start-rgb), 0.8); }
        input[type='range']::-moz-range-thumb { width: 20px; height: 20px; background: #8006f9; border: 2px solid white; border-radius: 50%; cursor: pointer; transition: box-shadow 0.2s; box-shadow: 0 0 8px 0px rgba(var(--glow-start-rgb), 0.8); }
        input[type='range'] { -webkit-appearance: none; appearance: none; height: 8px; border-radius: 9999px; }
        input[type='range']:focus { outline: none; }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.05); opacity: 0.8; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-pulse-slow { animation: pulse 4s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes bar-animate { 0%, 100% { transform: scaleY(0.4); } 50% { transform: scaleY(1); } }
      `}</style>

      <div className="relative flex min-h-screen w-full overflow-x-hidden dark group/design-root">
        <div className="layout-container flex h-full grow">
          <Navbar />
          <div className="flex flex-1 flex-col">
            <Topbar />
            <main className="pl-2 pr-6 md:pl-10 md:pr-16 lg:pl-16 lg:pr-24 xl:pl-24 xl:pr-40 flex flex-1 justify-center py-10 lg:py-16">
              <div className="grid w-full max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
                <div className="flex flex-col">
                  <div className="mb-8">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-[#ad8ecc]">Step 1 of 3</p>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-[#36214a]">
                      <div className="h-2 rounded-full bg-[#8006f9]" style={{ width: '33%' }}></div>
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold tracking-tighter">Set up your plan</h2>
                  <p className="mt-2 text-base text-[#ad8ecc]">Tell us about your income and expenses so we can create your personalized retirement strategy.</p>

                  <form className="mt-8 flex flex-col gap-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="flex flex-col">
                        <label className="mb-2 text-sm font-medium text-[#ad8ecc]" htmlFor="income">Monthly Income</label>
                        <div className="input-glow flex items-center rounded-xl border border-transparent bg-[#36214a] px-4 transition-all duration-300">
                          <span className="text-[#ad8ecc]">₹</span>
                          <input id="income" type="number" placeholder="50,000" className="form-input w-full border-none bg-transparent py-3 pl-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-0" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-2 text-sm font-medium text-[#ad8ecc]" htmlFor="expenses">Monthly Expenses</label>
                        <div className="input-glow flex items-center rounded-xl border border-transparent bg-[#36214a] px-4 transition-all duration-300">
                          <span className="text-[#ad8ecc]">₹</span>
                          <input id="expenses" type="number" placeholder="25,000" className="form-input w-full border-none bg-transparent py-3 pl-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-0" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2 text-sm font-medium text-[#ad8ecc]" htmlFor="savings">Current Savings/Corpus</label>
                      <div className="input-glow flex items-center rounded-xl border border-transparent bg-[#36214a] px-4 transition-all duration-300">
                        <span className="text-[#ad8ecc]">₹</span>
                        <input id="savings" type="number" placeholder="1,000,000" className="form-input w-full border-none bg-transparent py-3 pl-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-0" />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-[#ad8ecc]" htmlFor="age">Retirement Age Goal</label>
                        <span className="font-semibold text-white">{age}</span>
                      </div>
                      <input
                        id="age"
                        type="range"
                        min={40}
                        max={70}
                        value={age}
                        onChange={(e) => setAge(parseInt(e.target.value, 10))}
                        className="mt-2 h-2 w-full cursor-pointer rounded-lg bg-[#4d2f6a]"
                        style={sliderStyle}
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2 text-sm font-medium text-[#ad8ecc]">Investment Split</label>
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {['Equity','FD','Mutual Funds','Others'].map((label) => (
                          <label
                            key={label}
                            className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-[#36214a] bg-[#36214a]/50 p-3 transition-colors duration-200 hover:border-teal-400 has-[input:checked]:border-teal-400 has-[input:checked]:bg-teal-400/10 focus-within:border-teal-400"
                          >
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 rounded-md border-2 border-[#4d2f6a] text-[#8006f9] accent-[#8006f9] bg-transparent focus:ring-0 focus:ring-offset-0"
                            />
                            <span className="text-sm font-medium text-white">{label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:flex-row">
                      <button type="button" className="relative flex h-12 flex-1 items-center justify-center overflow-hidden rounded-xl bg-[#8006f9] text-base font-semibold text-white transition-transform hover:scale-105">
                        <span className="z-10">Continue</span>
                        <div className="glow-button absolute inset-0 z-0 h-full w-full" />
                      </button>
                      <button type="button" className="flex h-12 flex-1 items-center justify-center rounded-xl border-2 border-[#36214a] bg-transparent text-base font-semibold text-white/80 transition-colors hover:border-teal-400 hover:text-white">
                        Skip for now
                      </button>
                    </div>
                    <p className="text-center text-xs text-[#ad8ecc]">You can edit this anytime from your dashboard.</p>
                  </form>
                </div>

                <div className="hidden items-center justify-center lg:flex">
                  <div className="relative w-full max-w-md animate-float">
                    <div className="absolute -inset-16 rounded-full bg-gradient-to-tr from-[#8006f9]/40 to-[#00ffff]/40 opacity-50 blur-3xl animate-pulse-slow"></div>
                    <div className="relative flex h-[400px] w-full items-end justify-center gap-4 rounded-3xl border border-white/10 bg-[#1a1023]/60 p-8 backdrop-blur-2xl">
                      <div className="h-3/4 w-8 rounded-full bg-gradient-to-t from-teal-400/50 to-teal-400" style={{ animation: 'bar-animate 2s ease-in-out infinite', animationDelay: '0.1s' }}></div>
                      <div className="h-1/2 w-8 rounded-full bg-gradient-to-t from-teal-400/50 to-teal-400" style={{ animation: 'bar-animate 2s ease-in-out infinite', animationDelay: '0.3s' }}></div>
                      <div className="h-full w-8 rounded-full bg-gradient-to-t from-[#8006f9]/50 to-[#8006f9]" style={{ animation: 'bar-animate 2s ease-in-out infinite', animationDelay: '0.2s' }}></div>
                      <div className="h-2/3 w-8 rounded-full bg-gradient-to-t from-teal-400/50 to-teal-400" style={{ animation: 'bar-animate 2s ease-in-out infinite', animationDelay: '0.4s' }}></div>
                      <div className="h-1/3 w-8 rounded-full bg-gradient-to-t from-teal-400/50 to-teal-400" style={{ animation: 'bar-animate 2s ease-in-out infinite', animationDelay: '0.5s' }}></div>
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 rounded-full bg-[#100a17] p-4 shadow-2xl">
                        <span className="material-symbols-outlined text-6xl text-teal-400">auto_awesome</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
