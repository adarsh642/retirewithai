'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function SettingsPage() {
  const [open, setOpen] = useState('profile');

  const toggle = (key) => setOpen((prev) => (prev === key ? '' : key));

  return (
    <>
      {/* Fonts and Material Symbols for this page */}
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
        .glow-purple { text-shadow: 0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7; }
        .glow-teal { text-shadow: 0 0 5px #14b8a6, 0 0 10px #14b8a6; }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { outline: 1px solid #a855f7; box-shadow: 0 0 10px #a855f7, 0 0 20px #a855f7; }
        .btn-hover { transition: all 0.3s ease; }
        .btn-hover:hover { box-shadow: 0 0 5px #14b8a6, 0 0 10px #14b8a6; }
        /* Toggle switch */
        .toggle-switch { position: relative; display: inline-block; width: 44px; height: 24px; }
        .toggle-switch input { opacity: 0; width: 0; height: 0; }
        .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #374151; transition: .4s; border-radius: 34px; }
        .slider:before { position: absolute; content: ''; height: 16px; width: 16px; left: 4px; bottom: 4px; background-color: white; transition: .4s; border-radius: 50%; }
        input:checked + .slider { background-color: #14b8a6; }
        input:checked + .slider:before { transform: translateX(20px); }
        /* Accordion */
        .accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.5s cubic-bezier(0, 1, 0, 1); }
        .accordion-item.open .accordion-content { max-height: 1000px; transition: max-height 1s ease-in-out; }
        .accordion-item .accordion-icon { transform: rotate(0deg); transition: transform 0.3s ease-in-out; }
        .accordion-item.open .accordion-icon { transform: rotate(180deg); }
      `}</style>

      <div className="flex min-h-screen" style={{ backgroundColor: '#100819', color: 'white', fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
        {/* Sidebar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <header className="mb-8">
            <h2 className="text-white text-4xl font-bold tracking-tight">Settings</h2>
            <p className="text-gray-400 mt-2">Manage your profile and platform preferences.</p>
          </header>

          <div className="space-y-6">
            {/* Profile Photo */}
            <div className={`accordion-item ${open === 'profile' ? 'open' : ''} bg-[#1a1023]/80 backdrop-blur-sm border border-purple-800/50 rounded-2xl card-hover`}>
              <button onClick={() => toggle('profile')} className="w-full flex justify-between items-center p-6 text-left">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-teal-400">account_circle</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">Profile Photo</h3>
                    <p className="text-gray-400 text-sm">Upload and manage your profile picture.</p>
                  </div>
                </div>
                <span className="material-symbols-outlined accordion-icon text-gray-400">expand_more</span>
              </button>
              <div className="accordion-content">
                <div className="px-6 pb-6 pt-2">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative group">
                      <Image className="w-32 h-32 rounded-full border-4 border-purple-500/50 object-cover" alt="Sophia's avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLOy8FcFIcw4raBkk27NJZgl6yawk3mYgDFcd--b9dT4GESh590ZyrSJr87lgYkBFXtRHdTvW7LZQ7eLm3QaYx_T8eDSduqDYr9jsNTVxTMIEqx5ZWMTQvoQJXIZ1mxvTtsmuaRWfy2WvnJjY8po4qIc7NDvAv_5KF9DAHBHs6edPHcwQDSACcZHqV9Hp2ldJ9Z4x1_wJ1vq1oFlo9xNx2rxyBzdPtz56P0rWmjnP5zI5xEPYRbzBI_F59o0xWtlozcqerZwbU_qE" width={128} height={128} />
                      <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                        <span className="material-symbols-outlined text-5xl text-white glow-teal">add_a_photo</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-4 text-center md:text-left">
                      <p className="text-gray-300">For best results, upload a square image of at least 200x200 pixels.</p>
                      <div className="flex justify-center md:justify-start gap-4">
                        <button className="text-sm text-white hover:text-teal-300 font-medium btn-hover rounded-lg px-4 py-2 bg-teal-500/80 border border-teal-500/30">
                          <span className="material-symbols-outlined text-base align-middle mr-2">upload</span>Upload New Photo
                        </button>
                        <button className="text-sm text-gray-400 hover:text-white font-medium btn-hover rounded-lg px-4 py-2 bg-gray-700/50 border border-gray-600/30">
                          <span className="material-symbols-outlined text-base align-middle mr-2">delete</span>Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Subscription */}
            <div className={`accordion-item ${open === 'subscription' ? 'open' : ''} bg-[#1a1023]/80 backdrop-blur-sm border border-purple-800/50 rounded-2xl card-hover`}>
              <button onClick={() => toggle('subscription')} className="w-full flex justify-between items-center p-6 text-left">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-teal-400">workspace_premium</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">Premium Subscription</h3>
                    <p className="text-gray-400 text-sm">Manage your premium membership and features.</p>
                  </div>
                </div>
                <span className="material-symbols-outlined accordion-icon text-gray-400">expand_more</span>
              </button>
              <div className="accordion-content">
                <div className="px-6 pb-6 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-800/50 flex flex-col card-hover">
                      <div className="flex-grow">
                        <h4 className="text-xl font-bold text-white mb-2">Standard</h4>
                        <p className="text-gray-400 text-sm mb-4">Core planning tools and AI insights.</p>
                        <p className="text-3xl font-bold text-white mb-4">$15<span className="text-base font-normal text-gray-400">/month</span></p>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-teal-400 text-base">check_circle</span>AI-Powered Planning</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-teal-400 text-base">check_circle</span>Basic Investment Tracking</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-gray-500 text-base">cancel</span>Advanced Scenarios</li>
                        </ul>
                      </div>
                      <button className="w-full mt-6 text-sm text-white font-medium btn-hover rounded-lg px-4 py-2 bg-teal-500/80 border border-teal-500/30">Your Current Plan</button>
                    </div>
                    <div className="bg-gradient-to-br from-[#2a1a38] to-[#1a1023] rounded-xl p-6 border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] flex flex-col">
                      <div className="flex-grow">
                        <h4 className="text-xl font-bold text-purple-400 glow-purple mb-2">Pro</h4>
                        <p className="text-gray-300 text-sm mb-4">For the serious planner seeking advanced tools.</p>
                        <p className="text-3xl font-bold text-white mb-4">$25<span className="text-base font-normal text-gray-400">/month</span></p>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-teal-400 text-base">check_circle</span>All Standard Features</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-teal-400 text-base">check_circle</span>Advanced Scenario Modeling</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-teal-400 text-base">check_circle</span>Tax Optimization AI</li>
                        </ul>
                      </div>
                      <button className="w-full mt-6 text-sm text-white font-bold btn-hover rounded-lg px-4 py-2 bg-purple-600 hover:bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]">Upgrade to Pro</button>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-800/50 flex flex-col card-hover">
                      <div className="flex-grow">
                        <h4 className="text-xl font-bold text-white mb-2">Advisor</h4>
                        <p className="text-gray-400 text-sm mb-4">Dedicated support from a human advisor.</p>
                        <p className="text-3xl font-bold text-white mb-4">$50<span className="text-base font-normal text-gray-400">/month</span></p>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-teal-400 text-base">check_circle</span>All Pro Features</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-teal-400 text-base">check_circle</span>Quarterly Advisor Check-ins</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined text-teal-400 text-base">check_circle</span>Priority Support</li>
                        </ul>
                      </div>
                      <button className="w-full mt-6 text-sm text-white font-medium btn-hover rounded-lg px-4 py-2 bg-gray-700 hover:bg-gray-600 border border-gray-600/30">Contact Us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Personalization */}
            <div className={`accordion-item ${open === 'dashboard' ? 'open' : ''} bg-[#1a1023]/80 backdrop-blur-sm border border-purple-800/50 rounded-2xl card-hover`}>
              <button onClick={() => toggle('dashboard')} className="w-full flex justify-between items-center p-6 text-left">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-teal-400">palette</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">Dashboard Personalization</h3>
                    <p className="text-gray-400 text-sm">Customize your dashboard layout and widgets.</p>
                  </div>
                </div>
                <span className="material-symbols-outlined accordion-icon text-gray-400">expand_more</span>
              </button>
              <div className="accordion-content">
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-300 mb-4">Drag and drop to reorder your widgets.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-800/50 p-4 rounded-lg flex items-center justify-between cursor-move"><p>Retirement Goal</p><span className="material-symbols-outlined text-gray-500">drag_indicator</span></div>
                    <div className="bg-gray-800/50 p-4 rounded-lg flex items-center justify-between cursor-move"><p>Net Worth</p><span className="material-symbols-outlined text-gray-500">drag_indicator</span></div>
                    <div className="bg-gray-800/50 p-4 rounded-lg flex items-center justify-between cursor-move"><p>Investment Performance</p><span className="material-symbols-outlined text-gray-500">drag_indicator</span></div>
                  </div>
                  <h4 className="font-semibold mb-4 text-gray-300">Data Display</h4>
                  <div className="flex items-center gap-4">
                    <p className="text-gray-400">Show chart values:</p>
                    <label className="toggle-switch"><input defaultChecked type="checkbox" /><span className="slider"></span></label>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Hub */}
            <div className={`accordion-item ${open === 'notifications' ? 'open' : ''} bg-[#1a1023]/80 backdrop-blur-sm border border-purple-800/50 rounded-2xl card-hover`}>
              <button onClick={() => toggle('notifications')} className="w-full flex justify-between items-center p-6 text-left">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-teal-400">notifications_active</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">Notification Hub</h3>
                    <p className="text-gray-400 text-sm">Manage how we contact you.</p>
                  </div>
                </div>
                <span className="material-symbols-outlined accordion-icon text-gray-400">expand_more</span>
              </button>
              <div className="accordion-content">
                <div className="px-6 pb-6 pt-2 space-y-5">
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
                    <div><p className="font-medium">Email Notifications</p><p className="text-sm text-gray-400">For account updates and newsletters.</p></div>
                    <label className="toggle-switch"><input defaultChecked type="checkbox" /><span className="slider"></span></label>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
                    <div><p className="font-medium">SMS Alerts</p><p className="text-sm text-gray-400">For security alerts and major market changes.</p></div>
                    <label className="toggle-switch"><input type="checkbox" /><span className="slider"></span></label>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
                    <div><p className="font-medium">In-App Notifications</p><p className="text-sm text-gray-400">For platform updates and insights.</p></div>
                    <label className="toggle-switch"><input defaultChecked type="checkbox" /><span className="slider"></span></label>
                  </div>
                  <div className="pt-2">
                    <p className="text-teal-400 text-sm flex items-center gap-2"><span className="material-symbols-outlined text-base">auto_awesome</span> Smart Suggestion: We recommend enabling SMS alerts for enhanced security.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data & Privacy */}
            <div className={`accordion-item ${open === 'privacy' ? 'open' : ''} bg-[#1a1023]/80 backdrop-blur-sm border border-purple-800/50 rounded-2xl card-hover`}>
              <button onClick={() => toggle('privacy')} className="w-full flex justify-between items-center p-6 text-left">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-teal-400">privacy_tip</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">Data & Privacy Control Center</h3>
                    <p className="text-gray-400 text-sm">Control how your data is used.</p>
                  </div>
                </div>
                <span className="material-symbols-outlined accordion-icon text-gray-400">expand_more</span>
              </button>
              <div className="accordion-content">
                <div className="px-6 pb-6 pt-2 grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-300">Data Usage</h4>
                    <p className="text-gray-400 text-sm">Your data is used to personalize your retirement plan and provide AI-driven insights. We never sell your data.</p>
                    <button className="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 font-medium btn-hover rounded-lg px-3 py-1 bg-teal-500/10 border border-teal-500/30">
                      <span className="material-symbols-outlined text-base">download</span>
                      Export My Data
                    </button>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-300">Privacy Settings</h4>
                    <div className="flex items-center justify-between">
                      <p>Share anonymized data for research</p>
                      <label className="toggle-switch"><input defaultChecked type="checkbox" /><span className="slider"></span></label>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Allow targeted financial offers</p>
                      <label className="toggle-switch"><input type="checkbox" /><span className="slider"></span></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Authentication */}
            <div className={`accordion-item ${open === 'security' ? 'open' : ''} bg-[#1a1023]/80 backdrop-blur-sm border border-purple-800/50 rounded-2xl card-hover`}>
              <button onClick={() => toggle('security')} className="w-full flex justify-between items-center p-6 text-left">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-teal-400">security</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">Security & Authentication</h3>
                    <p className="text-gray-400 text-sm">Protect your account.</p>
                  </div>
                </div>
                <span className="material-symbols-outlined accordion-icon text-gray-400">expand_more</span>
              </button>
              <div className="accordion-content">
                <div className="px-6 pb-6 pt-2 space-y-6">
                  <div className="flex justify-between items-center">
                    <p>Password</p>
                    <button className="text-sm text-teal-400 hover:text-teal-300 font-medium btn-hover rounded-lg px-4 py-2 bg-teal-500/10 border border-teal-500/30">Change Password</button>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Two-Factor Authentication (2FA)</p>
                    <button className="text-sm text-teal-400 hover:text-teal-300 font-medium btn-hover rounded-lg px-4 py-2 bg-teal-500/10 border border-teal-500/30">Setup 2FA</button>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-300">Recent Login Activity</h4>
                    <p className="text-gray-400 text-sm">Chrome on macOS - San Francisco, CA - <span className="text-teal-400">Active Now</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Preferences */}
            <div className={`accordion-item ${open === 'ai' ? 'open' : ''} bg-[#1a1023]/80 backdrop-blur-sm border border-purple-800/50 rounded-2xl card-hover`}>
              <button onClick={() => toggle('ai')} className="w-full flex justify-between items-center p-6 text-left">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-teal-400">psychology</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">AI Preferences</h3>
                    <p className="text-gray-400 text-sm">Fine-tune your AI experience.</p>
                  </div>
                </div>
                <span className="material-symbols-outlined accordion-icon text-gray-400">expand_more</span>
              </button>
              <div className="accordion-content">
                <div className="px-6 pb-6 pt-2 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="ai-level">Level of AI Intervention</label>
                    <input className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-400" id="ai-level" min="1" max="3" type="range" defaultValue="2" />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>Suggestions Only</span>
                      <span>Balanced</span>
                      <span>Automated Actions</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Provide feedback on AI suggestions</p>
                    <label className="toggle-switch"><input defaultChecked type="checkbox" /><span className="slider"></span></label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-12 text-center">
            <div className="inline-block bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-2">
              <p className="text-teal-300 text-sm font-normal leading-normal glow-teal flex items-center gap-2">
                <span className="material-symbols-outlined text-base">verified_user</span>
                Your data is secure, encrypted, and never shared.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
