import React, { useState, useMemo, Suspense } from 'react';
import { HiOutlineSearch, HiOutlineCube } from 'react-icons/hi';
import { useModal } from '@/app/components/ConfirmModal';

// Import all icon sets
import * as HiIcons from 'react-icons/hi';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as TbIcons from 'react-icons/tb';
import * as TiIcons from 'react-icons/ti';
import * as VscIcons from 'react-icons/vsc';
import * as CgIcons from 'react-icons/cg';
import * as ImIcons from 'react-icons/im';

// Merge all icons into a single object
const AllIcons: Record<string, any> = {
    ...HiIcons,
    ...FaIcons,
    ...MdIcons,
    ...BsIcons,
    ...BiIcons,
    ...AiIcons,
    ...FiIcons,
    ...IoIcons,
    ...RiIcons,
    ...SiIcons,
    ...TbIcons,
    ...TiIcons,
    ...VscIcons,
    ...CgIcons,
    ...ImIcons,
};

export const IconRenderer = ({ name, size = 20, className = "" }: { name: string; size?: number; className?: string }) => {
    const IconComponent = AllIcons[name] || HiOutlineCube;
    return <IconComponent size={size} className={className} />;
};

export const IconPickerModal = ({ isOpen, onClose, onSelect }: { isOpen: boolean; onClose: () => void; onSelect: (name: string) => void }) => {
    const { showConfirm } = useModal();
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const ICONS_PER_PAGE = 100;

    // Filter icons based on search
    const filteredIconNames = useMemo(() => {
        if (!search) return []; // Show specific popular ones or none initially to save perf? Or let's show HiIcons by default if empty?
        // Actually showing all 20k icons at once is bad.
        // Let's filter.

        return Object.keys(AllIcons).filter(name =>
            name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    // If search is empty, maybe just show HiIcons to start with, or slice a few hundreds?
    // Let's rely on pagination/slicing.
    const displayIcons = useMemo(() => {
        if (!search) {
            // By default show HiIcons + FaIcons as initial view (approx 1500 icons)
            // or just slice the first 200 of AllIcons?
            // Accessing keys of AllIcons is random order.
            // Let's just return first 200 keys if no search.
            return Object.keys(AllIcons).slice(0, 200);
        }
        return filteredIconNames.slice(0, (page * ICONS_PER_PAGE));
    }, [search, filteredIconNames, page]);

    const handleLoadMore = () => {
        setPage(prev => prev + 1);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl overflow-hidden border border-[var(--color-23)]">
                <div className="p-6 border-b border-[var(--color-23)] flex items-center justify-between bg-[var(--color-25)]">
                    <div>
                        <h3 className="text-xl font-bold text-[var(--color-16)]">Select Icon</h3>
                        <p className="text-xs text-[var(--color-21)] font-medium">
                            {search ? `Found ${filteredIconNames.length} matching icons` : `Browse 20,000+ icons`}
                        </p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-[var(--color-24)] rounded-xl transition-colors text-[var(--color-21)]">✕</button>
                </div>

                <div className="p-6 border-b border-[var(--color-23)] bg-white">
                    <div className="relative">
                        <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-21)]" size={18} />
                        <input
                            autoFocus
                            value={search}
                            onChange={e => { setSearch(e.target.value); setPage(1); }}
                            placeholder="Search icons (e.g. facebook, arrow, star)..."
                            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm outline-none focus:ring-2 focus:ring-[var(--color-7)]/20 transition-all font-medium"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 scrollbar-thin" onScroll={(e) => {
                    const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight;
                    // Auto load more if near bottom? Or just add a load more button?
                    // Let's use a button for simplicity and performance control
                }}>
                    <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-4">
                        {displayIcons.map(name => {
                            const Icon = AllIcons[name];
                            return (
                                <button
                                    key={name}
                                    onClick={() => { onSelect(name); onClose(); }}
                                    className="flex flex-col items-center justify-center p-3 rounded-2xl border border-transparent hover:border-[var(--color-7)] hover:bg-[var(--color-13)] group transition-all"
                                    title={name}
                                >
                                    <Icon size={24} className="text-[var(--color-20)] group-hover:text-[var(--color-7)] group-hover:scale-110 transition-all" />
                                    <span className="text-[9px] mt-2 text-[var(--color-21)] font-bold truncate w-full text-center group-hover:text-[var(--color-7)] uppercase tracking-tighter">
                                        {name}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {displayIcons.length === 0 && search && (
                        <div className="py-12 text-center text-[var(--color-21)] italic font-bold">No matching icons found...</div>
                    )}

                    {search && filteredIconNames.length > displayIcons.length && (
                        <div className="py-4 text-center">
                            <button
                                onClick={handleLoadMore}
                                className="text-xs font-bold text-[var(--color-7)] bg-[var(--color-13)] px-4 py-2 rounded-xl hover:bg-[var(--color-12)] transition-colors"
                            >
                                Load more icons
                            </button>
                        </div>
                    )}

                    {!search && (
                        <div className="py-4 text-center">
                            <p className="text-[10px] text-[var(--color-21)] mb-2">Type above to search across FontAwesome, Material, Bootstrap, and more.</p>
                        </div>
                    )}
                </div>

                {/* Manual Input Section */}
                <div className="p-4 border-t border-[var(--color-23)] bg-[var(--color-25)] flex flex-col gap-2">
                    <label className="text-[10px] font-black text-[var(--color-21)] uppercase tracking-widest">Can't find it?</label>
                    <div className="flex gap-2">
                        <input
                            placeholder="Enter exact icon name (e.g. FaFacebook)"
                            className="flex-1 px-4 py-2 rounded-xl text-xs font-bold border border-[var(--color-23)] outline-none focus:border-[var(--color-7)]"
                            id="manual-icon-input"
                        />
                        <button
                            onClick={async () => {
                                const manualName = (document.getElementById('manual-icon-input') as HTMLInputElement).value;
                                if (manualName && AllIcons[manualName]) {
                                    onSelect(manualName);
                                    onClose();
                                } else if (manualName) {
                                    const confirmed = await showConfirm("Invalid Icon", "Icon name not found in standard set. This may not render correctly. Add anyway?");
                                    if (confirmed) {
                                        onSelect(manualName);
                                        onClose();
                                    }
                                }
                            }}
                            className="bg-[var(--color-16)] text-white px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap"
                        >
                            Add Custom
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
