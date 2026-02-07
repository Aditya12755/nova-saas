"use client";

import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    gsap.from("#hero", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <main
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* TOP LEFT NAME */}
      <div className="fixed top-6 left-8 text-2xl font-extrabold tracking-[0.3em] animate-pulse">
        ADITYA
      </div>

      {/* TOP RIGHT NAV */}
      <nav className="fixed top-6 right-8 flex gap-6 text-sm">
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>

      {/* HERO SECTION */}
      <div
        id="hero"
        className="text-center max-w-2xl backdrop-blur-sm"
      >
        <p className="uppercase text-xs tracking-widest mb-3">
          Time to meet
        </p>
        <h1 className="text-5xl font-extrabold mb-4">WELCOME</h1>
        <p className="text-gray-200">
          Hi, I’m <b>Aditya Maurya</b>, a <b>QA Engineer</b> with experience
          in Selenium automation, API testing, and manual testing.
        </p>
      </div>

      {/* CONTACT SECTION */}
<form
  id="contact"
  action="https://formspree.io/f/abcdwxyz"   // 👈 yaha apna real URL daalo
  method="POST"
  className="mt-20 bg-white text-black p-6 rounded-xl w-full max-w-md"
>
  <h2 className="text-center font-semibold mb-4">Contact</h2>

  <input
    type="email"
    name="email"
    required
    className="w-full border p-2 mb-3 rounded"
    placeholder="Your Email"
  />

  <textarea
    name="message"
    required
    className="w-full border p-2 mb-3 rounded"
    placeholder="Your Message"
  />

  <button
    type="submit"
    className="w-full bg-black text-white py-2 rounded hover:opacity-80"
  >
    Send Message
  </button>
</form>

      <div
        id="contact"
        className="mt-20 bg-white text-black p-6 rounded-xl w-full max-w-md"
      >
        <h2 className="text-center font-semibold mb-4">Contact Me</h2>

        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Your Email"
        />

        <textarea
          className="w-full border p-2 mb-3 rounded"
          placeholder="Your Message"
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Send Message
        </button>
      </div>
    </main>
  );
}
