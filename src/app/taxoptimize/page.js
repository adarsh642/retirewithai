import Navbar from '@/components/Navbar';
import Topbar from '@/components/Topbar';

export default function TaxOptimizePage() {
  return (
    <div className="tax-page bg-[#120D1A] text-white min-h-screen" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      {/* Material Symbols */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');`}</style>

      {/* Page CSS variables and utilities */}
      <style>{`
        .tax-page {
          --primary-50: #f2e7fe;
          --primary-100: #e5cfff;
          --primary-200: #d8b6ff;
          --primary-300: #ca9eff;
          --primary-400: #bb85ff;
          --primary-500: #ac6cff;
          --primary-600: #9e54ff;
          --primary-700: #903bff;
          --primary-800: #8222ff;
          --primary-900: #7409ff;
          --primary-950: #6700f0;
        }
        .glassy-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 20px rgba(127, 6, 249, 0.2), 0 0 40px rgba(6, 249, 210, 0.1);
        }
      `}</style>

      <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#120D1A] dark group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow">
          <Navbar />
          <div className="flex flex-1 flex-col">
            <Topbar />
            <main className="px-4 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-10 lg:py-16">
            <div className="layout-content-container flex flex-col w-full max-w-6xl">
              <div className="flex flex-col items-center text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Smart Tax Optimization</h1>
                <p className="text-gray-400 text-lg mt-4 max-w-2xl">Our AI analyzes your portfolio to find personalized tax-saving opportunities, helping you grow your wealth faster.</p>
              </div>

              <section className="mb-16">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-6">Your AI Suggestions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="glassy-card rounded-xl p-6 flex flex-col group hover:border-[#7f06f9] transition-all duration-300">
                    <div className="mb-4 flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-[#7f06f9] to-[#06f9d2] text-white shadow-lg shadow-[#7f06f9]/30">
                      <span className="material-symbols-outlined text-3xl"> savings </span>
                    </div>
                    <p className="text-white text-lg font-semibold leading-snug flex-grow">Save ₹12,500 by delaying a stock sale by 30 days</p>
                    <button className="mt-4 w-full flex items-center justify-center rounded-lg h-10 px-4 bg-[#7f06f9] text-white text-sm font-semibold leading-normal hover:bg-opacity-90 transition-all duration-300 transform group-hover:scale-105">Apply Strategy</button>
                  </div>
                  <div className="glassy-card rounded-xl p-6 flex flex-col group hover:border-[#06f9d2] transition-all duration-300">
                    <div className="mb-4 flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-[#7f06f9] to-[#06f9d2] text-white shadow-lg shadow-[#06f9d2]/30">
                      <span className="material-symbols-outlined text-3xl"> trending_down </span>
                    </div>
                    <p className="text-white text-lg font-semibold leading-snug flex-grow">Reduce tax liability by ₹8,000 with tax-loss harvesting</p>
                    <button className="mt-4 w-full flex items-center justify-center rounded-lg h-10 px-4 bg-[#7f06f9] text-white text-sm font-semibold leading-normal hover:bg-opacity-90 transition-all duration-300 transform group-hover:scale-105">Apply Strategy</button>
                  </div>
                  <div className="glassy-card rounded-xl p-6 flex flex-col group hover:border-[#7f06f9] transition-all duration-300">
                    <div className="mb-4 flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-[#7f06f9] to-[#06f9d2] text-white shadow-lg shadow-[#7f06f9]/30">
                      <span className="material-symbols-outlined text-3xl"> account_balance_wallet </span>
                    </div>
                    <p className="text-white text-lg font-semibold leading-snug flex-grow">Minimize capital gains tax by ₹15,000 via strategic asset allocation</p>
                    <button className="mt-4 w-full flex items-center justify-center rounded-lg h-10 px-4 bg-[#7f06f9] text-white text-sm font-semibold leading-normal hover:bg-opacity-90 transition-all duration-300 transform group-hover:scale-105">Apply Strategy</button>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-6">Projected Corpus Growth</h2>
                <div className="glassy-card rounded-xl p-6 md:p-8">
                  <p className="text-lg font-semibold leading-normal">With vs Without Tax Optimization</p>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                    <div className="col-span-1 md:col-span-2">
                      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-6 items-center">
                        <p className="text-gray-400 text-sm font-medium justify-self-end">Without</p>
                        <div className="w-full bg-[#2A2135] rounded-full h-8">
                          <div className="bg-gradient-to-r from-[#2A2135] to-[#4d2f6a] h-8 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-white text-sm font-bold justify-self-end">With</p>
                        <div className="w-full bg-[#2A2135] rounded-full h-8">
                          <div className="bg-gradient-to-r from-[#7f06f9] to-[#06f9d2] h-8 rounded-full shadow-lg shadow-[#7f06f9]/30" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-start md:items-end">
                      <p className="text-gray-400 text-base font-normal leading-normal">Potential Corpus After Tax</p>
                      <p className="text-white text-4xl md:text-5xl font-bold tracking-tight mt-1">₹1,250,000</p>
                      <p className="text-teal-400 font-semibold mt-2">+₹250,000 with optimization</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="p-4 @container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl border border-[#2A2135] bg-gradient-to-r from-[#1A1023] to-[#20152B] p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-3xl text-teal-400">verified_user</span>
                    <div className="flex flex-col">
                      <p className="text-white text-base font-semibold leading-tight">We use government-approved tax-saving methods • 100% compliance guaranteed.</p>
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
