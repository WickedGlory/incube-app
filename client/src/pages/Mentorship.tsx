import incubeLogo from '../assets/incube-logo.png';

const mentors = [
  { id: 1, name: "Sarah Chen", role: "Startup Advisor", expertise: "Fintech, SaaS", avatar: "👩‍💼", bio: "Helped 12 startups raise over $45M" },
  { id: 2, name: "Michael Okoro", role: "Growth Expert", expertise: "Marketing, Scaling", avatar: "👨‍💼", bio: "Ex-Google, scaled 3 companies to 7-figures" },
  { id: 3, name: "Aisha Mohammed", role: "Product Strategist", expertise: "Product, UX", avatar: "👩🏾‍💼", bio: "Built products used by 2M+ users" },
];

function Mentorship() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={incubeLogo} alt="iNCUBE" className="h-11 w-auto" style={{ maxWidth: '100px' }} />
            <span className="text-3xl font-bold tracking-tighter">iNCUBE</span>
          </div>
          <div className="flex items-center gap-10 text-sm font-medium">
            <a href="/dashboard" className="hover:text-blue-400">Dashboard</a>
            <a href="/resources" className="hover:text-blue-400">Resources</a>
            <a href="/mentorship" className="text-blue-400 font-semibold">Mentorship</a>
            <a href="#" className="hover:text-blue-400">Community</a>
          </div>
          <button onClick={() => { localStorage.removeItem('token'); window.location.href = "/"; }} className="text-red-400 hover:text-red-500">Logout</button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center mb-4">Find Your Mentor</h1>
        <p className="text-xl text-zinc-400 text-center max-w-2xl mx-auto mb-16">
          Connect with experienced founders and industry experts who can guide your journey
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map(mentor => (
            <div key={mentor.id} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500 transition-all">
              <div className="text-6xl mb-6">{mentor.avatar}</div>
              <h3 className="text-2xl font-semibold mb-1">{mentor.name}</h3>
              <p className="text-blue-400 mb-4">{mentor.role}</p>
              <p className="text-zinc-400 mb-6">{mentor.bio}</p>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl font-semibold transition">
                Request Mentorship
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mentorship;
