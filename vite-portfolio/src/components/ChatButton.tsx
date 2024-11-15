"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, X, Send, Linkedin, Camera, Github } from "lucide-react";

export default function ChatButton() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      window.location.href = `mailto:w.siongsin@gmail.com?body=${encodeURIComponent(
        message
      )}`;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex flex-col gap-4 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-3 items-center"
        >
          <a
            href="https://www.linkedin.com/in/william-siong-244a68213/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2D3A35] p-3 rounded-lg hover:-translate-y-1 transition-transform duration-300 group relative"
          >
            <Linkedin className="w-5 h-5 text-[#FF9F9F]" />
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#2D3A35] rounded text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              LinkedIn
            </span>
          </a>
          <a
            href="https://instagram.com/william.siong"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2D3A35] p-3 rounded-lg hover:-translate-y-1 transition-transform duration-300 group relative"
          >
            <Camera className="w-5 h-5 text-[#FFC977]" />
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#2D3A35] rounded text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Instagram
            </span>
          </a>
          <a
            href="https://github.com/wsiongsin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2D3A35] p-3 rounded-lg hover:-translate-y-1 transition-transform duration-300 group relative"
          >
            <Github className="w-5 h-5 text-[#7CDEBC]" />
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#2D3A35] rounded text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              GitHub
            </span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={{ scale: isOpen ? 0.8 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-[#FF9F9F] to-[#FFC977] text-[#2D3A35] rounded-full p-4 shadow-lg hover:opacity-90 transition-opacity duration-300"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageSquare className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle chat</span>
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-80"
          >
            <div className="bg-[#2D3A35] text-white rounded-lg shadow-xl overflow-hidden">
              <div className="border-b border-white/10 p-4">
                <h2 className="text-lg font-semibold text-[#7CDEBC]">
                  Get in Touch
                </h2>
                <p className="text-sm text-white/70">
                  Send me a message and I'll get back to you soon!
                </p>
              </div>
              <div className="p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#7CDEBC]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FF9F9F] to-[#FFC977] text-[#2D3A35] py-2 px-4 rounded-md hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
