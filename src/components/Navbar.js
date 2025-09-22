"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const linkBase = "flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-surface hover:text-white";
  const isActive = (href) => pathname === href;

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 rounded-lg bg-surface/90 p-2 backdrop-blur-md lg:hidden"
        style={{ backgroundColor: 'rgba(30, 18, 45, 0.9)' }}
      >
        <span className="material-symbols-outlined text-white">
          {isOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 z-40 flex h-screen w-64 flex-col border-r border-solid border-surface bg-background/95 p-6 backdrop-blur-md ring-1 ring-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: 'rgba(18, 11, 28, 0.95)' }}
      >
      <div className="flex items-center gap-3 text-white mb-8">
        <svg className="text-primary" fill="none" height="32" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4ZM24 8C32.82 8 40 15.18 40 24C40 28.53 37.8 32.61 34.66 35.59L12.41 13.34C15.39 10.2 19.47 8 24 8ZM13.34 12.41L35.59 34.66C32.61 37.8 28.53 40 24 40C15.18 40 8 32.82 8 24C8 19.47 10.2 15.39 13.34 12.41Z" fill="currentColor"></path>
        </svg>
        <h1 className="text-xl font-bold tracking-tight">RetirewithAi</h1>
      </div>
      <div className="relative mb-6">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
        <input className="w-full rounded-lg border border-surface bg-surface py-2 pl-10 pr-4 text-sm text-white placeholder-on-surface-variant focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search" type="text" />
      </div>
  <nav className="flex flex-1 flex-col gap-1 text-sm font-medium text-on-surface-variant">
        <Link className={`${linkBase} ${isActive('/dashboard') ? 'bg-surface text-white border border-white/10' : ''}`} href="/dashboard" onClick={() => setIsOpen(false)}>
          <span className="material-symbols-outlined">dashboard</span>
          Dashboard
        </Link>
        <Link className={`${linkBase} ${isActive('/goals') ? 'bg-surface text-white border border-white/10' : ''}`} href="/goals" onClick={() => setIsOpen(false)}>
          <span className="material-symbols-outlined">flag</span>
          Goals
        </Link>
        <Link className={`${linkBase} ${isActive('/setupplan') ? 'bg-surface text-white border border-white/10' : ''}`} href="/setupplan" onClick={() => setIsOpen(false)}>
          <span className="material-symbols-outlined">playlist_add_check</span>
          Setup Plan
        </Link>
       
        <Link className={`${linkBase} ${isActive('/projection') ? 'bg-surface text-white border border-white/10' : ''}`} href="/projection" onClick={() => setIsOpen(false)}>
          <span className="material-symbols-outlined">trending_up</span>
          Projection
        </Link>
        <Link className={`${linkBase} ${isActive('/reports') ? 'bg-surface text-white border border-white/10' : ''}`} href="/reports" onClick={() => setIsOpen(false)}>
          <span className="material-symbols-outlined">insights</span>
          Reports
        </Link>
        <Link className={`${linkBase} ${isActive('/taxoptimize') ? 'bg-surface text-white border border-white/10' : ''}`} href="/taxoptimize" onClick={() => setIsOpen(false)}>
          <span className="material-symbols-outlined">percent</span>
          Tax Optimization
        </Link>
         <Link className={`${linkBase} ${isActive('/notifications') ? 'bg-surface text-white border border-white/10' : ''}`} href="/notifications" onClick={() => setIsOpen(false)}>
          <span className="material-symbols-outlined">notifications</span>
          Notifications
        </Link>
        <Link className={`${linkBase} ${isActive('/profilesetting') ? 'bg-surface text-white border border-white/10' : ''}`} href="/profilesetting" onClick={() => setIsOpen(false)}>
          <span className="material-symbols-outlined">settings</span>
          Profile Settings
        </Link>
      </nav>
      <div className="mt-auto">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border-2 border-primary bg-cover bg-center glowing-shadow" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvwWcrZHHusA8rJ0JOjJnz7l5n0H235we0Y8Y3Zpz8jlvfwJZLX5D8-mOW_jTCr4y6Blth9QDnTQP9Uk3xsMOoh0xBr-TOhLp7g6nyMQgV9pLUbeXnTGiYftszumhWRQ34CbxGkODkrt7oMjxvB39b5GzMR86kHGsVZqYtsYRkz0ypLH8bqqqtvk9xMu7Ny5rNYdQLEd2C_dXK0B4LUY14klFHGD14LykHEJ696DFVHStHJgYqVrVU18Vg_ygfc1qmbBcll2JppRo")' }}></div>
          <div className="flex items-center w-full justify-between">
            <div>
              <p className="font-medium text-white">bachhiiii</p>
              <Link href="/signin" className="text-gray-400 text-sm hover:text-primary transition-colors">Log Out</Link>
            </div>
            <Link href="/signin" className="text-gray-400 hover:text-primary transition-colors" aria-label="Log out">
              <span className="material-symbols-outlined">logout</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
    </>
  );
};

export default Navbar;