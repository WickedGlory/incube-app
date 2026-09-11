import incubeLogo from '../assets/incube-logo.png';

function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={incubeLogo} alt="iNCUBE" className="h-11 w-auto" style={{ maxWidth: '100px' }} />
            <span className="text-3xl font-bold tracking-tighter">iNCUBE</span>
          </div>
          
          <div className="flex items-center gap-10 text-sm font-medium">
            <a href="/dashboard" className="text-blue-400 font-semibold">Dashboard</a>
            <a href="/resources" className="hover:text-blue-400 transition">Resources</a>
            <a href="/mentorship" className="hover:text-blue-400 transition">Mentorship</a>
            <a href="#" className="hover:text-blue-400 transition">Community</a>
          </div>

          <button 
            onClick={() => { localStorage.removeItem('token'); window.location.href = "/"; }}
            className="text-red-400 hover:text-red-500 font-medium"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-3">Welcome back, Founder</h1>
          <p className="text-zinc-400 text-xl">Here's what's happening in your incubator today</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="text-blue-400 text-4xl mb-4">🚀</div>
            <p className="text-4xl font-bold mb-1">12</p>
            <p className="text-zinc-400">Resources Accessed</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="text-amber-400 text-4xl mb-4">👥</div>
            <p className="text-4xl font-bold mb-1">3</p>
            <p className="text-zinc-400">Mentor Matches</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="text-emerald-400 text-4xl mb-4">💬</div>
            <p className="text-4xl font-bold mb-1">8</p>
            <p className="text-zinc-400">Unread Messages</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="text-rose-400 text-4xl mb-4">📅</div>
            <p className="text-4xl font-bold mb-1">2</p>
            <p className="text-zinc-400">Upcoming Sessions</p>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
          <h2 className="text-2xl font-semibold mb-8">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/resources" className="bg-zinc-800 hover:bg-zinc-700 p-8 rounded-3xl transition group">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-semibold text-xl mb-2 group-hover:text-blue-400">Browse Resources</h3>
              <p className="text-zinc-400">Access templates and guides</p>
            </a>
            <a href="/mentorship" className="bg-zinc-800 hover:bg-zinc-700 p-8 rounded-3xl transition group">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold text-xl mb-2 group-hover:text-blue-400">Find a Mentor</h3>
              <p className="text-zinc-400">Get expert guidance</p>
            </a>
            <div className="bg-zinc-800 hover:bg-zinc-700 p-8 rounded-3xl transition group">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="font-semibold text-xl mb-2 group-hover:text-blue-400">Join Community</h3>
              <p className="text-zinc-400">Connect with other founders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
