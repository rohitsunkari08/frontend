'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('scheduled');

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 px-6 pt-4 gap-8">
        <button 
          className={`pb-4 px-2 font-medium transition-colors ${activeTab === 'scheduled' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('scheduled')}
        >
          Scheduled Emails
        </button>
        <button 
          className={`pb-4 px-2 font-medium transition-colors ${activeTab === 'sent' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('sent')}
        >
          Sent Emails
        </button>
      </div>

      {/* Table Area */}
      <table className="w-full text-left text-sm text-gray-700">
        <thead className="bg-gray-50 text-gray-500 uppercase font-semibold text-xs border-b border-gray-200">
          <tr>
            <th className="px-6 py-4 font-semibold">Recipient Email</th>
            <th className="px-6 py-4 font-semibold">Subject</th>
            <th className="px-6 py-4 font-semibold">{activeTab === 'scheduled' ? 'Scheduled For' : 'Sent At'}</th>
            <th className="px-6 py-4 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {/* Dummy Data Row to show the badge */}
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900">john.doe@example.com</td>
            <td className="px-6 py-4">Exciting update from Outbox</td>
            <td className="px-6 py-4 text-gray-500">Oct 1, 2026 10:00 AM</td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                {activeTab === 'scheduled' ? 'Queued' : 'Delivered'}
              </span>
            </td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-900">jane.smith@company.com</td>
            <td className="px-6 py-4">Follow up: SaaS Integration</td>
            <td className="px-6 py-4 text-gray-500">Oct 1, 2026 10:05 AM</td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                {activeTab === 'scheduled' ? 'Queued' : 'Delivered'}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
