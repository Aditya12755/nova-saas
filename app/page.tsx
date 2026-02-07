"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    gsap.from("#hero", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xojnqwzw", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError("❌ Message not sent. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* TOP LEFT NAME */}
      <div className="fixed top-6 left-8 text-2xl font-extrabold tracking-[0.3em]">
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

      {/* HERO */}
      <div id="hero" className="text-center max-w-2xl">
        <p className="uppercase text-xs tracking-widest mb-3 text-gray-300">
          Time to meet
        </p>

        <h1 className="text-5xl font-extrabold mb-4">WELCOME</h1>

        <p className="text-gray-200 leading-relaxed">
          Hi, I’m <b>Aditya Maurya</b>, a <b>QA Engineer</b> with experience in
          Selenium automation, API testing, and manual testing.
        </p>

        {/* CTA */}
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="/Aditya-Maurya-Resume.pdf"
            download
            className="px-6 py-3 bg-white text-black rounded-lg hover:opacity-80 transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* CONTACT */}
      <div
        id="contact"
        className="mt-20 bg-white text-black p-6 rounded-xl w-full max-w-md"
      >
        <h2 className="text-center font-semibold mb-4">Contact Me</h2>

        {submitted ? (
          <p className="text-green-600 text-center font-medium">
            ✅ Message sent successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
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

            {error && (
              <p className="text-red-600 text-sm mb-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded hover:opacity-80 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
