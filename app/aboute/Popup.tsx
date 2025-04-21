"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const ContactButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Tombol utama */}
      
        <button
          onClick={() => setShowPopup(!showPopup)}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          Hubungi Saya
        </button>
     

      {/* Popup dengan animasi */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            onClick={() => setShowPopup(false)} // Klik luar akan menutup
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white relative border border-gray-300 dark:bg-slate-600 dark:border-slate-600 shadow-2xl rounded-2xl px-6 py-5 w-11/12 max-w-md mx-auto"
              onClick={(e) => e.stopPropagation()} // Biar klik dalam popup gak nutup
            >
              {/* Tombol close (kanan atas) */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-xl"
              >
                &times;
              </button>

              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
                Kontak Saya
              </h3>

              <ul className="space-y-3 text-center text-base">
                <li>
                  <a
                    href="mailto:amrlwcksn@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    📧 amrlwcksn@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/6287766422358"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    💬 WhatsApp: +62 877-6642-2358
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactButton;
