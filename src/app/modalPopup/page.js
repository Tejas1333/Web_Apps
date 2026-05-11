"use client";
import React from "react";
import { useState, useEffect } from "react";
import Popup from "@/components/Popup";

export default function ModalPopup() {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function handlePopup(e){
        if(e.key === "Escape"){
            setPopup(false)
        }
    }

    window.addEventListener("keydown" , handlePopup)
  
    return () => {
      window.removeEventListener("keydown" , handlePopup)
    }
  }, [])
  

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Navbar */}
      <header className="w-full border-b border-gray-800 sticky top-0 bg-gray-950/90 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">StudyMate</h1>

          <nav className="flex gap-6 text-gray-300">
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#" className="hover:text-white transition">
              Features
            </a>
            <a href="#" className="hover:text-white transition">
              Courses
            </a>
            <a href="#" className="hover:text-white transition">
              Pricing
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-blue-400 font-semibold mb-4">
              AI Powered Learning Platform
            </p>

            <h2 className="text-6xl font-extrabold leading-tight mb-6">
              Learn Faster <br />
              Build Smarter <br />
              Crack Interviews
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              StudyMate helps students master coding, DSA, web development, AI
              tools, and interview preparation using smart AI-powered learning
              systems.
            </p>

            <div className="flex gap-4 mb-10">
              <button className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold transition">
                Start Learning
              </button>

              <button className="border border-gray-700 hover:border-gray-500 px-7 py-3 rounded-xl font-semibold transition">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              <div>
                <h3 className="text-3xl font-bold">10K+</h3>
                <p className="text-gray-400">Students</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-gray-400">DSA Problems</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-gray-400">Projects</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl">
            <div className="space-y-5">
              <div className="bg-gray-800 rounded-xl p-5">
                <h3 className="text-xl font-semibold mb-2">AI Study Planner</h3>

                <p className="text-gray-400">
                  Generate personalized study schedules based on goals.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-5">
                <h3 className="text-xl font-semibold mb-2">Smart Notes</h3>

                <p className="text-gray-400">
                  Convert lectures, PDFs, and videos into concise notes.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-5">
                <h3 className="text-xl font-semibold mb-2">
                  Interview Preparation
                </h3>

                <p className="text-gray-400">
                  Practice DSA, aptitude, core subjects, and mock interviews.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-5">
                <h3 className="text-xl font-semibold mb-2">
                  AI Career Guidance
                </h3>

                <p className="text-gray-400">
                  Discover careers, roadmap guidance, and industry trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold mb-3">FEATURES</p>

            <h2 className="text-5xl font-bold mb-6">Everything You Need</h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Powerful AI-driven tools designed for students, developers, and
              interview aspirants.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">AI Tutor</h3>

              <p className="text-gray-400 leading-relaxed">
                Get instant explanations, hints, and simplified answers for
                difficult concepts.
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Coding Practice</h3>

              <p className="text-gray-400 leading-relaxed">
                Solve DSA questions with guided hints and step-by-step
                solutions.
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Resume Builder</h3>

              <p className="text-gray-400 leading-relaxed">
                Create ATS-friendly resumes and prepare for technical
                interviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-5">What Students Say</h2>

            <p className="text-gray-400">
              Thousands of students are improving their skills daily.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <p className="text-gray-300 mb-6 leading-relaxed">
                “StudyMate helped me crack my internship interview with
                structured DSA preparation.”
              </p>

              <h4 className="font-bold">Rahul Sharma</h4>
              <p className="text-gray-500 text-sm">
                Software Engineering Student
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <p className="text-gray-300 mb-6 leading-relaxed">
                “The AI notes and personalized planner saved me hours every
                week.”
              </p>

              <h4 className="font-bold">Priya Verma</h4>
              <p className="text-gray-500 text-sm">Web Developer</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <p className="text-gray-300 mb-6 leading-relaxed">
                “Best platform for learning DSA and interview preparation
                efficiently.”
              </p>

              <h4 className="font-bold">Arjun Patel</h4>
              <p className="text-gray-500 text-sm">Final Year Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-blue-600">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Start Your Learning Journey Today
          </h2>

          <p className="text-lg text-blue-100 mb-10">
            Join thousands of students building skills and preparing for their
            future careers.
          </p>

          <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl font-bold transition">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">StudyMate</h2>

            <p className="text-gray-400 max-w-sm">
              AI-powered education platform helping students learn smarter and
              faster.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>

              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>

              <ul className="space-y-2 text-gray-400">
                <li>Docs</li>
                <li>Support</li>
                <li>Community</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Popup */}
      {popup && <Popup setPopup={setPopup} />}
    </div>
  );
}
