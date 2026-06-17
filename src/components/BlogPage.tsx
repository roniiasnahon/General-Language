import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export function BlogPage() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featuredPost = sortedPosts[0];
  const listPosts = sortedPosts.slice(1);

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = activeCategory === 'All' 
    ? listPosts 
    : listPosts.filter(post => post.category === activeCategory);

  return (
    <div className="bg-[#FAF6EE] text-zinc-900 min-h-screen font-sans selection:bg-zinc-950 selection:text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center gap-2 text-sm text-zinc-500 font-medium font-sans" aria-label="Breadcrumb">
          <a href="#home" className="hover:text-zinc-950 transition-colors">Home</a>
          <span className="text-zinc-300 select-none">/</span>
          <span className="text-zinc-900" aria-current="page">Blog</span>
        </nav>

        {/* Featured Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-24"
        >
          <div className="order-2 lg:order-1 flex flex-col items-start pr-0 lg:pr-12">
            <span className="text-zinc-600 font-medium mb-6">Featured</span>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl leading-[1.1] font-medium tracking-tight text-zinc-950 mb-8 sm:mb-12">
              {featuredPost.title}
            </h1>
            {(featuredPost.date || featuredPost.category) && (
              <div className="flex items-center gap-4 text-sm text-zinc-500 font-medium mb-8 sm:mb-12">
                {featuredPost.date && <span>{featuredPost.date}</span>}
                {featuredPost.category && <span>{featuredPost.category}</span>}
              </div>
            )}
            <button 
              onClick={() => { window.location.hash = `blog-post/${featuredPost.id}`; }}
              className="px-6 py-2.5 rounded-full border border-zinc-200 hover:border-zinc-300 transition-colors text-zinc-900 font-medium text-sm flex items-center gap-2 cursor-pointer bg-transparent"
            >
              Read blog
            </button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="aspect-[16/10] sm:aspect-video lg:aspect-[1.4/1] w-full rounded-2xl sm:rounded-3xl bg-zinc-950 relative overflow-hidden flex items-center justify-center p-4">
              
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={featuredPost.coverUrl} alt="Featured poster" className="w-full h-full object-cover" />
              </div>

              {/* Top right icon buttons */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 z-10">
                <button 
                  onClick={() => { window.location.hash = `blog-post/${featuredPost.id}`; }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 backdrop-blur-md flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors border border-white/5 cursor-pointer"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="border-b border-zinc-200/60 mb-12">
          <div className="flex gap-8 sm:gap-12 pb-4 px-2 sm:px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-medium relative text-sm sm:text-base cursor-pointer transition-colors ${
                  activeCategory === category ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-950'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div 
                    layoutId="activeTabUnderline"
                    className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-zinc-950 rounded-t-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid List of Posts */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-16"
        >
          {filteredPosts.map((post) => (
            <motion.div 
              key={post.id} 
              onClick={() => { window.location.hash = `blog-post/${post.id}`; }}
              className="group cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-8"
            >
              <h3 className="text-2xl sm:text-[1.75rem] font-medium tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors leading-[1.2] flex-1">
                {post.title}
              </h3>
              <div className={`w-full sm:w-[140px] lg:w-[180px] aspect-video rounded-xl sm:rounded-2xl overflow-hidden shrink-0 bg-zinc-950 relative`}>
                <img src={post.coverUrl} alt="Blog cover" className="w-full h-full object-cover animate-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
