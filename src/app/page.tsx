"use client";

import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

// Skills Data
const skills = [
  { name: "HTML", logo: "/images/html.jpg", description: "Markup language for web structure." },
  { name: "CSS", logo: "/images/css.jpg", description: "Styles web pages with layout and colors." },
  { name: "JavaScript", logo: "/images/javascript.jpg", description: "Client-side scripting language for interactivity." },
  { name: "Node.js", logo: "/images/node_js.jpg", description: "Server-side JavaScript runtime." },
  { name: "NEXT.js", logo: "/images/nextjs.jpg", description: "React framework for SSR and static sites." },
  { name: "TypeScript", logo: "/images/typescript.jpg", description: "Typed superset of JavaScript." },
  { name: "TailwindCSS", logo: "/images/tailwindcss.jpg", description: "Utility-first CSS framework." },
  { name: "React Native", logo: "/images/reactnative.jpg", description: "Build cross-platform mobile apps." },
  { name: "Kotlin", logo: "/images/kotlin.jpg", description: "Modern language for Android apps." },
  { name: "Android Studio", logo: "/images/androidstudio.jpg", description: "IDE for Android development." },
  { name: "Three.js", logo: "/images/threejs.jpg", description: "3D graphics library for the web." },
];

// Rating component
function StarRating({ rating, onRate }: { rating: number; onRate: (val: number) => void }) {
  return (
    <div className="flex gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} onClick={() => onRate(star)}>
          <span className={`text-xl ${star <= rating ? "text-yellow-400" : "text-gray-500"}`}>★</span>
        </button>
      ))}
    </div>
  );
}

export default function HomePage() {
  const [ratings, setRatings] = useState<number[]>(Array(skills.length).fill(0));

  const handleRate = (index: number, value: number) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  return (
     <div className="relative min-h-screen text-white">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/neonrain_1080.mp4" type="video/mp4" media="(min-width: 1024px)" />
        <source src="/videos/neonrain_720.mp4" type="video/mp4" media="(max-width: 1023px)" />
        <source src="/videos/neonrain.webm" type="video/webm" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 -z-10"></div>

      <main className="relative z-10 px-6 py-16 max-w-7xl mx-auto">

        {/* Header with social icons */}
        <header className="flex justify-end gap-6 mb-16">
          <a href="https://your-website.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
            <FaGlobe size={24} />
          </a>
          <a href="https://github.com/Collin440" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/fofo-collin-moleme-a10b2337a" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:fofocollinmoleme@gmail.com" className="hover:text-red-400 transition">
            <FaEnvelope size={24} />
          </a>
        </header>

        {/* About Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-20">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-teal-400 shadow-lg">
            <Image
              src="/images/myPic.jpg"
              alt="Profile Image"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
              Hi, I’m Collin Moleme
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              Frontend | Mobile & Web Apps | Tech Enthusiast <br />
              I craft sleek, modern digital experiences using the latest technologies.
              Currently a student at Rosebank College, specializing in Web and Mobile App Development.
              I am passionate about creating user-friendly, responsive applications that make a difference.
              Contact me to bring your ideas to life!
            </p>

            {/* CV + Cover Letter Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/files/fofo-cv.pdf"
                download
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-xl shadow-lg shadow-teal-500/30 text-white font-semibold transition"
              >
                Download CV
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/files/collin_cover_letter.docx"
                download
                className="px-6 py-3 bg-purple-700 hover:bg-purple-800 rounded-xl shadow-lg shadow-purple-500/30 text-white font-semibold transition"
              >
                Download Cover Letter
              </motion.a>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-teal-300 mb-10 text-center">My Tech Stack & Frameworks</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center group cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                {/* Skill logo */}
                <div className="w-20 h-20 relative rounded-full overflow-hidden border-2 border-purple-400 shadow-lg shadow-purple-700/40">
                  <Image src={skill.logo} alt={skill.name} fill className="object-contain p-2" />
                </div>

                {/* Animated bubble on hover */}
                <motion.div
                  className="absolute mt-24 p-3 bg-black/70 rounded-lg text-sm text-gray-200 text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {skill.description}
                </motion.div>

                {/* Skill name */}
                <span className="mt-2 text-sm">{skill.name}</span>

                {/* Rating Card */}
                <StarRating
                  rating={ratings[idx]}
                  onRate={(val) => handleRate(idx, val)}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* My Projects Section */}
<section className="mb-20">
  <h2 className="text-3xl font-bold text-teal-300 mb-10 text-center">My Demo Projects</h2>
  
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, staggerChildren: 0.2 }}
  >
    {[
      { name: "bmi_calculator", video: "/videos/bmi_calculator.mp4" },
      { name: "bon_boni_web_development_assignment", video: "/videos/bon_boni_web_development_assignment.mp4" },
      { name: "empowering_the_nation", video: "/videos/empowering_the_nation.mp4" },
      { name: "menu_management_app", video: "/videos/menu_management_app.mp4" },
      { name: "weed_app", video: "/videos/weed_app.mp4" },
    ].map((project) => (
      <motion.div
        key={project.name}
        className="group bg-gradient-to-br from-purple-700 via-indigo-700 to-teal-600 rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
        whileHover={{ scale: 1.05 }}
      >
        {/* Project Video */}
        <div className="relative w-full h-48">
          <video
            src={project.video}
            controls
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>
        
        {/* Project Info */}
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition">
            {project.name.replace(/_/g, " ")}
          </h3>
          <p className="text-gray-200 text-sm mb-2">
            Project preview. Click play to view.
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>

{/* Contact / Call-to-Action Section */}
<section className="mb-20 text-center">
  <h2 className="text-3xl font-bold text-teal-300 mb-6">Get in Touch</h2>
  <p className="text-gray-300 mb-6">
    Connect with me for collaborations, freelance work, or just to say hi!
  </p>

  <div className="flex justify-center gap-6 mb-8">
    <a
      href="https://linkedin.com/in/your-linkedin"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 transition text-3xl"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://wa.me/27653xxxxxxx"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-400 transition text-3xl"
    >
      {/* WhatsApp Icon from react-icons */}
      <FaWhatsapp />
    </a>
    <a
      href="https://github.com/Collin440"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-purple-400 transition text-3xl"
    >
      <FaGithub />
    </a>
  </div>

  {/* Footer */}
  <footer className="mt-12 text-gray-400 text-sm">
    © Collin Moleme | Software Development | 2025
  </footer>
</section>

      </main>
    </div>
  );
}

