'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <aside className="w-[250px] bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-100 flex items-center gap-3">
          <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <span className="font-bold text-lg text-gray-900">ReachInbox</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link 
            href="/dashboard"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${pathname === '/dashboard' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
            All Campaigns
          </Link>
          <Link 
            href="/dashboard/compose"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${pathname === '/dashboard/compose' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
            Compose New
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-[73px] bg-white border-b border-gray-200 px-8 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            {pathname === '/dashboard' ? 'Campaigns' : 'Compose'}
          </h2>
          <div className="flex items-center gap-4">
             <button className="text-sm px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2 text-gray-700 transition-colors">
                <svg className="w-4 h-4 text-[#E01E5A]" fill="currentColor" viewBox="0 0 24 24"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521h-6.313A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.958a2.528 2.528 0 0 1 2.523 2.52A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.523-2.522v-2.52h2.523zM15.165 17.687a2.527 2.527 0 0 1-2.523-2.523 2.526 2.526 0 0 1 2.523-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522-2.523h-6.313z"/></svg>
                Connect Slack
             </button>
            <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">U</div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
