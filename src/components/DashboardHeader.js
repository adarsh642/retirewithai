"use client";
import { usePathname } from 'next/navigation';

const DashboardHeader = ({ isOpen = false, setIsOpen = () => {} }) => {
  const pathname = usePathname();
  
  const getPageName = (path) => {
    switch (path) {
      case '/dashboard':
        return 'Dashboard';
      case '/goals':
        return 'Financial Goals';
      case '/projection':
        return 'Retirement Projection';
      case '/reports':
        return 'Reports & Analytics';
      case '/notifications':
        return 'Notifications';
      case '/profilesetting':
        return 'Profile Settings';
      case '/setupplan':
        return 'Setup Plan';
      case '/taxoptimize':
        return 'Tax Optimization';
      default:
        return 'Dashboard';
    }
  };

  return (
    <header className="flex h-14 sm:h-16 shrink-0 items-center justify-between border-b border-surface bg-background/80 px-3 sm:px-6 backdrop-blur-md" style={{ backgroundColor: 'rgb(18 11 28 / 0.8)' }}>
      {/* Left side: Hamburger + Page Name */}
      <div className="flex items-center gap-4">
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg bg-purple-600/90 p-3 backdrop-blur-md lg:hidden shadow-lg hover:bg-purple-700 transition-colors border border-purple-500/50 min-w-[44px] min-h-[44px] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(124, 58, 237, 0.9)' }}
        >
          <span className="text-white text-xl font-bold leading-none">
            {isOpen ? '✕' : '☰'}
          </span>
        </button>
        
        {/* Current Page Name */}
        <h1 className="text-lg sm:text-xl font-semibold text-white tracking-wide">
          {getPageName(pathname)}
        </h1>
      </div>

      {/* Right side: Notification Icon */}
      <button className="relative rounded-full p-1.5 sm:p-2 transition-colors hover:bg-surface">
        <span className="material-symbols-outlined text-on-surface-variant text-xl sm:text-2xl">notifications</span>
        <span className="absolute right-0.5 top-0.5 sm:right-1 sm:top-1 block h-2 w-2 rounded-full bg-secondary ring-2 ring-background"></span>
      </button>
    </header>
  );
};

export default DashboardHeader;