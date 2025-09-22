import Link from 'next/link';
import Head from 'next/head';


const FuturePlanIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
    <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fill="currentColor" fillRule="evenodd"></path>
  </svg>
);

const FeaturesSection = () => {
  const features = [
    {
      title: 'AI Retirement Forecast',
      description: 'Get a clear picture of your retirement future with our AI-powered forecasting.',
      icon: (
        <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"></path>
        </svg>
      ),
    },
    {
      title: 'Smart Tax Savings',
      description: 'Optimize your tax strategy to maximize your retirement savings.',
      icon: (
        <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path>
        </svg>
      ),
    },
    {
      title: 'Personalized Investment Plan',
      description: 'Receive a personalized investment plan tailored to your risk tolerance and goals.',
      icon: (
        <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>
        </svg>
      ),
    },
    {
      title: 'Scenario Comparison',
      description: 'Compare different retirement scenarios to make informed decisions.',
      icon: (
        <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
        </svg>
      ),
    },
  ];
  return (
    <section className="py-20 bg-[rgba(26,26,26,0.5)]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">A Smarter Way to Plan</h2>
        <p className="text-lg text-muted-gray max-w-2xl mx-auto mb-16">
          Our platform offers a range of features to help you achieve your retirement goals.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1b1835]/60 p-8 rounded-2xl border border-white/10 text-left transform hover:-translate-y-2 transition-transform duration-300 soft-shadow"
            >
              <div className="text-accent-teal mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FuturePlan - AI-Powered Retirement Planning</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-dark-charcoal text-white">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-br from-[#121023] via-[#1a1a2e] to-dark-charcoal -z-10"></div>
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-gradient-to-br from-[rgba(124,58,237,0.15)] to-transparent rounded-full blur-[100px]"></div>
        
        {/* Header */}
        <header className="sticky top-0 z-50 bg-[rgba(26,26,26,0.8)] backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FuturePlanIcon className="h-8 w-8 text-primary-purple" />
              <h2 className="text-2xl font-bold">FuturePlan</h2>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-base font-medium">
              <Link className="hover:text-accent-teal transition-colors" href="#features">Product</Link>
              <Link className="hover:text-accent-teal transition-colors" href="#how-it-works">How it works</Link>
              <Link className="hover:text-accent-teal transition-colors" href="#about">About</Link>
              <Link className="hover:text-accent-teal transition-colors" href="#help">Help & Support</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link className="text-base font-medium hover:text-accent-teal transition-colors" href="signin">
                Log in
              </Link>
             
              <Link className="px-6 py-2 bg-primary-purple text-white font-bold rounded-full hover:opacity-90 transition-opacity glowing-highlight" href="signup">
                Sign Up
              </Link>
            
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-20 md:py-32 text-center">
            <div className="container mx-auto px-6">
              <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                Your <span className="gradient-text">AI-Powered</span> Path to Retirement
              </h1>
              <p className="text-lg md:text-xl text-muted-gray max-w-3xl mx-auto mb-10">
                Plan your future with confidence. Get personalized insights and maximize your retirement savings with our cutting-edge AI.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link href="/setupplan" className="px-8 py-4 bg-gradient-to-r from-primary-purple to-accent-teal text-white font-bold rounded-full text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 glowing-highlight">
                  Start Free Plan
                </Link>
                <Link href="/signup" className="px-8 py-4 bg-[#25214a] text-white font-bold rounded-full text-lg hover:bg-[#352f6a] transition-colors">
                  Book Consultation
                </Link>
              </div>
              <div className="mt-20 relative">
                <div className="absolute top-1/2 left-1/2 w-[80%] h-[500px] bg-gradient-to-tr from-[rgba(124,58,237,0.2)] to-[rgba(20,184,166,0.1)] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10"></div>
                {/* Custom Dashboard Preview */}
                <div className="w-full max-w-5xl mx-auto rounded-2xl soft-shadow border border-white/10 bg-[#1b1835]/60 overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1f1b3e]/60">
                    <div className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-accent-teal"></span>
                      <h3 className="font-semibold">Overview</h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Last 12 months</span>
                      <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">All accounts</span>
                    </div>
                  </div>
                  {/* Stats Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-muted-gray">Net Worth</p>
                      <p className="text-xl md:text-2xl font-bold mt-1">₹ 1.28 Cr</p>
                      <p className="text-xs text-accent-teal mt-1">+6.2% MoM</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-muted-gray">Monthly Savings</p>
                      <p className="text-xl md:text-2xl font-bold mt-1">₹ 52,500</p>
                      <p className="text-xs text-accent-teal mt-1">On track</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-muted-gray">Growth Rate</p>
                      <p className="text-xl md:text-2xl font-bold mt-1">11.4% p.a.</p>
                      <p className="text-xs text-accent-teal mt-1">Projected</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-muted-gray">Tax Savings (YTD)</p>
                      <p className="text-xl md:text-2xl font-bold mt-1">₹ 86,400</p>
                      <p className="text-xs text-accent-teal mt-1">Optimized</p>
                    </div>
                  </div>
                  {/* Charts Grid */}
                  <div className="grid md:grid-cols-3 gap-6 p-6 pt-0">
                    {/* Line Chart */}
                    <div className="md:col-span-2 rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">Portfolio Growth</h4>
                        <span className="text-xs text-muted-gray">Aug &apos;24 – Jul &apos;25</span>
                      </div>
                      <div className="relative h-48">
                        <svg viewBox="0 0 400 160" className="w-full h-full">
                          {/* grid */}
                          <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
                            <line x1="0" y1="20" x2="400" y2="20" />
                            <line x1="0" y1="60" x2="400" y2="60" />
                            <line x1="0" y1="100" x2="400" y2="100" />
                            <line x1="0" y1="140" x2="400" y2="140" />
                          </g>
                          {/* area fill */}
                          <defs>
                            <linearGradient id="gradArea" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgba(6,182,212,0.35)" />
                              <stop offset="100%" stopColor="rgba(6,182,212,0)" />
                            </linearGradient>
                            <linearGradient id="gradLine" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#06b6d4" />
                              <stop offset="100%" stopColor="#d946ef" />
                            </linearGradient>
                          </defs>
                          <path d="M0,130 C40,120 80,110 120,90 C160,70 200,80 240,60 C280,40 320,65 360,50 L360,160 L0,160 Z" fill="url(#gradArea)" />
                          <path d="M0,130 C40,120 80,110 120,90 C160,70 200,80 240,60 C280,40 320,65 360,50" fill="none" stroke="url(#gradLine)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="mt-3 flex items-center gap-4 text-xs text-muted-gray">
                        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full inline-block" style={{background:"#06b6d4"}}></span> Portfolio</div>
                        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full inline-block" style={{background:"#d946ef"}}></span> Benchmark</div>
                      </div>
                    </div>
                    {/* Bars + Donut */}
                    <div className="space-y-6">
                      {/* Bar Chart */}
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">Contributions</h4>
                          <span className="text-xs text-accent-teal">+14%</span>
                        </div>
                        <div className="flex items-end gap-2 h-32">
                          {[
                            35, 48, 42, 60, 54, 68, 75, 70, 82, 78, 90, 96,
                          ].map((h, i) => (
                            <div key={i} className="flex-1 bg-gradient-to-t from-[#163d4a] to-[#224f60] rounded-t">
                              <div style={{ height: `${h}%` }} className="w-full bg-gradient-to-t from-[#06b6d4] to-[#d946ef] rounded-t"></div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-2 flex justify-between text-[10px] text-muted-gray">
                          {['A','S','O','N','D','J','F','M','A','M','J','J'].map((m, i)=> (<span key={`${m}-${i}`}>{m}</span>))}
                        </div>
                      </div>
                      {/* Donut Chart */}
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">Goal Progress</h4>
                          <span className="text-xs text-muted-gray">Retirement corpus</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <svg viewBox="0 0 120 120" className="w-32 h-32">
                            <circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,0.1)" strokeWidth="14" fill="none" />
                            {/* 72% */}
                            <circle cx="60" cy="60" r="50" stroke="url(#donutGrad)" strokeWidth="14" fill="none" strokeLinecap="round" strokeDasharray="314" strokeDashoffset="88" transform="rotate(-90 60 60)" />
                            <defs>
                              <linearGradient id="donutGrad" x1="0" x2="1" y1="0" y2="0">
                                <stop offset="0%" stopColor="#06b6d4" />
                                <stop offset="100%" stopColor="#d946ef" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-center mt-2">
                          <p className="text-2xl font-bold">72%</p>
                          <p className="text-xs text-muted-gray">On target this year</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <div id="features">
            <FeaturesSection />
          </div>

          {/* Quick Start Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Quick Start</h2>
              <p className="text-lg text-muted-gray text-center max-w-2xl mx-auto mb-10">Jump right into the parts of the app you need most.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <Link href="/setupplan" className="group rounded-2xl border border-white/10 bg-[#1b1835]/60 p-6 hover:border-accent-teal transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent-teal">playlist_add_check</span>
                    <h3 className="font-semibold text-lg">Setup Your Plan</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-gray">Start by entering your income, expenses, and retirement goals.</p>
                </Link>
                <Link href="/dashboard" className="group rounded-2xl border border-white/10 bg-[#1b1835]/60 p-6 hover:border-accent-teal transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent-teal">dashboard</span>
                    <h3 className="font-semibold text-lg">View Dashboard</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-gray">Track your progress and get personalized insights.</p>
                </Link>
                <Link href="/goals" className="group rounded-2xl border border-white/10 bg-[#1b1835]/60 p-6 hover:border-accent-teal transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent-teal">flag</span>
                    <h3 className="font-semibold text-lg">Set Goals</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-gray">Define milestones and measure what matters most.</p>
                </Link>
                <Link href="/projection" className="group rounded-2xl border border-white/10 bg-[#1b1835]/60 p-6 hover:border-accent-teal transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent-teal">trending_up</span>
                    <h3 className="font-semibold text-lg">See Projections</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-gray">Explore how your wealth grows over time.</p>
                </Link>
                <Link href="/taxoptimize" className="group rounded-2xl border border-white/10 bg-[#1b1835]/60 p-6 hover:border-accent-teal transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent-teal">percent</span>
                    <h3 className="font-semibold text-lg">Optimize Taxes</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-gray">Let AI find tax-saving opportunities in your portfolio.</p>
                </Link>
                <Link href="/reports" className="group rounded-2xl border border-white/10 bg-[#1b1835]/60 p-6 hover:border-accent-teal transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent-teal">insights</span>
                    <h3 className="font-semibold text-lg">View Reports</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-gray">Dive deeper into analytics and insights.</p>
                </Link>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get Started in 3 Simple Steps</h2>
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-purple via-accent-teal to-transparent -translate-x-1/2"></div>
                <div className="relative mb-12">
                  <div className="absolute left-1/2 top-1 w-8 h-8 bg-primary-purple rounded-full -translate-x-1/2 border-4 border-dark-charcoal flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="ml-[calc(50%_+_40px)]">
                    <h3 className="text-2xl font-bold mb-2">Connect Your Accounts</h3>
                    <p className="text-muted-gray">Securely link your financial accounts to give our AI the full picture.</p>
                  </div>
                </div>
                <div className="relative mb-12 text-right">
                  <div className="absolute left-1/2 top-1 w-8 h-8 bg-accent-teal rounded-full -translate-x-1/2 border-4 border-dark-charcoal flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="mr-[calc(50%_+_40px)]">
                    <h3 className="text-2xl font-bold mb-2">Receive Your Plan</h3>
                    <p className="text-muted-gray">Our AI analyzes your data to create a personalized, actionable retirement plan.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 top-1 w-8 h-8 bg-primary-purple rounded-full -translate-x-1/2 border-4 border-dark-charcoal flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="ml-[calc(50%_+_40px)]">
                    <h3 className="text-2xl font-bold mb-2">Track & Adjust</h3>
                    <p className="text-muted-gray">Monitor your progress, get timely alerts, and adapt your plan as life happens.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-[rgba(26,26,26,0.5)]">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Savers Everywhere</h2>
                <p className="text-lg text-muted-gray max-w-2xl mx-auto">
                  See what our users have to say about their journey with FuturePlan.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-[#1b1835]/60 p-8 rounded-2xl border border-white/10 soft-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <img
                        alt="User avatar"
                        className="w-14 h-14 rounded-full mr-4"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzo0IZ4WzwOQm-Mgfhh1fc6_JkJilNgnfcVDMdXNECUFDIXw_13CvkjMDKJJ6UR2r70WhYJ0-JvL7Wpk9VV2xbK8C1lYaaChrRpTvDRt1pB38GcLk8Dohau1HYnlGFaB7-OUxycQJQ1EEIZJre8z8EfRWXOGG1fVCxTfn1GAkfpEY29OCxnk-hXilNrhqeEholDZahy1E-muZAovVTtRLWXvbtm-N6pwiZ-SPZbThHqJN1YaxZKBreiBhjX9xF0FVYWWkXoitf5LA"
                      />
                      <div>
                        <h4 className="font-bold text-xl">Sophia C.</h4>
                        <p className="text-sm text-muted-gray">Early Retiree</p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-6 italic">
                      &ldquo;FuturePlan made retirement planning feel achievable, not overwhelming. The AI forecast was a real eye-opener.&rdquo;
                    </p>
                  </div>
                  <div className="flex text-yellow-400 text-xl">★★★★★</div>
                </div>
                <div className="bg-[#1b1835]/60 p-8 rounded-2xl border border-white/10 soft-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <img
                        alt="User avatar"
                        className="w-14 h-14 rounded-full mr-4"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAapcj9YuwitAOCQHIckRKzkJqH5WG2d50e0YGgRDbc1JxxHQ5G_hMjc5iBNkfxi172GlGEz7CcgSN3sYBVDgbePO8SgLEJAMpYBAjvkOd533rnoXC3bTESxzyqfFSLqJ5rA2NgpGxB6NaWC-guGI8LY69VeqLKXl3XlB2V_HqP3ZVKaqigP6ExHPTPMVIgcWUpG90hwZHifo35R4k_lXw6D3vhQsrneGDnCyl70Scm06NdufJgxJtRvR0FvZGxUIWkzPwCATxhKyQ"
                      />
                      <div>
                        <h4 className="font-bold text-xl">Ethan B.</h4>
                        <p className="text-sm text-muted-gray">Small Business Owner</p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-6 italic">
                      &ldquo;The smart tax savings feature alone is worth it. I&apos;ve saved a significant amount that&apos;s now working for my future.&rdquo;
                    </p>
                  </div>
                  <div className="flex text-yellow-400 text-xl">★★★★★</div>
                </div>
                <div className="bg-[#1b1835]/60 p-8 rounded-2xl border border-white/10 soft-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <img
                        alt="User avatar"
                        className="w-14 h-14 rounded-full mr-4"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD939F47Yy-jKz869k660uO62_Y-iW1J2U7C3tC_F_E5l3n_z9a6m7-Jk_X8d-o2W5F4Y2e-p6T_g4J-w1c7R8e9N9j3X4l-l-w1S6g1h0a3V9j2c8d7T1k8h7j6K5j4"
                      />
                      <div>
                        <h4 className="font-bold text-xl">Olivia P.</h4>
                        <p className="text-sm text-muted-gray">Freelance Designer</p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-6 italic">
                      &ldquo;As a freelancer, my income fluctuates. FuturePlan&apos;s scenario comparison tool is a lifesaver for planning ahead.&rdquo;
                    </p>
                  </div>
                  <div className="flex text-yellow-400 text-xl">★★★★★</div>
                </div>
              </div>
              <div className="mt-16 bg-[#1b1835]/60 p-8 rounded-2xl border border-white/10 soft-shadow max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-6">Leave a Review</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-muted-gray mb-2" htmlFor="rating">
                      Your Rating
                    </label>
                    <div className="flex flex-row-reverse justify-center items-center text-3xl">
                      <input className="rating-input" id="star5" name="rating" type="radio" value="5" />
                      <label className="rating-label" htmlFor="star5">★</label>
                      <input className="rating-input" id="star4" name="rating" type="radio" value="4" />
                      <label className="rating-label" htmlFor="star4">★</label>
                      <input className="rating-input" id="star3" name="rating" type="radio" value="3" />
                      <label className="rating-label" htmlFor="star3">★</label>
                      <input className="rating-input" id="star2" name="rating" type="radio" value="2" />
                      <label className="rating-label" htmlFor="star2">★</label>
                      <input className="rating-input" id="star1" name="rating" type="radio" value="1" />
                      <label className="rating-label" htmlFor="star1">★</label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-gray mb-2" htmlFor="review">
                      Your Review
                    </label>
                    <textarea
                      className="w-full bg-[#25214a] border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-accent-teal focus:border-accent-teal transition-colors"
                      id="review"
                      name="review"
                      placeholder="Tell us about your experience..."
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      className="px-8 py-3 bg-gradient-to-r from-primary-purple to-accent-teal text-white font-bold rounded-full text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 glowing-highlight"
                      type="submit"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About FuturePlan</h2>
              <p className="text-lg text-center text-muted-gray max-w-3xl mx-auto">
                FuturePlan helps you plan, track, and optimize your path to retirement with simple tools and smart AI. Connect your finances, set clear goals, and get personalized guidance to save more, reduce taxes, and stay on track—without complexity or jargon.
              </p>
            </div>
          </section>

          {/* Help & Support Section */}
          <section id="help" className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Help & Support</h2>
                <p className="text-lg text-muted-gray max-w-2xl mx-auto">We’re here to help you get the most out of FuturePlan—anytime.</p>
              </div>

              {/* Contact highlight */}
              <div className="relative max-w-5xl mx-auto mb-10 rounded-2xl border border-white/10 bg-gradient-to-r from-[#1f1b3e] to-[#1a2640] p-6 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-fuchsia-500/10 rounded-full blur-2xl"></div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative">
                  <div>
                    <p className="text-sm text-white/80">Need quick help?</p>
                    <p className="text-xl font-semibold">Email us at support@futureplan.app</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link href="/signup" className="px-4 py-2 bg-gradient-to-r from-primary-purple to-accent-teal rounded-full text-sm font-semibold">Get Started</Link>
                    <Link href="/notifications" className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm font-semibold hover:bg-white/15">View Updates</Link>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <div className="bg-[#1b1835]/60 p-6 rounded-2xl border border-white/10 soft-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-accent-teal">smart_toy</span>
                      <h3 className="font-semibold text-lg">AI Assistant</h3>
                    </div>
                    <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10">24/7</span>
                  </div>
                  <p className="text-sm text-muted-gray mb-4">Ask questions in plain language and get instant guidance on planning, taxes, and projections.</p>
                  <div className="flex items-center gap-3 text-xs">
                    <button className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 hover:bg-white/15">Open chat</button>
                    <button className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 hover:bg-white/15">Common tips</button>
                  </div>
                </div>

                <div className="bg-[#1b1835]/60 p-6 rounded-2xl border border-white/10 soft-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-accent-teal">mail</span>
                      <h3 className="font-semibold text-lg">Email Support</h3>
                    </div>
                    <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10">~24h</span>
                  </div>
                  <p className="text-sm text-muted-gray mb-4">Reach our team for personalized help. We typically respond within 24 hours on business days.</p>
                  <div className="flex items-center gap-3 text-xs">
                    <a href="mailto:support@futureplan.app" className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 hover:bg-white/15">Send email</a>
                    <Link href="#about" className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 hover:bg-white/15">About us</Link>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div className="max-w-4xl mx-auto mt-8 bg-[#1b1835]/60 p-6 rounded-2xl border border-white/10 soft-shadow">
                <h3 className="text-2xl font-bold mb-2">Reach Out to Support</h3>
                <p className="text-sm text-muted-gray mb-6">Fill out the form and our team will get back to you as soon as possible.</p>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hs_name" className="block text-xs text-muted-gray mb-1">Full Name</label>
                    <input id="hs_name" name="name" type="text" required className="w-full rounded-lg bg-[#25214a] border border-white/10 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="hs_email" className="block text-xs text-muted-gray mb-1">Email</label>
                    <input id="hs_email" name="email" type="email" required className="w-full rounded-lg bg-[#25214a] border border-white/10 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="hs_topic" className="block text-xs text-muted-gray mb-1">Topic</label>
                    <select id="hs_topic" name="topic" className="w-full rounded-lg bg-[#25214a] border border-white/10 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500">
                      <option>General</option>
                      <option>Billing</option>
                      <option>Technical</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="hs_priority" className="block text-xs text-muted-gray mb-1">Priority</label>
                    <select id="hs_priority" name="priority" className="w-full rounded-lg bg-[#25214a] border border-white/10 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500">
                      <option>Normal</option>
                      <option>High</option>
                      <option>Urgent</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="hs_message" className="block text-xs text-muted-gray mb-1">Message</label>
                    <textarea id="hs_message" name="message" rows="4" required className="w-full rounded-lg bg-[#25214a] border border-white/10 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="How can we help?"></textarea>
                  </div>
                  <div className="md:col-span-2 flex items-center justify-between">
                    <label className="inline-flex items-center gap-2 text-xs text-muted-gray">
                      <input type="checkbox" className="accent-cyan-500" />
                      Send me a copy of this message
                    </label>
                    <button type="submit" className="px-5 py-2 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#d946ef] font-semibold">Send message</button>
                  </div>
                </form>
              </div>

              {/* Mini FAQ */}
              <div className="max-w-3xl mx-auto mt-10 space-y-3">
                <details className="bg-[#1b1835]/60 border border-white/10 rounded-xl p-5 group">
                  <summary className="flex justify-between items-center cursor-pointer">
                    <h4 className="font-semibold">Can I change my goals later?</h4>
                    <span className="text-accent-teal">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-gray">Yes, update goals anytime and see immediate impact on your projections.</p>
                </details>
                <details className="bg-[#1b1835]/60 border border-white/10 rounded-xl p-5 group">
                  <summary className="flex justify-between items-center cursor-pointer">
                    <h4 className="font-semibold">Is my data secure?</h4>
                    <span className="text-accent-teal">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-gray">We use modern encryption and never share your data without consent.</p>
                </details>
              </div>
            </div>
          </section>

          {/* Trusted by Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h3 className="text-center text-lg text-muted-gray font-semibold mb-8">TRUSTED BY THE BEST IN FINTECH</h3>
              <div className="flex justify-around items-center gap-8 flex-wrap">
                <img
                  alt="Partner Logo 1"
                  className="h-10 opacity-60 hover:opacity-100 transition-opacity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFPIjGSj3sBg72m1KTaEJh0w-8oe_-WEzvMgUmJOywqcY4Hbs1A_xDP5wmNG5E0YSNIii_sZtI2K8cOjsmPRpK-s85F9YWplUloLObWbI4101olSgzBz-8ZvRyvFjH7DFFPMQFnqwZ5qK-294hnHkpwpa_pcg_vL8FhIhKJ86afaQ1BOpnwz-YignoGSvSw01M4cKAFoAFXbvl3DCq68WtL7ZotbVfNuxQOmIdOJUjLTSbIqqBtj-X7xxouYQ4GFIjPD8cqofwbUk"
                />
                <img
                  alt="Partner Logo 2"
                  className="h-10 opacity-60 hover:opacity-100 transition-opacity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcrflyWzin7qsOv2gbYa6CrM7u0jsEIR8HtQGofAqbJ1TuXxv_3Z-L0a10Uorj_dGOAq6ecoYpdGuTXFrlfKYdBsNa27ZrtyMOE91btYREgzBrtnBK4VlZaCkInHxy6Qlwn5XHFAE0deQsnoblRVEEvT_hvt62YcELxilh5a6rM4rO2sETHVEIcq1CIwP0UQw_aleV1bSifhDdyUsUiMZAV7BiEp2zSPuYJu_MOJgGKnHTbf76O5pvmWDUGpzvhpr239weZ8G0a5w"
                />
                <img
                  alt="Partner Logo 3"
                  className="h-10 opacity-60 hover:opacity-100 transition-opacity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQQn9eEtlzA7Ur2E6wiXmovOCx9SDoJzTtLlwdWKL9P5HN_iNb9ZRgqrTaox6dDTk75tD9fY39W9NqbNqVfl--vrBlcQ0zKs8VlwhkJYDvC5t3HmWG_x6fzPNfpx4QSZ_htpBXbcza-YMWaSzLomAbvFif63DiKVtmP4ccHktxdvkBaJ0pUygTZTW-IRFn46B4hV1Q3raTO_dmqjiBEI7jNwInsvyejBrq6KIkIsK9eomw6wZOGlmu1ddXUmERaqkRNdwb4O1_ikg"
                />
                <img
                  alt="Partner Logo 4"
                  className="h-10 opacity-60 hover:opacity-100 transition-opacity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzunk5fbvZZvZ4X93eUnq49m5D9kXU-XDZR9QGZX8aM11YciL1W6JVqhXy55a7xZpi2oiCW4sPM2Cv1vlV2VkmE3tKcMsmpscL6HVUtpAFGvwgD4mFeMLkRNTVSvY3GNj1hwXqON4bxK1bmhX2J6Xi41zS-MOUG2CunZhPmkEwldFsEWyXowb2ZC9skCo5KAop5EaJy4Ji3g9uanBk16PMvT1IGx5GJ-DSLVjKuT9sgyZjSK4v3mhf002A66B4kip_GLABsR9qZAU"
                />
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="relative bg-gradient-to-r from-primary-purple/80 to-accent-teal/80 rounded-2xl p-12 text-center overflow-hidden">
                <div
                  className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M-10%2010.5C-10%204.701%20-5.299%200%20.5%200S11%204.701%2011%2010.5%206.299%2021%20.5%2021C-5.299%2021%20-10%2016.299%20-10%2010.5zM90%2010.5C90%204.701%2094.701%200%20100.5%200S111%204.701%20111%2010.5%20106.299%2021%20100.5%2021S90%2016.299%2090%2010.5z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.05%22%20fill-rule%3D%22evenodd%22/%3E%3C/svg%3E')] opacity-50"
                ></div>
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Future?</h2>
                  <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
                    Take the first step towards a confident retirement. It&apos;s free to start.
                  </p>
                  <button className="px-8 py-3 bg-gradient-to-r from-primary-purple to-accent-teal text-white font-bold rounded-full text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 glowing-highlight" type="submit">
    Get Started Today
</button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-[#121023] py-12">
          <div className="container mx-auto px-6 text-center text-muted-gray">
            <div className="flex justify-center items-center gap-6 mb-8">
              <a className="hover:text-white transition-colors" href="#">About</a>
              <a className="hover:text-white transition-colors" href="#">Contact</a>
              <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            </div>
            <div className="flex justify-center gap-6 mb-8">
              <a className="text-gray-400 hover:text-white transition-colors" href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46,6.52a.5.5,0,0,0-.4-.44l-3.32-.48-1.49-3a.5.5,0,0,0-.9,0L15,5.6l-3.32.48a.5.5,0,0,0-.4.44L11,9.84l-2.42,2.42a.5.5,0,0,0,0,.7l2.42,2.42-1.74,3.32a.5.5,0,0,0,.44.75h.21a.5.5,0,0,0,.35-.15l3-3.32,3.32,1.49a.5.5,0,0,0,.64-.32l1.49-3,1.74-3.32a.5.5,0,0,0,0-.7ZM12,11.5a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,11.5Z"></path></svg>
              </a>
              <a className="text-gray-400 hover:text-white transition-colors" href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-1.5c-1,0-1,.5-1,1V12h3l-.5,3h-2.5v6.8A10,10,0,0,0,22,12Z"></path></svg>
              </a>
              <a className="text-gray-400 hover:text-white transition-colors" href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM8.5,18.5H6V11.5h2.5Zm-1.25-8.5A1.75,1.75,0,1,1,9,8.25,1.75,1.75,0,0,1,7.25,10ZM18.5,18.5H16v-4c0-1.1-.02-2.5-1.5-2.5s-1.75,1.19-1.75,2.42V18.5H10.5V11.5h2.4v1.1h.03c.33-.63,1.14-1.29,2.37-1.29,2.54,0,3,1.67,3,3.85Z"></path></svg>
              </a>
            </div>
            <p>© 2024 FuturePlan. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}