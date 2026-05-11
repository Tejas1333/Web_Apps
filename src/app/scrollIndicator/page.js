"use client"
import React from "react"
import { useState, useEffect } from "react"

export default function ScrollIndicator() {

    const [percentage, setPercentage] = useState(null)

    useEffect(() => {
        function handleScroll(){
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currY = window.scrollY
            const p = ((currY/totalHeight) * 100).toFixed(0)

            console.log("Total Height: ", totalHeight)
            console.log("Current Height: ", currY)
            setPercentage(p)
            console.log("Percentage: ", percentage)
        }

      window.addEventListener("scroll" , handleScroll)

      return () => window.removeEventListener("scroll" , handleScroll)
    }, [])
    

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow">
  
  {/* Progress Bar */}
  <div className="w-full h-1 bg-gray-200">
    <div
      className="h-full bg-blue-500 transition-all duration-75"
      style={{
        width: `${percentage}%`,
      }}
    />
  </div>

  {/* Navbar */}
  <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
    <h1 className="text-2xl font-bold">
      Dummy React Page
    </h1>

    <nav className="flex gap-6 text-sm font-medium">
      <a href="#">Home</a>
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">Contact</a>
    </nav>
  </div>
</header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-600 font-semibold mb-3">
              BUILD FASTER
            </p>

            <h2 className="text-6xl font-bold leading-tight mb-6">
              Create Modern Web Experiences Easily
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-8">
              This is a long dummy page made using only Tailwind CSS.
              You can use it to practice layouts, scrolling behavior,
              responsiveness, cards, sections, spacing, typography,
              flexbox, and grid systems.
            </p>

            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-xl">
                Get Started
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-xl">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="h-[400px] rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-8">
          {["10K+", "500+", "99%", "24/7"].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-10 text-center"
            >
              <h3 className="text-4xl font-bold mb-3">{item}</h3>
              <p className="text-gray-600">
                Dummy Statistic Information
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-20">
          <p className="text-blue-600 font-semibold mb-3">
            FEATURES
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Everything You Need
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-8">
            Explore multiple reusable UI sections designed for React
            and Tailwind CSS practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 mb-6" />

              <h3 className="text-2xl font-semibold mb-4">
                Feature {index + 1}
              </h3>

              <p className="text-gray-600 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus magni distinctio commodi adipisci.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-black text-white py-28">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-blue-400 font-semibold">
              WHY CHOOSE US
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Clean UI With Modern Components
            </h2>

            <p className="text-gray-300 leading-8">
              This section helps you practice dark layouts,
              typography hierarchy, spacing, responsive grids,
              and component composition.
            </p>

            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-gray-900 p-5 rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500" />

                  <div>
                    <h4 className="font-semibold mb-2">
                      Benefit {index + 1}
                    </h4>

                    <p className="text-gray-400 text-sm leading-6">
                      Dummy text for long-page practice and layout
                      experimentation.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl h-[500px]" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              What Users Say
            </h2>

            <p className="text-gray-600">
              Practice card layouts and repeated sections.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-md"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gray-300" />

                  <div>
                    <h4 className="font-semibold">
                      User {index + 1}
                    </h4>

                    <p className="text-sm text-gray-500">
                      Frontend Developer
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti expedita molestiae impedit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center px-8">
          <h2 className="text-6xl font-bold leading-tight mb-8">
            Ready To Build Something Amazing?
          </h2>

          <p className="text-xl leading-8 mb-10 text-blue-100">
            A long Tailwind CSS page for practicing React layouts,
            responsiveness, scrolling, and modern UI sections.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold">
            Start Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              DummySite
            </h3>

            <p className="text-gray-400 leading-7">
              Dummy footer content for long page layout practice.
            </p>
          </div>

          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-5">
                Section {index + 1}
              </h4>

              <ul className="space-y-3 text-gray-400">
                <li>Link One</li>
                <li>Link Two</li>
                <li>Link Three</li>
                <li>Link Four</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
          © 2026 Dummy React Page
        </div>
      </footer>
    </div>
  );
}