import React, { useState, useEffect } from 'react';
import { BookingInquiry, InquiryStatus } from '../types';
import { Check, Trash2, Search, Filter, Shield, Calendar, Users, Eye, X, AlertCircle } from 'lucide-react';

interface InquiryDashboardProps {
  onClose: () => void;
  updateCounter: number; // Used to trigger reload when contact form is submitted
  onTriggerReload: () => void;
}

const PRE_SEEDED_INQUIRIES: BookingInquiry[] = [
  {
    id: 'AT-8321',
    name: 'Sarah Jenkins (VP of Marketing)',
    email: 'sjenkins@nexatech.com',
    phone: '+1 (415) 555-0192',
    serviceType: 'Product Launch Events',
    eventDate: '2026-10-15',
    guestCount: 250,
    details: 'Immersive keynote stage setup for our next-gen neural interface. Looking for structural, clean navy led strips, sleek geometric frames, and premium press zones.',
    status: 'In Progress',
    submittedAt: '2026-07-03, 2:40 PM'
  },
  {
    id: 'AT-4921',
    name: 'Michael Sterling',
    email: 'msterling@sterlingvillas.com',
    phone: '+1 (312) 555-4082',
    serviceType: 'Luxury Wedding Planner',
    eventDate: '2027-06-20',
    guestCount: 180,
    details: 'A breathtaking glasshouse botanical theme with cascading white orchids and soft acoustic string support. High luxury detailing for table overlays.',
    status: 'Confirmed',
    submittedAt: '2026-07-01, 11:15 AM'
  },
  {
    id: 'AT-5109',
    name: 'Eleanor Vance',
    email: 'evance@gmail.com',
    phone: '+1 (602) 555-1210',
    serviceType: 'Anniversaries',
    eventDate: '2026-08-30',
    guestCount: 65,
    details: 'Golden 50th wedding anniversary for our grandparents. Requesting custom photo memory galleries, vintage jazz trio, and exclusive premium dining menu.',
    status: 'New',
    submittedAt: '2026-07-04, 8:05 AM'
  }
];

