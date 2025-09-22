
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="bg-[#121212] min-h-screen flex items-center justify-center font-sans">
      <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1a1023] to-[#121212] p-4 font-sans text-white w-full">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-prism.png')] opacity-5"></div>
        <div className="relative z-10 w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl bg-[#1e1e1e]/50 backdrop-blur-sm border border-white/10 shadow-2xl shadow-purple-500/10">
            <div className="p-8 md:p-12 bg-[#1e1e1e]/80">
              <h2 className="text-3xl font-bold text-white mb-6">Sign Up</h2>
              <form className="space-y-5">
                <div>
                  <label className="sr-only" htmlFor="fullName">Full Name</label>
                  <div className="relative">
                
                    <input className="form-input w-full rounded-lg border-2 border-transparent bg-[#2a2a2a]/50 py-3 pl-12 pr-4 text-white placeholder-gray-400 transition-all duration-300 focus:border-purple-500 focus:bg-[#2f2f2f] focus:ring-0" id="fullName" placeholder="Full Name" type="text" />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <div className="relative">
                    <input className="form-input w-full rounded-lg border-2 border-transparent bg-[#2a2a2a]/50 py-3 pl-12 pr-4 text-white placeholder-gray-400 transition-all duration-300 focus:border-purple-500 focus:bg-[#2f2f2f] focus:ring-0" id="email" placeholder="Email" type="email" />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="mobile">Mobile Number</label>
                  <div className="relative">
                    <input className="form-input w-full rounded-lg border-2 border-transparent bg-[#2a2a2a]/50 py-3 pl-12 pr-4 text-white placeholder-gray-400 transition-all duration-300 focus:border-purple-500 focus:bg-[#2f2f2f] focus:ring-0" id="mobile" placeholder="Mobile Number" type="tel" />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="password">Password</label>
                  <div className="relative">
                    <input className="form-input w-full rounded-lg border-2 border-transparent bg-[#2a2a2a]/50 py-3 pl-12 pr-12 text-white placeholder-gray-400 transition-all duration-300 focus:border-purple-500 focus:bg-[#2f2f2f] focus:ring-0" id="password" placeholder="Password" type="password" />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white" type="button">
                      {/* Eye-off SVG icon for password visibility toggle */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.477 10.477A3 3 0 0012 15a3 3 0 002.121-5.121M9.88 9.88A3 3 0 0115 12c0 .795-.312 1.559-.879 2.121M12 5c-7 0-9 7-9 7s2 7 9 7 9-7 9-7-2-7-9-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="confirmPassword">Confirm Password</label>
                  <div className="relative">
                    <input className="form-input w-full rounded-lg border-2 border-transparent bg-[#2a2a2a]/50 py-3 pl-12 pr-12 text-white placeholder-gray-400 transition-all duration-300 focus:border-purple-500 focus:bg-[#2f2f2f] focus:ring-0" id="confirmPassword" placeholder="Confirm Password" type="password" />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white" type="button">
                      {/* Eye-off SVG icon for password visibility toggle */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.477 10.477A3 3 0 0012 15a3 3 0 002.121-5.121M9.88 9.88A3 3 0 0115 12c0 .795-.312 1.559-.879 2.121M12 5c-7 0-9 7-9 7s2 7 9 7 9-7 9-7-2-7-9-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <button className="btn-glow w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 py-3 mt-2 text-base font-bold text-white shadow-lg transition hover:shadow-purple-500/50" type="submit">
                    Create Account
                  </button>
                </div>
              </form>
              <p className="mt-6 text-center text-sm text-gray-400">
                Already have an account?
                <Link className="font-medium text-purple-400 hover:text-purple-300 hover:underline" href="/signin">Sign In</Link>
              </p>
            </div>
            <div className="hidden md:flex flex-col justify-center items-center p-12 bg-gradient-to-br from-[#2d1a3e] to-[#1a1023] relative overflow-hidden">
              <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-teal-500/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
              <div className="relative z-10 text-center">
                <h1 className="text-5xl font-black tracking-tighter text-white uppercase">WELCOME</h1>
                <p className="mt-4 text-lg text-gray-300">Smarter retirement planning with AI-driven projections.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
