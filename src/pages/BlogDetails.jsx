import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Calendar, User, MoveLeft, Sparkles, CheckCircle2 } from 'lucide-react';
import Footer from '../components/common/Footer';
import { BLOG_POSTS } from '../data/blogsData';

export default function BlogDetails() {
  const { id } = useParams();
  const post = BLOG_POSTS.find((p) => p.id === parseInt(id));

  // 1. Target Reading Progress to content bounds
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start 40%", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restSpeed: 0.001
  });

  if (!post) {
    return (
      <div className="bg-[#030303] text-white min-h-screen pt-32 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link to="/blogs" className="text-[#cc00cc] hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#080808] text-white min-h-screen w-full pt-18 lg:pt-0 font-sans relative">
      

      {/* 1. Specialized Hero Banner */}
      <div className="relative w-full h-[55vh] md:h-[60vh] bg-linear-to-r from-[#111111] via-[#0f0716] to-[#0a0212] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(204,0,204,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,198,255,0.08),transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full relative z-10">
          
          <div className="col-span-1 md:col-span-6 flex flex-col items-start gap-4">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-xs font-bold uppercase tracking-wider transition-all mb-4">
              <MoveLeft size={14} className="text-[#cc00cc]" /> ALL BLOGS
            </Link>

            <span className="bg-[#cc00cc]/10 border border-[#cc00cc]/30 text-[#cc00cc] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-sans font-black tracking-tight text-white mb-2 leading-none">
              {post.title.split(' ').slice(0, 2).join(' ')} <br />
              <span className="italic font-light text-gray-300">
                {post.title.split(' ').slice(2).join(' ')}
              </span>
            </h1>

            <div className="flex items-center gap-6 text-gray-500 text-xs font-bold uppercase tracking-wider mt-2">
              <div className="flex items-center gap-1.5">
                <User size={14} className="text-[#cc00cc]" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#cc00cc]" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-6 relative flex justify-center items-center h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-md aspect-16/10 rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]"
            >
              <img src={post.image} className="w-full h-full object-cover brightness-[0.8]" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. 2-Column Layout Container (Reference aligned) */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12 relative items-start">
         
         {/* LEFT Sidebar: Table of Contents */}
         <div className="col-span-1 md:col-span-4 sticky top-32 self-start hidden md:block border-r border-white/5 pr-6">
            <div className="flex flex-col gap-6">
               <div className="border-b border-white/5 pb-2 max-w-[160px]">
                  <h4 className="text-sm font-black text-white mb-1">Min Read</h4>
                  <div className="w-full h-[3px] bg-white/5 rounded-full relative overflow-hidden">
                     <motion.div 
                        style={{ scaleX }} 
                        className="absolute left-0 top-0 w-full h-full bg-linear-to-r from-[#cc00cc] to-[#ff0080] origin-left rounded-full" 
                     />
                  </div>
               </div>
           
            </div>
         </div>

         {/* CENTER: Post Body & Takeaways */}
         <div ref={contentRef} className="col-span-1 md:col-span-8 flex flex-col">
       

            <div
               className="prose prose-invert max-w-none 
                 prose-p:text-gray-400 prose-p:leading-relaxed prose-p:mb-5 prose-p:text-[15px]
                 prose-headings:text-white prose-headings:font-black prose-headings:tracking-tight prose-headings:mt-10 prose-headings:mb-4
                 prose-h2:text-xl md:prose-h2:text-2xl prose-h2:border-b prose-h2:border-white/5 prose-h2:pb-2
                 prose-h3:text-lg md:prose-h3:text-xl
                 prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-5 prose-li:text-gray-400 prose-li:mb-1.5
                 prose-blockquote:border-l-4 prose-blockquote:border-[#cc00cc] prose-blockquote:pl-5 prose-blockquote:italic prose-blockquote:text-white/80 prose-blockquote:bg-white/3 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-xl prose-blockquote:mb-6"
               dangerouslySetInnerHTML={{ __html: post.content }}
            />
         </div>

        </div>

      <Footer />
    </div>
  );
}
