import React from 'react';
import { motion } from 'motion/react';
import { blogPosts } from '../data/blogPosts';

export function BlogPostPage({ slug }: { slug?: string }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find post or fallback to first
  const post = blogPosts.find(p => p.id === slug) || blogPosts[0];

  return (
    <div className="bg-[#FAF6EE] text-zinc-900 min-h-screen font-sans selection:bg-zinc-950 selection:text-white pb-24">
      <article className="pt-24 md:pt-32">
        {/* Header */}
        <header className="max-w-4xl mx-auto px-4 text-center mb-12">
          {(post.category || post.date) && (
            <div className="flex items-center justify-center gap-4 text-sm font-medium text-zinc-600 mb-6">
              {post.category && <span className="text-zinc-900">{post.category}</span>}
              {post.date && <span>{post.date}</span>}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-950 mb-6">
            {post.title}
          </h1>
        </header>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24"
        >
          <div className="w-full aspect-[16/10] md:aspect-[2.2/1] rounded-3xl overflow-hidden bg-zinc-950">
            <img 
              src={post.coverUrl} 
              alt="Blog cover" 
              className="w-full h-full object-cover" 
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-[700px] mx-auto px-4 text-lg md:text-[1.125rem] text-zinc-800 leading-[1.7] space-y-8"
        >
          {post.content}
        </motion.div>
      </article>
    </div>
  );
}
