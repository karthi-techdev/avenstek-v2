
import React from 'react';
import { HiMenuAlt2, HiOutlineBell, HiOutlineSearch, HiOutlineLogout } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    router.replace('/admin');
  };

  return (
    <header className="h-20 bg-[var(--color-2)] border-b border-[var(--color-23)] px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-lg hover:bg-[var(--color-24)] text-[var(--color-19)]"
        >
          <HiMenuAlt2 size={24} />
        </button>
        <div className="hidden md:flex items-center bg-[var(--color-24)] border border-[var(--color-23)] rounded-xl px-4 py-2 w-80">
          <HiOutlineSearch className="text-[var(--color-20)]" size={20} />
          <input
            type="text"
            placeholder="Search dashboard..."
            className="bg-transparent border-none outline-none ml-2 text-sm w-full text-[var(--color-18)]"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-5">
        <button className="p-2 relative rounded-xl hover:bg-[var(--color-24)] text-[var(--color-19)] transition-colors">
          <HiOutlineBell size={24} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-[var(--color-27)] rounded-full border-2 border-[var(--color-2)]"></span>
        </button>

        <button
          onClick={handleLogout}
          className="p-2 relative rounded-xl hover:bg-red-50 text-red-500 transition-colors group"
          title="Logout"
        >
          <HiOutlineLogout size={24} />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Logout Session</span>
        </button>

        <div className="h-8 w-[1px] bg-[var(--color-23)] mx-1 hidden md:block"></div>

        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-[var(--color-16)]">Admin</p>
            <p className="text-xs text-[var(--color-20)]">Super Administrator</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[var(--color-7)] flex items-center justify-center text-white font-bold">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

