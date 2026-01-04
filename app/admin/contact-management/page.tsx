"use client";
import React, { useState } from 'react';
import { 
  HiOutlineMail, 
  HiOutlineTrash, 
  HiOutlineSearch, 
  HiOutlineFilter,
  HiOutlineCalendar,
  HiOutlineAnnotation
} from 'react-icons/hi';

interface ContactEnquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: 'Web Search' | 'Referral' | 'Social Media' | 'Other';
  message: string;
  submittedAt: string;
  status: 'New' | 'Read' | 'Responded';
}

const ContactManagement: React.FC = () => {
  const [enquiries, setEnquiries] = useState<ContactEnquiry[]>([
    { 
      id: '1', 
      name: 'Johnathan Archer', 
      email: 'john@enterprise.io', 
      phone: '+1 555-0101', 
      source: 'Web Search', 
      message: 'Looking for enterprise-grade cloud solutions for our deep space exploration fleet.',
      submittedAt: 'Oct 20, 2024, 10:45 AM',
      status: 'New'
    },
    { 
      id: '2', 
      name: "T'Pol Vulcan", 
      email: 'science@highcommand.gov', 
      phone: '+1 555-0102', 
      source: 'Referral', 
      message: 'The logic of your AI integration is impressive. Requesting a technical consultation.',
      submittedAt: 'Oct 19, 2024, 02:15 PM',
      status: 'Read'
    },
    { 
      id: '3', 
      name: 'Charles Tucker', 
      email: 'trip@engine.room', 
      phone: '+1 555-0103', 
      source: 'Social Media', 
      message: 'I heard you guys have the best cloud infrastructure tools. Want to try it out.',
      submittedAt: 'Oct 18, 2024, 09:30 AM',
      status: 'Responded'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const deleteEnquiry = (id: string) => {
    if (window.confirm('Delete this inquiry?')) {
      setEnquiries(prev => prev.filter(e => e.id !== id));
    }
  };

  const filteredEnquiries = enquiries.filter(e => 
    e.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    e.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      <div>
        <h1 className="text-3xl font-black text-[var(--color-16)] tracking-tight">Contact Enquiries</h1>
        <p className="text-[var(--color-20)] font-medium">Manage and respond to messages from your contact form.</p>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-[var(--color-23)] shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1 flex items-center gap-3 bg-[var(--color-24)] border border-[var(--color-23)] px-4 py-2 rounded-xl w-full">
          <HiOutlineSearch className="text-[var(--color-21)]" size={20} />
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            className="bg-transparent border-none outline-none text-sm w-full font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[var(--color-23)] rounded-xl text-xs font-bold hover:bg-[var(--color-24)] transition-all">
            <HiOutlineFilter /> Filter
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-7)] text-white rounded-xl text-xs font-bold shadow-lg shadow-[var(--color-7)]/20">
            Export Leads
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-[var(--color-23)] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[var(--color-24)]/50 border-b border-[var(--color-23)]">
                <th className="px-8 py-5 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Sender</th>
                <th className="px-8 py-5 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Source</th>
                <th className="px-8 py-5 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Message Snippet</th>
                <th className="px-8 py-5 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Submission Date</th>
                <th className="px-8 py-5 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-23)]">
              {filteredEnquiries.map((enq) => (
                <tr key={enq.id} className="hover:bg-[var(--color-14)] transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-[var(--color-16)]">{enq.name}</span>
                      <span className="text-xs text-[var(--color-21)] font-medium">{enq.email}</span>
                      <span className="text-[10px] text-[var(--color-20)] mt-0.5">{enq.phone}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase border
                      ${enq.source === 'Web Search' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                        enq.source === 'Referral' ? 'bg-purple-50 text-purple-600 border-purple-100' :
                        enq.source === 'Social Media' ? 'bg-pink-50 text-pink-600 border-pink-100' :
                        'bg-gray-50 text-gray-600 border-gray-100'}`}>
                      {enq.source}
                    </span>
                  </td>
                  <td className="px-8 py-5 max-w-xs">
                    <p className="text-xs text-[var(--color-19)] line-clamp-2 italic leading-relaxed">"{enq.message}"</p>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-20)]">
                      <HiOutlineCalendar />
                      {enq.submittedAt}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2.5 bg-white border border-[var(--color-23)] rounded-xl text-[var(--color-20)] hover:text-[var(--color-7)] hover:border-[var(--color-11)] transition-all">
                        <HiOutlineAnnotation size={18} />
                      </button>
                      <button 
                        onClick={() => deleteEnquiry(enq.id)}
                        className="p-2.5 bg-white border border-[var(--color-23)] rounded-xl text-[var(--color-20)] hover:text-red-500 hover:border-red-100 transition-all"
                      >
                        <HiOutlineTrash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredEnquiries.length === 0 && (
          <div className="p-20 text-center">
            <HiOutlineMail className="mx-auto text-[var(--color-23)] mb-4" size={64} />
            <h3 className="text-xl font-black text-[var(--color-21)]">No Enquiries Found</h3>
            <p className="text-sm text-[var(--color-20)] font-medium">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactManagement;
