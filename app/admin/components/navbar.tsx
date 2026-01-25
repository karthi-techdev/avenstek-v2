import React from 'react';
import { HiMenuAlt2, HiOutlineBell, HiOutlineSearch, HiOutlineLogout, HiX, HiOutlineCheck } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import { API_BASE_URL } from '@/lib/api-config';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const router = useRouter();
  const [notifications, setNotifications] = React.useState<any[]>([]);
  const [showNotifications, setShowNotifications] = React.useState(false);

  /* SEARCH STATE */
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<any[]>([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = React.useState(false);
  const searchRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const res = await fetch(`${API_BASE_URL}/api/content/notifications`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        if (Array.isArray(data)) setNotifications(data);
      } catch (err) {
        console.error("Failed to load notifications");
      }
    };
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchResults([]);
        setSearchQuery('');
        // Optional: Close mobile search on outside click if empty
        if (window.innerWidth < 768 && searchQuery === '') setIsMobileSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchQuery]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE_URL}/api/content/search?q=${query}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {}
      });
      const data = await res.json();
      setSearchResults(data);
    } catch (err) {
      console.error("Search failed");
    } finally {
      setIsSearching(false);
    }
  };

  const handleResultClick = (url: string) => {
    router.push(url);
    setSearchQuery('');
    setSearchResults([]);
    setIsMobileSearchOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    router.replace('/admin');
  };

  const handleNotificationClick = async (id: string, type: string) => {
    await markAsRead(id, type);
    setShowNotifications(false);
    if (type === 'Enquiry') {
      router.push('/admin/contact-management');
    } else if (type === 'Application') {
      router.push('/admin/careers-management');
    }
  };

  const markAsRead = async (id: string, type: string) => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`${API_BASE_URL}/api/content/notifications/read`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ id, type })
      });
      setNotifications(prev => prev.filter(n => n.id !== id));
    } catch (err) {
      console.error("Failed to mark as read");
    }
  };

  const markAllAsRead = async () => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`${API_BASE_URL}/api/content/notifications/read-all`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotifications([]);
    } catch (err) {
      console.error("Failed to mark all as read");
    }
  };

  return (
    <header className="h-20 bg-[var(--color-2)] border-b border-[var(--color-23)] px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
        {/* Menu & Mobile Search Trigger */}
        <div className={`flex items-center gap-2 ${isMobileSearchOpen ? 'hidden' : 'flex'}`}>
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--color-24)] text-[var(--color-19)]"
          >
            <HiMenuAlt2 size={24} />
          </button>
          <button
            onClick={() => setIsMobileSearchOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--color-24)] text-[var(--color-19)]"
          >
            <HiOutlineSearch size={24} />
          </button>
        </div>

        {/* Search Bar Container */}
        <div
          ref={searchRef}
          className={`
            items-center bg-[var(--color-24)] border border-[var(--color-23)] rounded-xl px-4 py-2 
            transition-all duration-200
            ${isMobileSearchOpen
              ? 'absolute left-2 right-2 top-3 z-50 flex shadow-xl w-auto bg-white'
              : 'hidden md:flex md:w-80'
            }
          `}
        >
          <HiOutlineSearch className="text-[var(--color-20)]" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search dashboard..."
            className="bg-transparent border-none outline-none ml-2 text-sm w-full text-[var(--color-18)] focus:ring-0"
            autoFocus={isMobileSearchOpen}
          />
          {isMobileSearchOpen && (
            <button onClick={() => { setIsMobileSearchOpen(false); setSearchQuery(''); }} className="ml-2 text-[var(--color-20)] p-1">
              <HiX size={20} />
            </button>
          )}

          {/* Search Dropdown */}
          {(searchQuery.length > 0 && (isMobileSearchOpen ? true : searchQuery.length > 1)) && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white border border-[var(--color-23)] rounded-xl shadow-xl overflow-hidden z-50 animate-in slide-in-from-top-2">
              {isSearching ? (
                <div className="p-4 text-center text-xs text-[var(--color-21)]">Searching...</div>
              ) : searchResults.length > 0 ? (
                <div className="max-h-[60vh] overflow-y-auto">
                  <div className="px-4 py-2 bg-[var(--color-24)] text-[10px] font-black uppercase text-[var(--color-21)] border-b border-[var(--color-23)]">Results</div>
                  {searchResults.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleResultClick(result.url)}
                      className="w-full text-left px-4 py-3 hover:bg-[var(--color-25)] border-b border-[var(--color-23)] last:border-0 transition-colors flex items-center gap-3"
                    >
                      <span className="text-[10px] font-bold bg-[var(--color-13)] text-[var(--color-7)] px-1.5 py-0.5 rounded">{result.type}</span>
                      <span className="text-sm text-[var(--color-16)] font-medium truncate">{result.title}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-xs text-[var(--color-21)]">No results found.</div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className={`flex items-center gap-2 md:gap-5 ${isMobileSearchOpen ? 'hidden md:flex' : 'flex'}`}>
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 relative rounded-xl hover:bg-[var(--color-24)] text-[var(--color-19)] transition-colors"
          >
            <HiOutlineBell size={24} />
            {notifications.length > 0 && (
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-[var(--color-27)] rounded-full border-2 border-[var(--color-2)]"></span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 md:w-96 bg-white border border-[var(--color-23)] rounded-[1.5rem] shadow-2xl overflow-hidden z-50 animate-in slide-in-from-top-2">
              <div className="p-5 border-b border-[var(--color-23)] flex justify-between items-center bg-white">
                <div>
                  <h4 className="font-black text-[var(--color-16)] text-sm tracking-tight">Recent Notifications</h4>
                  <p className="text-[10px] text-[var(--color-21)] font-bold uppercase tracking-wider">Stay updated with site activity</p>
                </div>
                {notifications.length > 0 && (
                  <button 
                    onClick={markAllAsRead}
                    className="text-[10px] font-black text-[var(--color-7)] hover:underline uppercase tracking-tighter"
                  >
                    Clear All
                  </button>
                )}
              </div>
              
              <div className="max-h-[380px] overflow-y-auto">
                {notifications.length > 0 ? (
                  <div className="divide-y divide-[var(--color-24)]">
                    {notifications.map((notif, idx) => (
                      <div
                        key={idx}
                        className="group relative p-4 hover:bg-[var(--color-25)] transition-all cursor-pointer flex gap-4"
                        onClick={() => handleNotificationClick(notif.id, notif.type)}
                      >
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${notif.type === 'Enquiry' ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
                        <div className="flex-1 space-y-1">
                          <div className="flex justify-between items-center">
                            <span className={`text-[9px] font-black uppercase tracking-widest ${notif.type === 'Enquiry' ? 'text-blue-600' : 'text-purple-600'}`}>
                              {notif.type}
                            </span>
                            <span className="text-[9px] font-bold text-[var(--color-21)]">{new Date(notif.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                          </div>
                          <p className="text-[12px] font-semibold text-[var(--color-16)] leading-snug">{notif.message}</p>
                          <p className="text-[10px] text-[var(--color-21)] font-medium">{new Date(notif.time).toLocaleDateString()}</p>
                        </div>
                        <button 
                          onClick={(e) => { e.stopPropagation(); markAsRead(notif.id, notif.type); }}
                          className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-white text-[var(--color-21)] hover:text-[var(--color-7)] transition-all flex items-center justify-center shrink-0"
                        >
                          <HiOutlineCheck size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-16 flex flex-col items-center justify-center space-y-3 opacity-40">
                    <HiOutlineBell size={40} className="text-[var(--color-23)]" />
                    <p className="text-xs font-bold text-[var(--color-21)] uppercase tracking-widest">Inbox is clear</p>
                  </div>
                )}
              </div>
              
              {notifications.length > 0 && (
                <div className="p-4 border-t border-[var(--color-23)] bg-[var(--color-24)]/50">
                  <button 
                     onClick={() => { setShowNotifications(false); router.push('/admin/contact-management'); }}
                     className="w-full py-2 bg-white border border-[var(--color-23)] rounded-xl text-[10px] font-black uppercase text-[var(--color-18)] hover:bg-[var(--color-25)] transition-all shadow-sm border-[var(--color-23)]"
                  >
                    View All Activity
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

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
          <div className="w-10 h-10 rounded-xl bg-[var(--color-7)] flex items-center justify-center text-white font-bold hidden xs:flex">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