export default function InquiryDashboard({ onClose, updateCounter, onTriggerReload }: InquiryDashboardProps) {
  const [inquiries, setInquiries] = useState<BookingInquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedInquiry, setSelectedInquiry] = useState<BookingInquiry | null>(null);

  // Initialize and Seed Inquiries
  useEffect(() => {
    const stored = localStorage.getItem('anglestouch_inquiries');
    if (stored) {
      setInquiries(JSON.parse(stored));
    } else {
      localStorage.setItem('anglestouch_inquiries', JSON.stringify(PRE_SEEDED_INQUIRIES));
      setInquiries(PRE_SEEDED_INQUIRIES);
    }
  }, [updateCounter]);

  // Update Status
  const handleUpdateStatus = (id: string, nextStatus: InquiryStatus) => {
    const updated = inquiries.map(inq => {
      if (inq.id === id) {
        const item = { ...inq, status: nextStatus };
        if (selectedInquiry?.id === id) {
          setSelectedInquiry(item);
        }
        return item;
      }
      return inq;
    });
    setInquiries(updated);
    localStorage.setItem('anglestouch_inquiries', JSON.stringify(updated));
    onTriggerReload();
  };

  // Delete Inquiry
  const handleDeleteInquiry = (id: string) => {
    if (window.confirm('Are you sure you want to delete this inquiry record?')) {
      const filtered = inquiries.filter(inq => inq.id !== id);
      setInquiries(filtered);
      localStorage.setItem('anglestouch_inquiries', JSON.stringify(filtered));
      if (selectedInquiry?.id === id) {
        setSelectedInquiry(null);
      }
      onTriggerReload();
    }
  };

  // Reset/Re-seed Demo Data
  const handleResetDemoData = () => {
    if (window.confirm('This will restore the 3 original luxury demo inquiries. Continue?')) {
      localStorage.setItem('anglestouch_inquiries', JSON.stringify(PRE_SEEDED_INQUIRIES));
      setInquiries(PRE_SEEDED_INQUIRIES);
      setSelectedInquiry(null);
      onTriggerReload();
    }
  };

  // Filter & Search computation
  const filteredInquiries = inquiries.filter(inq => {
    const matchesSearch = 
      inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.serviceType.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Analytics tallies
  const totalInquiries = inquiries.length;
  const totalConfirmed = inquiries.filter(i => i.status === 'Confirmed').length;
  const totalInProgress = inquiries.filter(i => i.status === 'In Progress').length;
  const totalNew = inquiries.filter(i => i.status === 'New').length;
  const totalEstimatedGuests = inquiries.reduce((sum, current) => sum + current.guestCount, 0);

  return (
    <section className="py-24 bg-slate-950 text-white min-h-screen scroll-mt-20 relative animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Dashboard Banner Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="text-blue-400" size={16} />
              <span className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-mono font-bold block">
                Internal Concierge Portal
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-none">
              AnglesTouch Inquiry Desk
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleResetDemoData}
              className="px-4 py-2 border border-slate-800 bg-slate-900 text-slate-400 text-xs uppercase tracking-wider hover:text-white hover:border-slate-700 transition-all cursor-pointer"
              id="btn-seed-data"
            >
              Reset Seed Data
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-white text-slate-950 text-xs font-semibold uppercase tracking-widest hover:bg-slate-200 transition-colors cursor-pointer"
              id="btn-close-dashboard"
            >
              Back To Website
            </button>
          </div>
        </div>

        {/* Quick Analytics Metrics widgets */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12" id="metrics-grid">
          <div className="bg-slate-900 border border-slate-800 p-6">
            <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-mono">Total Leads</span>
            <span className="text-2xl md:text-3xl font-bold text-white mt-1 block">{totalInquiries}</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6">
            <span className="block text-[9px] uppercase tracking-widest text-blue-400 font-mono">New Requests</span>
            <span className="text-2xl md:text-3xl font-bold text-blue-300 mt-1 block">{totalNew}</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6">
            <span className="block text-[9px] uppercase tracking-widest text-yellow-400 font-mono">In Progress</span>
            <span className="text-2xl md:text-3xl font-bold text-yellow-300 mt-1 block">{totalInProgress}</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6">
            <span className="block text-[9px] uppercase tracking-widest text-green-400 font-mono">Confirmed Contracts</span>
            <span className="text-2xl md:text-3xl font-bold text-green-300 mt-1 block">{totalConfirmed}</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 col-span-2 lg:col-span-1">
            <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-mono">Sum Guest Capacity</span>
            <span className="text-2xl md:text-3xl font-bold text-white mt-1 block">{totalEstimatedGuests} <span className="text-xs text-slate-400 font-normal">pax</span></span>
          </div>
        </div>

        {/* Main Dashboard Workspace split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* List Section (Left 7-8 Columns) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Search and Filters toolbar */}
            <div className="flex flex-col sm:flex-row gap-4 bg-slate-900 border border-slate-800 p-4 justify-between">
              {/* Search */}
              <div className="relative flex-1">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <Search size={14} />
                </span>
                <input
                  type="text"
                  placeholder="Search by client, ID or service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-slate-700 text-white rounded-none"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-xs">
                  <Filter size={12} className="inline mr-1" />
                  Status:
                </span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-slate-950 border border-slate-800 text-xs text-slate-300 px-3 py-1.5 focus:outline-none focus:border-slate-700"
                >
                  <option value="All">All Stages</option>
                  <option value="New">New</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>
            </div>

            {/* Inquiries List View */}
            <div className="space-y-3" id="inquiries-list-holder">
              {filteredInquiries.length === 0 ? (
                <div className="text-center py-20 bg-slate-900/40 border border-slate-800">
                  <AlertCircle size={28} className="text-slate-600 mx-auto mb-4" />
                  <p className="text-sm text-slate-400 font-mono">No matching records found in private cache.</p>
                </div>
              ) : (
                filteredInquiries.map((inq) => {
                  const isSelected = selectedInquiry?.id === inq.id;
                  let statusBg = 'bg-slate-800 border-slate-700 text-slate-300';
                  if (inq.status === 'New') statusBg = 'bg-blue-900/30 border-blue-800 text-blue-300';
                  if (inq.status === 'In Progress') statusBg = 'bg-yellow-900/30 border-yellow-800 text-yellow-300';
                  if (inq.status === 'Confirmed') statusBg = 'bg-green-900/30 border-green-800 text-green-300';

                  return (
                    <div
                      key={inq.id}
                      onClick={() => setSelectedInquiry(inq)}
                      className={`p-6 border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer ${
                        isSelected
                          ? 'bg-slate-900 border-blue-500 shadow-md'
                          : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                      }`}
                      id={`inquiry-card-${inq.id}`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-blue-400 tracking-wider">
                            {inq.id}
                          </span>
                          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">
                            {inq.submittedAt.split(',')[0]}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white tracking-tight">
                          {inq.name}
                        </h4>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-light">
                          <span>{inq.serviceType}</span>
                          <span className="text-slate-600">•</span>
                          <span className="flex items-center gap-1">
                            <Calendar size={11} /> {inq.eventDate}
                          </span>
                          <span className="text-slate-600">•</span>
                          <span className="flex items-center gap-1">
                            <Users size={11} /> {inq.guestCount} pax
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-auto">
                        <span className={`text-[10px] uppercase tracking-widest font-bold border px-3 py-1 font-mono ${statusBg}`}>
                          {inq.status}
                        </span>
                        <div className="p-2 bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors">
                          <Eye size={14} />
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

          </div>

          {/* Details & Actions Pane (Right 4-5 Columns) */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 sticky top-28" id="inquiry-details-panel">
            {selectedInquiry ? (
              <div className="space-y-6 animate-fadeIn" id="details-panel-content">
                
                {/* Panel Title */}
                <div className="flex justify-between items-start border-b border-slate-800 pb-5">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-blue-400 font-mono">Inquiry Dossier</span>
                    <h3 className="text-xl font-bold tracking-tight text-white mt-0.5">
                      {selectedInquiry.id}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    {selectedInquiry.submittedAt}
                  </span>
                </div>

                {/* Primary Metadata fields */}
                <div className="space-y-4">
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-slate-500 font-mono">Contact Name</span>
                    <span className="text-base font-semibold text-white">{selectedInquiry.name}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-[9px] uppercase tracking-widest text-slate-500 font-mono">Direct Email</span>
                      <a href={`mailto:${selectedInquiry.email}`} className="text-sm font-light text-slate-300 hover:underline hover:text-blue-400 block break-all">
                        {selectedInquiry.email}
                      </a>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase tracking-widest text-slate-500 font-mono">Direct Phone</span>
                      <a href={`tel:${selectedInquiry.phone}`} className="text-sm font-light text-slate-300 hover:underline hover:text-blue-400 block">
                        {selectedInquiry.phone}
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-slate-800/60 pt-4">
                    <div>
                      <span className="block text-[9px] uppercase tracking-widest text-slate-500 font-mono">Target Date</span>
                      <span className="text-sm font-semibold text-white">{selectedInquiry.eventDate}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase tracking-widest text-slate-500 font-mono">Pax Estimates</span>
                      <span className="text-sm font-semibold text-white">{selectedInquiry.guestCount} guests</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-800/60 pt-4">
                    <span className="block text-[9px] uppercase tracking-widest text-slate-500 font-mono">Design Requirements</span>
                    <p className="text-xs text-slate-300 font-light mt-1.5 leading-relaxed bg-slate-950 p-4 border border-slate-800 max-h-[160px] overflow-y-auto whitespace-pre-wrap">
                      {selectedInquiry.details}
                    </p>
                  </div>
                </div>

                {/* Status modifier buttons */}
                <div className="border-t border-slate-800 pt-6 space-y-4">
                  <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-mono font-bold">
                    Transition Stage
                  </span>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleUpdateStatus(selectedInquiry.id, 'In Progress')}
                      className={`px-3 py-2 text-[10px] uppercase tracking-wider transition-all border font-semibold cursor-pointer ${
                        selectedInquiry.status === 'In Progress'
                          ? 'bg-yellow-500/10 border-yellow-500 text-yellow-300'
                          : 'border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white'
                      }`}
                    >
                      In Progress
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(selectedInquiry.id, 'Confirmed')}
                      className={`px-3 py-2 text-[10px] uppercase tracking-wider transition-all border font-semibold cursor-pointer ${
                        selectedInquiry.status === 'Confirmed'
                          ? 'bg-green-500/10 border-green-500 text-green-300'
                          : 'border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white'
                      }`}
                    >
                      Confirm Contract
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(selectedInquiry.id, 'New')}
                      className={`px-3 py-2 text-[10px] uppercase tracking-wider transition-all border font-semibold cursor-pointer ${
                        selectedInquiry.status === 'New'
                          ? 'bg-blue-500/10 border-blue-500 text-blue-300'
                          : 'border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white'
                      }`}
                    >
                      Mark New
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(selectedInquiry.id, 'Archived')}
                      className={`px-3 py-2 text-[10px] uppercase tracking-wider transition-all border font-semibold cursor-pointer ${
                        selectedInquiry.status === 'Archived'
                          ? 'bg-slate-800 border-slate-700 text-slate-300'
                          : 'border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white'
                      }`}
                    >
                      Archive Lead
                    </button>
                  </div>

                  {/* Destructive Clearance */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleDeleteInquiry(selectedInquiry.id)}
                      className="w-full flex items-center justify-center gap-2 py-3 border border-red-900/40 text-red-400 hover:bg-red-950/20 hover:border-red-500 text-[10px] uppercase tracking-widest font-semibold transition-all cursor-pointer"
                      id="btn-delete-inquiry-record"
                    >
                      <Trash2 size={12} />
                      <span>Delete Dossier</span>
                    </button>
                  </div>
                </div>

              </div>
            ) : (
              /* Detail panel fallback empty state */
              <div className="text-center py-20" id="details-fallback-empty">
                <Users size={32} className="text-slate-700 mx-auto mb-4" />
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest font-mono">Dossier Workspace</h4>
                <p className="text-xs text-slate-500 font-light mt-2 leading-relaxed">
                  Select any inquiry from the table to inspect contact details, adjust proposal status, or delete files.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
