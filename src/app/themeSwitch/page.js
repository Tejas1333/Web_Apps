"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ThemeCard } from "@/components/ThemeCard";
import "@/styles/theme.css";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  //   1. Check localStorage theme first
  //   2. If no saved theme:
  //       use system theme
  //   3. Apply class to body/html

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) setTheme("dark");
    else setTheme("light");
    console.log(isDark);
  }, []);

  useEffect(() => {
    const th = localStorage.getItem("Theme");
    setTheme(JSON.parse(th));
  }, []);
  useEffect(() => {
    // localStorage.clear()
    localStorage.setItem("Theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <>
      <div className={`${theme}-theme`}>
        {/* Navbar */}
        <nav
          className={`${theme}-navbar flex items-center justify-between px-10 py-5 shadow-md`}
        >
          <h1 className="text-2xl font-bold">{theme}UI</h1>

          <ul className="flex gap-8 font-medium">
            <li className="cursor-pointer hover:text-blue-500">Home</li>
            <li className="cursor-pointer hover:text-blue-500">About</li>
            <li className="cursor-pointer hover:text-blue-500">Services</li>
            <li className="cursor-pointer hover:text-blue-500">Contact</li>
          </ul>


          <select value={theme} onChange={(e)=>{setTheme(e.target.value)}}
          className={`${theme}-card`} 
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="forest">Forest</option>
            <option value="sunset">Sunset</option>
            <option value="ocean">Ocean</option>
            <option value="rose">Rose</option>
            <option value="ice">Ice</option>
            <option value="lava">Lava</option>
            <option value="midnight">Midnight</option>
            <option value="lemon">Lemon</option>
          </select>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-24 px-6">
          <h2 className="text-5xl font-extrabold mb-6">
            Welcome to Light Theme
          </h2>

          <p className="max-w-2xl text-lg text-gray-600 mb-8">
            This is a simple React page styled with a clean light theme using
            Tailwind CSS. It focuses only on UI and layout.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Get Started
            </button>

            <button
              className={`${theme}-card px-6 py-3 rounded-xl hover:bg-gray-100 transition`}
            >
              Learn More
            </button>
          </div>
        </section>

        {/* Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-20">
          <ThemeCard
            title={"Fast"}
            desc={"Optimized UI components with clean and modern styling."}
            theme={theme}
          />
          <ThemeCard
            title={"Responsive"}
            desc={"Minimal layout focused on readability and user experience."}
            theme={theme}
          />
          <ThemeCard
            title={"Clean Design"}
            desc={"Clean UI components with modern styling."}
            theme={theme}
          />
        </section>

        {/* Footer */}
        <footer
         className={`${theme}-footer border-t py-6 text-center text-gray-500`}
        >
          © 2026 {theme}UI. All rights reserved.
        </footer>
      </div>
    </>
  );
}
