import { useState } from 'react';
import incubeLogo from '../assets/incube-logo.png';

const resources = [
  { id: 1, title: "Business Model Canvas Template", category: "Templates", type: "PDF", description: "Complete framework to define your business model", icon: "📋" },
  { id: 2, title: "Investor Pitch Deck Guide 2026", category: "Guides", type: "PDF", description: "Step-by-step guide to creating a winning pitch deck", icon: "📊" },
  { id: 3, title: "Financial Projections Model", category: "Tools", type: "Excel", description: "Professional 3-year financial forecasting template", icon: "📈" },
  { id: 4, title: "Customer Discovery Playbook", category: "Templates", type: "Doc", description: "Interview scripts and validation methodology", icon: "🗣️" },
  { id: 5, title: "Fundraising Strategy Blueprint", category: "Guides", type: "PDF", description: "How to successfully raise capital from angels & VCs", icon: "💰" },
];

function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Templates', 'Guides', 'Tools'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <a href="/resources" className="text-blue-400 font-semibold">Resource Library</a>
            <a href="/mentorship" className="hover:text-blue-400">Mentorship</a>
            <a href="#" className="hover:text-blue-400">Community</a>
          </div>
          <button onClick={() => { localStorage.removeItem('token'); window.location.href = "/"; }} className="text-red-400 hover:text-red-500">Logout</button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Resource Library</h1>
          <p className="text-xl text-zinc-400">Curated tools and resources to accelerate your startup journey</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-3xl px-6 py-4 focus:border-blue-500 outline-none"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-zinc-900 border border-zinc-700 rounded-3xl px-6 py-4 focus:border-blue-500 outline-none"
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map(resource => (
            <div key={resource.id} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500 transition-all group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{resource.icon}</div>
              <span className="px-4 py-1 bg-zinc-800 text-blue-400 text-xs rounded-full">{resource.category}</span>
              <h3 className="text-2xl font-semibold mt-4 mb-3 group-hover:text-blue-400 transition">{resource.title}</h3>
              <p className="text-zinc-400 mb-8">{resource.description}</p>
              <button className="w-full py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-100">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;
