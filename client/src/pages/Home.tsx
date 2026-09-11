import incubeLogo from '../assets/incube-logo.png';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white">
      <nav className="bg-black/80 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={incubeLogo} alt="iNCUBE" className="h-12 w-auto" style={{ maxWidth: '100px' }} />
            <span className="text-3xl font-bold tracking-tighter">iNCUBE</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#" className="hover:text-blue-400 transition">For Entrepreneurs</a>
            <a href="#" className="hover:text-blue-400 transition">For Mentors</a>
            <a href="/resources" className="hover:text-blue-400 transition">Resources</a>
            <a href="/mentorship" className="hover:text-blue-400 transition">Mentorship</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="/login" className="px-6 py-2.5 text-sm font-medium hover:text-gray-300 transition">Login</a>
            <a href="/register" className="bg-blue-600 hover:bg-blue-500 px-8 py-2.5 rounded-2xl font-semibold transition">
              Get Started Free
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
          The Launchpad for<br />
          <span className="text-blue-400">Next-Gen Founders</span>
        </h1>
        <p className="text-2xl text-zinc-400 max-w-3xl mx-auto mb-12">
          Find seasoned mentors, learn from curated resources, connect in a vibrant community, 
          and get ready to launch your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a href="/register" className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-3xl text-lg font-semibold transition">
            Join as Entrepreneur
          </a>
          <a href="/register" className="border border-white/30 hover:bg-white/10 text-white px-12 py-5 rounded-3xl text-lg font-semibold transition">
            Become a Mentor
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
