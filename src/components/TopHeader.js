"use client";
import { usePathname } from 'next/navigation';

const TopHeader = () => {
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
    <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-surface lg:hidden shadow-lg" style={{ backgroundColor: 'rgba(18, 11, 28, 0.95)' }}>
      <div className="flex items-center justify-center px-4 py-4">
        <h1 className="text-lg font-semibold text-white tracking-wide">
          {getPageName(pathname)}
        </h1>
      </div>
    </div>
  );
};

export default TopHeader;