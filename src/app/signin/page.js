
export default function Home() {
  return (
    <div className="bg-[#121212] min-h-screen flex items-center justify-center font-sans">
      <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1a1023] to-[#121212] p-4 font-sans text-white w-full">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-prism.png')] opacity-5"></div>
        <div className="relative z-10 w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl bg-[#1e1e1e]/50 backdrop-blur-sm border border-white/10 shadow-2xl shadow-purple-500/10">
            <div className="hidden md:flex flex-col justify-center items-center p-12 bg-gradient-to-br from-[#2d1a3e] to-[#1a1023] relative overflow-hidden">
              <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-teal-500/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
              <div className="relative z-10 text-center">
                <h1 className="text-5xl font-black tracking-tighter text-white uppercase">WELCOME</h1>
                <p className="mt-4 text-lg text-gray-300">Smarter retirement planning with AI-driven projections.</p>
              </div>
            </div>
            <div className="p-8 md:p-12 bg-[#1e1e1e]/80">
              <h2 className="text-3xl font-bold text-white mb-6">Sign In</h2>
              <form className="space-y-6">
                <div>
                  <label className="sr-only" htmlFor="username">Username/Email</label>
                  <div className="relative">
                    <input className="form-input w-full rounded-lg border-2 border-transparent bg-[#2a2a2a]/50 py-3 pl-12 pr-4 text-white placeholder-gray-400 transition-all duration-300 focus:border-purple-500 focus:bg-[#2f2f2f] focus:ring-0" id="username" placeholder="Username or Email" type="text" />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="password">Password</label>
                  <div className="relative">
                    <input className="form-input w-full rounded-lg border-2 border-transparent bg-[#2a2a2a]/50 py-3 pl-12 pr-12 text-white placeholder-gray-400 transition-all duration-300 focus:border-purple-500 focus:bg-[#2f2f2f] focus:ring-0" id="password" placeholder="Password" type="password" />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white" type="button">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input className="h-5 w-5 rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-purple-500 focus:ring-offset-gray-800" id="remember-me" style={{ backgroundImage: 'var(--checkbox-tick-svg)' }} type="checkbox" />
                    <label className="ml-2 block text-sm text-gray-300" htmlFor="remember-me"> Remember me </label>
                  </div>
                  <a className="text-sm text-purple-400 hover:text-purple-300 hover:underline" href="#"> Forgot password? </a>
                </div>
                <div>
                  <button className="btn-glow w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-base font-bold text-white shadow-lg transition hover:shadow-purple-500/50" type="submit">
                    Sign In
                  </button>
                </div>
                <div>
                  <button className="w-full rounded-lg border-2 border-gray-600 bg-transparent py-3 text-base font-bold text-white transition hover:bg-gray-700 hover:border-gray-500 flex items-center justify-center gap-2" type="button">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                      <path d="M1 1h22v22H1z" fill="none"></path>
                    </svg>
                    <span>Sign in with Google</span>
                  </button>
                </div>
              </form>
              <p className="mt-8 text-center text-sm text-gray-400">
                Don’t have an account?
                <a className="font-medium text-purple-400 hover:text-purple-300 hover:underline" href="signup">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
