"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] sm:h-[75vh] flex items-end pb-12 sm:items-center sm:pb-0 overflow-hidden bg-white">
      {/* Background Image - positioned to show kids */}
      <Image
        src="/images/cover.png"
        alt="Children learning together in Little Pillars Academy"
        fill
        priority
        className="object-cover object-[70%_top] sm:object-top"
        sizes="100vw"
      />

      {/* Soft white gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/10" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gold/10 blur-2xl" />
      <div className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-purple/10 blur-2xl" />

      {/* Content - positioned at bottom over white fade */}
      <div className="relative z-10 w-full text-center px-4 sm:px-6 max-w-4xl mx-auto sm:mt-[20vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/logo.png"
            alt="Little Pillars Academy Logo"
            width={90}
            height={90}
            className="mx-auto mb-4 drop-shadow-lg"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl text-purple mb-2 leading-tight"
        >
          Little Pillars
          <span className="block text-gold text-5xl sm:text-6xl lg:text-7xl mb-4">Academy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-600 font-body text-base sm:text-lg mb-4 max-w-xl mx-auto leading-relaxed"
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href={SITE.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple hover:bg-purple-dark text-white font-bold font-body px-8 py-3.5 rounded-full text-base transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Register Now
          </a>
          <a
            href="#about"
            className="border-2 border-purple/30 hover:border-purple text-purple font-semibold font-body px-8 py-3.5 rounded-full text-base transition-all hover:bg-purple/5"
          >
            Learn More
          </a>
        </motion.div>
      </div>

    </section>
  );
}
