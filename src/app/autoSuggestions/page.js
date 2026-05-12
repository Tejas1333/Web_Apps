"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [pastSearch, setPastSearch] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [pastActiveIndex, setPastActiveIndex] = useState(-1);
  const [cache, setCache] = useState({});

  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(timer);
  }, [text]);

  useEffect(() => {
    handleTrends();
  }, []);

  useEffect(() => {
    function handle(e) {
      // Suggestions Navigation
      if (text) {
        if (e.key === "ArrowDown") {
          setActiveIndex((prev) => prev + 1);
        } else if (e.key === "ArrowUp") {
          setActiveIndex((prev) => prev - 1);
        } else if (e.key === "Enter") {
          if (activeIndex >= 0 && activeIndex <= data.length - 1) {
            setText(data[activeIndex]);
          }
        }
      }

      // Past Search Navigation
      else {
        if (e.key === "ArrowDown") {
          setPastActiveIndex((prev) => prev + 1);
        } else if (e.key === "ArrowUp") {
          setPastActiveIndex((prev) => prev - 1);
        } else if (e.key === "Enter") {
          if (
            pastActiveIndex >= 0 &&
            pastActiveIndex <= pastSearch.length - 1
          ) {
            setText(pastSearch[pastActiveIndex]);
          }
        }
      }
    }

    window.addEventListener("keydown", handle);

    return () => {
      window.removeEventListener("keydown", handle);
    };
  }, [activeIndex, data, text, pastActiveIndex, pastSearch]);

  // Suggestion Boundary
  useEffect(() => {
    if (activeIndex < -1) setActiveIndex(-1);

    if (activeIndex >= data.length) {
      setActiveIndex(data.length - 1);
    }
  }, [activeIndex, data]);

  // Past Search Boundary
  useEffect(() => {
    if (pastActiveIndex < -1) {
      setPastActiveIndex(-1);
    }

    if (pastActiveIndex >= pastSearch.length) {
      setPastActiveIndex(pastSearch.length - 1);
    }
  }, [pastActiveIndex, pastSearch]);

  // local storage get
  useEffect(() => {
    const ps = localStorage.getItem("pastSearch");

    if (ps) {
      setPastSearch(JSON.parse(ps));
    }
  }, []);
  useEffect(() => {
    // localStorage.clear()
    const c = localStorage.getItem("cache");

    if (c) {
      setCache(JSON.parse(c));
    }
  }, []);

  // local storage set
  useEffect(() => {
    localStorage.setItem("pastSearch", JSON.stringify(pastSearch));
  }, [pastSearch]);
  useEffect(() => {
    localStorage.setItem("cache", JSON.stringify(cache));
  }, [cache]);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setData([]);
      }
    }
    window.addEventListener("click", handleClick);
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  async function handleSearch() {
    if (!text.trim()) return;

    setPastSearch((prev) => [text, ...prev].slice(0, 7));
    let res;
    if (cache[text]) {
      setData(cache[text]);
      console.log("cache triggered")
      return;
    } else {
      res = await fetch(`api/autoSuggestion?q=${text}`);
    }

    const body = await res.json();

    console.log("api triggered")
    setData(body[1]);
    setCache((prev)=> ({...prev , [text] : body[1]}))
  }

  async function handleTrends() {
    const trendRes = await fetch("api/autoTrends");
    const trends = await trendRes.json();
  }

  return (
    <>
      <input
        className="border border-black"
        value={text}
        type="text"
        placeholder="search here"
        onChange={(e) => {
          setText(e.target.value);
          setActiveIndex(-1);
          setPastActiveIndex(-1);
        }}
      />

      {pastSearch && !text && (
        <>
          <div>Recent Searches</div>

          {pastSearch.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  border:
                    index === pastActiveIndex ? "1px solid black" : "none",
                }}
                className="hover:bg-gray-300"
                onClick={() => {
                  setText(item);
                }}
              >
                {item}
              </div>
            );
          })}
        </>
      )}

      {text && (
        <div ref={ref}>
          {data.map((item, index) => {
            return (
              <div
                className="hover:bg-gray-300"
                key={index}
                style={{
                  border: index === activeIndex ? "1px solid black" : "none",
                }}
                onClick={() => {
                  setText(item);
                }}
              >
                <span>{item.slice(0, text.length)}</span>

                <span>{item.slice(text.length)}</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
