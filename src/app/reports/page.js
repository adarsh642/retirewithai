'use client';

import Navbar from '@/components/Navbar';

export default function ReportsPage() {
  return (
    <>
      {/* Page-scoped fonts and Material Symbols */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
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
        :root {
          --primary-50: #f2e6fe;
          --primary-100: #e5ceff;
          --primary-200: #cb9eff;
          --primary-300: #b16fff;
          --primary-400: #973fff;
          --primary-500: #7f06f9;
          --primary-600: #7205e0;
          --primary-700: #6504c7;
          --primary-800: #5804ae;
          --primary-900: #4b0395;
          --primary-950: #2d0259;
        }
        .glow-shadow { box-shadow: 0 0 20px 5px var(--primary-500), 0 0 5px 1px var(--primary-200); }
        .glassmorphism { background: rgba(45, 2, 89, 0.2); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
        @keyframes shimmer { 0% { transform: translateX(-100%) skewX(-12deg); } 100% { transform: translateX(200%) skewX(-12deg); } }
      `}</style>

      <div className="relative flex min-h-screen" style={{ backgroundColor: '#0D041A', fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
        {/* Sidebar */}
        <Navbar />

        {/* Main */}
        <main className="flex-1 p-8 overflow-y-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white">Reports & Insights</h1>
            <p className="text-gray-400">Download personalized reports and get AI-powered summaries.</p>
          </header>

          {/* AI Summary card */}
          <div className="glassmorphism border border-[var(--primary-800)] rounded-2xl p-6 mb-8 flex items-center gap-6 relative overflow-hidden">
            <div className="absolute -top-1/2 -left-1/4 w-full h-[200%] bg-gradient-to-r from-transparent via-[var(--primary-500)]/20 to-transparent animate-[shimmer_4s_infinite]"></div>
            <div className="flex-shrink-0">
              <span className="material-symbols-outlined text-6xl text-[var(--primary-400)] drop-shadow-[0_0_10px_var(--primary-400)]">smart_toy</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">AI Summary</h2>
              <p className="text-gray-300">Your financial health is strong, with a projected retirement income exceeding your current expenses. Consider diversifying your portfolio further to mitigate risks.</p>
            </div>
          </div>

          {/* Charts */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Donut chart card */}
            <div className="glassmorphism border border-[var(--primary-800)] rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Portfolio Allocation</h3>
              <div className="flex justify-center items-center h-64">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#251640" strokeWidth="4"></path>
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#00C49F" strokeDasharray="60, 40" strokeDashoffset="-0" strokeWidth="4" style={{ filter: 'drop-shadow(0 0 5px #00C49F)' }} transform="rotate(-90 18 18)"></path>
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#FFBB28" strokeDasharray="30, 70" strokeDashoffset="-60" strokeWidth="4" style={{ filter: 'drop-shadow(0 0 5px #FFBB28)' }} transform="rotate(-90 18 18)"></path>
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#FF8042" strokeDasharray="10, 90" strokeDashoffset="-90" strokeWidth="4" style={{ filter: 'drop-shadow(0 0 5px #FF8042)' }} transform="rotate(-90 18 18)"></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-3xl font-bold text-white">60%</span>
                    <span className="text-sm text-gray-400">Stocks</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-3 h-3 rounded-full bg-[#00C49F]"></span>
                  <span className="text-gray-300">Stocks (60%)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-3 h-3 rounded-full bg-[#FFBB28]"></span>
                  <span className="text-gray-300">Bonds (30%)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-3 h-3 rounded-full bg-[#FF8042]"></span>
                  <span className="text-gray-300">Real Estate (10%)</span>
                </div>
              </div>
            </div>

            {/* Line chart card */}
            <div className="glassmorphism border border-[var(--primary-800)] rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Savings Growth vs. Expenses</h3>
              <div className="h-72">
                <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <defs>
                    <linearGradient id="savingsGradient" x1="0" x2="0" y1="0" y2="200" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#00C49F" stopOpacity="0.3" />
                      <stop offset="1" stopColor="#00C49F" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="expensesGradient" x1="0" x2="0" y1="0" y2="200" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#FF8042" stopOpacity="0.3" />
                      <stop offset="1" stopColor="#FF8042" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="50" x2="400" y2="50" stroke="#251640" strokeWidth="1" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#251640" strokeWidth="1" />
                  <line x1="0" y1="150" x2="400" y2="150" stroke="#251640" strokeWidth="1" />
                  <path d="M0 150 C 50 120, 100 80, 150 50, 200 70, 250 40, 300 20, 350 50, 400 30" stroke="#00C49F" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 5px #00C49F)' }} />
                  <path d="M0 150 C 50 120, 100 80, 150 50, 200 70, 250 40, 300 20, 350 50, 400 30 L 400 200 L 0 200 Z" fill="url(#savingsGradient)" />
                  <path d="M0 180 C 50 170, 100 160, 150 150, 200 145, 250 140, 300 135, 350 130, 400 125" stroke="#FF8042" strokeWidth="2" strokeDasharray="4 4" style={{ filter: 'drop-shadow(0 0 5px #FF8042)' }} />
                  <path d="M0 180 C 50 170, 100 160, 150 150, 200 145, 250 140, 300 135, 350 130, 400 125 L 400 200 L 0 200 Z" fill="url(#expensesGradient)" />
                </svg>
              </div>
              <div className="flex justify-center gap-4 -mt-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-3 h-3 rounded-full bg-[#00C49F]"></span>
                  <span className="text-gray-300">Savings Growth</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-3 h-3 rounded-full bg-[#FF8042]"></span>
                  <span className="text-gray-300">Expenses</span>
                </div>
              </div>
            </div>
          </section>

          {/* Download button */}
          <div className="flex justify-center mb-8">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[var(--primary-600)] to-[var(--primary-900)] px-8 py-3 text-lg font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-500)]/50">
              <span className="absolute -inset-full top-0 block -translate-x-full -skew-x-12 transform bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-[shimmer_2s_infinite]"></span>
              <span className="material-symbols-outlined mr-2">download</span>
              Download PDF Report
            </button>
          </div>

          {/* Recent Activity */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Recent Activity Log</h2>
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto pb-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {[
                  { title: 'Portfolio Rebalance', time: '2 days ago', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAE3-qmL09fy23EVxYf_fO49h-e0IdNk5iOWDkkG43BKhQnwsZAr8NhLdedOwrRKvDk-jHwLf0WKIj30P2XAHXjPC9wSE47MgZXb2UP2HllOAoRMV491HUBgPhxe_tydmHwgmiJOMuobR2Iisk9pKXJraP9YWw-rZJa4nZZz-c9hg0WvQeEjJsBUcnydYVyWDGumZvJwXv0_cPieheeU4Zwqo49GXU_7wvr43leg3QuDBtNJSiP6BhCVDf6_oTleI6skRZinfEM2DU' },
                  { title: 'Tax Loss Harvesting', time: '1 week ago', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1-zc6zExZQ415WWrPyhCPek2xJzLNDLPEg825Q9XtQd2ML2EoVmj4dSuC7g9xcSYMGm8_J89u2sX3foNaaJni1HLVpFYX-G36ygZeMBFkp8YUJZepggJhr6FdhejOqQeStpgeWcPKXw3VflNV0M900rG1bVhz8OZnF1v3OSmODzbxmfAsAGzHmzsoNtrNDs5pP2wV8L9trx704hSFAkkgGyTrbHUotXIGMLiqdxzGRplR-7SHPzXe_aCekawWfmwqsBjlfsflY4I' },
                  { title: 'Goal Adjustment', time: '2 weeks ago', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBP59tJ3Iu4-s6sQVVte4lJ4x9xjxoXi6_uL_DK5zYLHTu-qBE2m9RdATFneB9cOQMNaxyuZg_0-YoFFximb5tv8xwIUu-s3PFcxFmc1m6jC7ZHYy2crYwj5T4D1zHD2ccu_ovXZ1W7ze--gzn3d01Ht1f6PKi0wWkINgKaMa9-CRni1Z_8bm_izvJDWSIWfnV-cXE4gvn2rnFsirgnFMxygc9xKAaBRNNcyQrs9qMkYFl_Wsz_SIxtx90JtyABijiGp7mun46IEx8' },
                  { title: 'Investment Review', time: '1 month ago', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDH6YgzCWXQ6Tdt-Q33HBIe-xcykf77IhmtypBXzf-QQwL51iVjCrwB_94Act33r9slbasJ0eL_t0BkdlQ_1WwiQaKCNfhk4YOdgB8Cxs7OYmAszyE_W26g3JLBodpWq7bhuR5jVchNHQX5VSLNoSnhbUWxsSGzLCUMws33rXc7YAFX1S3QZXJU4DTAxMKTNYpeVEIgD2FsFe7e9TWVhzxWu0ye05VS6FCbH-vpKF7MpAoH7N3af6EpduPDSVcGIyzcanepSBZBiiA' },
                  { title: 'Savings Contribution', time: '2 months ago', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaMiQ7d034XHZsCDAf1NtX6DPGTquf7meRH444znXlySPlAOjbrJyL0NT5uPEwC8meJ8Kl4dgx-D0gGi0_xNduXRXUn5FV75d1WHWnXIyborGf3DKHzzQSy6_HmMgHAicdacTptUfUl766M1BX3hirj64bqyVcRkbTK7H2owFYSP9tTx5cDFtgi6xjUZfNQsaWyUtn0qv1STwedPb76vI2SGZC8Giks5O8VKitaPZaMmHSfxH5Ra238nn72QUpkorgxv1okHo_3pg' },
                ].map((item, idx) => (
                  <div className="flex-shrink-0 w-60 group" key={idx}>
                    <div className="h-40 w-full bg-cover bg-center rounded-xl mb-3 relative overflow-hidden border-2 border-transparent group-hover:border-[var(--primary-500)] transition-all duration-300" style={{ backgroundImage: `url(${item.img})` }}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-950)]/80 to-transparent"></div>
                    </div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.time}</p>
                  </div>
                ))}
              </div>
              <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#0D041A] to-transparent pointer-events-none"></div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
