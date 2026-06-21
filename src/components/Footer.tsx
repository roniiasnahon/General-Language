"use client";
import React from 'react';
import { Icons } from "./ui/icons";
import { Button } from "./ui/button";

interface FooterProps {
  onNavigate?: (view: any) => void;
}

function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="py-16 px-4 md:px-8 bg-transparent relative z-30">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="md:w-1/2">
            <img 
              src="/genlang.png" 
              alt="GenLang Logo" 
              className="h-20 md:h-28 lg:h-32 max-w-[240px] md:max-w-[320px] lg:max-w-[400px] object-contain block" 
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="md:w-1/2 flex flex-col sm:flex-row gap-12 sm:gap-24">
            <div>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('download'); }} className="text-zinc-800 hover:text-black">
                    Download
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('llm-learning'); }} className="text-zinc-800 hover:text-black">
                    AI Engines
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('changelog'); }} className="text-zinc-800 hover:text-black">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-800 hover:text-black">
                    Releases
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('blog'); }} className="text-zinc-800 hover:text-black">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('about'); }} className="text-zinc-800 hover:text-black">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('story'); }} className="text-zinc-800 hover:text-black">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('why-students'); }} className="text-zinc-800 hover:text-black">
                    Supporting Students
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('compliance'); }} className="text-zinc-800 hover:text-black">
                    Compliance Group
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center pointer-events-none overflow-hidden mb-16 px-2">
          <h1 className="text-center text-[13vw] lg:text-[9.5rem] font-bold tracking-tighter leading-tight text-zinc-950 select-none pb-4">
            GeneralLanguage
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t-0 border-zinc-200">
          <div />
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-medium text-zinc-600">
            <a href="#" className="hover:text-black">
              About General Language
            </a>
            <a href="#" className="hover:text-black">
              General Language Products
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate?.('privacy'); }}
              className="hover:text-black cursor-pointer"
            >
              Privacy
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate?.('terms'); }}
              className="hover:text-black cursor-pointer"
            >
              Terms
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate?.('do-not-sell'); }}
              className="hover:text-black cursor-pointer whitespace-nowrap"
            >
              Do Not Sell My Info
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate?.('cookie-preferences'); }}
              className="hover:text-black cursor-pointer whitespace-nowrap"
            >
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
