'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Tombol Toggle Dropdown */}
      <div className="md:hidden flex justify-end mb-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 border rounded-lg text-sm font-semibold hover:bg-zinc-100"
        >
          Menu
        </button>
      </div>

      {/* Menu untuk Mobile (Dropdown) dan Desktop (Horizontal) */}
      <motion.div
        className={`flex flex-col md:flex-row items-center gap-3 md:gap-x-6 border border-zinc-300 hover:border-zinc-500 hover:shadow-md transition-all duration-300 p-4 rounded-2xl
        ${isOpen ? 'block' : 'hidden'} md:flex`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <Link href="">
          <button className="w-full md:w-auto font-notojp font-semibold text-sm md:text-base hover:scale-105 transition duration-200 px-5 py-2 rounded-xl hover:bg-zinc-100 text-center">
            About Me
          </button>
        </Link>

        <Link href="">
          <button className="w-full md:w-auto font-notojp font-semibold text-sm md:text-base hover:scale-105 transition duration-200 px-5 py-2 rounded-xl hover:bg-zinc-100 text-center">
            Blog
          </button>
        </Link>

        <Link href="">
          <button className="w-full md:w-auto font-notojp font-semibold text-sm md:text-base hover:scale-105 transition duration-200 px-5 py-2 rounded-xl hover:bg-zinc-100 text-center">
            Curriculum Vitae
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
