export default function ComposeEmail() {
  return (
    <div className="flex gap-6 h-full">
      {/* Main Form Area (Sub-column 1) */}
      <div className="flex-[2] bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Compose New Email</h3>
        
        <form className="flex-1 flex flex-col space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <input 
              type="text" 
              placeholder="Upload leads via right panel or type email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input 
              type="text" 
              placeholder="Email Subject" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900" 
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea 
              className="w-full flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 resize-none min-h-[300px]" 
              placeholder="Write your email here..."
            ></textarea>
          </div>
        </form>
      </div>

      {/* Right Configuration Panel (Sub-column 2) */}
      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6 pb-2 border-b border-gray-100">Configuration</h4>
        
        <div className="space-y-6">
          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Leads (CSV)</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
              <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
              <span className="text-sm text-gray-500">Drag & drop or click to upload</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
            <input type="datetime-local" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 text-sm" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-xs">Delay (ms)</label>
              <input type="number" defaultValue={2000} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-xs">Hourly Limit</label>
              <input type="number" defaultValue={200} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 text-sm" />
            </div>
          </div>
          
          <div className="pt-6 mt-6 border-t border-gray-100">
            <button className="w-full py-3 px-4 rounded-lg text-white bg-green-600 hover:bg-green-700 font-medium transition-colors shadow-sm">
              Schedule Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
