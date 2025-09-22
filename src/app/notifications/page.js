"use client";
import Navbar from '@/components/Navbar';
import TopHeader from '@/components/TopHeader';


export default function NotificationsPage() {
  return (
    <div className="notifications-page bg-[#120B1A] text-white min-h-screen" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      {/* Material Symbols */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');`}</style>
      <style>{`
        :root {
          --primary-color: #7f06f9;
          --secondary-color: #36214a;
        }
        .glow-border { box-shadow: 0 0 2px var(--primary-color), 0 0 5px var(--primary-color); }
        .glow-text { text-shadow: 0 0 10px rgba(127, 6, 249, 0.7), 0 0 20px rgba(54, 33, 74, 0.5); }
      `}</style>

      <div className="relative flex h-auto min-h-screen w-full flex-col bg-gradient-to-br from-[#120B1A] via-[#1a1023] to-[#120B1A] overflow-x-hidden">
        <div className="layout-container flex h-full grow">
          <Navbar />
          <div className="flex flex-1 flex-col">
            <TopHeader />
            
            <main className="pl-2 pr-6 md:pl-10 md:pr-16 lg:pl-16 lg:pr-24 xl:pl-24 xl:pr-40 flex flex-1 py-10 lg:py-16">
              <div className="w-full max-w-5xl mx-auto">
                <header className="mb-8">
                  <h1 className="text-4xl font-bold leading-tight tracking-tight glow-text">Notifications</h1>
                </header>

                <div className="flex justify-between items-center border-b border-[#4d2f6a] mb-8">
                  <nav className="flex gap-8 -mb-px">
                    <a className="flex items-center gap-2 justify-center border-b-2 border-[var(--primary-color)] text-white pb-3 pt-4 px-2" href="#">
                      <p className="text-sm font-semibold leading-normal">All</p>
                      <span className="bg-[var(--primary-color)] text-white text-xs font-bold rounded-full size-5 flex items-center justify-center">4</span>
                    </a>
                    <a className="flex items-center justify-center border-b-2 border-transparent text-[#ad8ecc] hover:border-teal-400 hover:text-teal-300 transition-all duration-300 pb-3 pt-4 px-2" href="#">
                      <p className="text-sm font-semibold leading-normal">Unread</p>
                    </a>
                    <a className="flex items-center justify-center border-b-2 border-transparent text-[#ad8ecc] hover:border-teal-400 hover:text-teal-300 transition-all duration-300 pb-3 pt-4 px-2" href="#">
                      <p className="text-sm font-semibold leading-normal">Important</p>
                    </a>
                  </nav>
                  <button className="flex items-center gap-2 rounded-md h-10 px-4 bg-transparent border border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 text-sm font-medium">
                    <span className="material-symbols-outlined">clear_all</span>
                    <span>Clear All</span>
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-6 p-6 rounded-lg bg-[#1a1023]/80 border border-transparent hover:border-[var(--primary-color)] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[var(--primary-color)]/20">
                    <div className="flex-shrink-0 text-yellow-400"><span className="material-symbols-outlined text-3xl">warning</span></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h2 className="text-lg font-semibold leading-tight">Tax filing deadline approaching</h2>
                        <p className="text-[#ad8ecc] text-xs font-normal">2 days ago</p>
                      </div>
                      <p className="text-[#ad8ecc] text-sm mt-1 mb-4">Don&apos;t forget to file your taxes before the deadline. Click here to view details and get assistance.</p>
                      <div className="flex gap-2">
                        <button className="flex items-center justify-center rounded-md h-9 px-4 bg-teal-500/10 text-teal-300 text-sm font-medium hover:bg-teal-500/20 transition-colors duration-200">View Details</button>
                        <button className="flex items-center justify-center rounded-md h-9 px-4 bg-transparent text-[#ad8ecc] text-sm font-medium hover:bg-[#36214a] transition-colors duration-200">Mark as Read</button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 rounded-lg bg-[#1a1023]/80 border border-transparent hover:border-[var(--primary-color)] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[var(--primary-color)]/20">
                    <div className="flex-shrink-0 text-blue-400"><span className="material-symbols-outlined text-3xl">info</span></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h2 className="text-lg font-semibold leading-tight">Investment portfolio update</h2>
                        <p className="text-[#ad8ecc] text-xs font-normal">5 days ago</p>
                      </div>
                      <p className="text-[#ad8ecc] text-sm mt-1 mb-4">Your investment portfolio has been updated. Review the changes and performance report.</p>
                      <div className="flex gap-2">
                        <button className="flex items-center justify-center rounded-md h-9 px-4 bg-teal-500/10 text-teal-300 text-sm font-medium hover:bg-teal-500/20 transition-colors duration-200">View Details</button>
                        <button className="flex items-center justify-center rounded-md h-9 px-4 bg-transparent text-[#ad8ecc] text-sm font-medium hover:bg-[#36214a] transition-colors duration-200">Mark as Read</button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 rounded-lg bg-[#1a1023]/80 border border-transparent hover:border-[var(--primary-color)] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[var(--primary-color)]/20">
                    <div className="flex-shrink-0 text-purple-400"><span className="material-symbols-outlined text-3xl">event_available</span></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h2 className="text-lg font-semibold leading-tight">Retirement planning reminder</h2>
                        <p className="text-[#ad8ecc] text-xs font-normal">1 week ago</p>
                      </div>
                      <p className="text-[#ad8ecc] text-sm mt-1 mb-4">It&apos;s time to review your retirement plan and make any necessary adjustments.</p>
                      <div className="flex gap-2">
                        <button className="flex items-center justify-center rounded-md h-9 px-4 bg-teal-500/10 text-teal-300 text-sm font-medium hover:bg-teal-500/20 transition-colors duration-200">View Details</button>
                        <button className="flex items-center justify-center rounded-md h-9 px-4 bg-transparent text-[#ad8ecc] text-sm font-medium hover:bg-[#36214a] transition-colors duration-200">Mark as Read</button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 rounded-lg bg-[#1a1023]/80 border border-transparent hover:border-[var(--primary-color)] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[var(--primary-color)]/20">
                    <div className="flex-shrink-0 text-teal-400"><span className="material-symbols-outlined text-3xl">auto_awesome</span></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h2 className="text-lg font-semibold leading-tight">New feature: AI-powered insights</h2>
                        <p className="text-[#ad8ecc] text-xs font-normal">2 weeks ago</p>
                      </div>
                      <p className="text-[#ad8ecc] text-sm mt-1 mb-4">Explore our new AI-powered insights feature to get personalized retirement planning recommendations.</p>
                      <div className="flex gap-2">
                        <button className="flex items-center justify-center rounded-md h-9 px-4 bg-teal-500/10 text-teal-300 text-sm font-medium hover:bg-teal-500/20 transition-colors duration-200">Explore Feature</button>
                        <button className="flex items-center justify-center rounded-md h-9 px-4 bg-transparent text-[#ad8ecc] text-sm font-medium hover:bg-[#36214a] transition-colors duration-200">Mark as Read</button>
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
