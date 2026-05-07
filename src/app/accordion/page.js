"use client";
import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import AccordionBox from "@/components/AccordionBox";

export default function Accordion() {
  const [accordion, setAccordion] = useState([
    {
      id: nanoid(),
      question: "What is React?",
      answer:
        "React is a JavaScript library used for building user interfaces.",
    },

    {
      id: nanoid(),
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework that supports server-side rendering and routing.",
    },

    {
      id: nanoid(),
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework used for rapid UI development.",
    },

    {
      id: nanoid(),
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension that allows writing HTML-like code inside JavaScript.",
    },

    {
      id: nanoid(),
      question: "What is useState?",
      answer:
        "useState is a React Hook used to store and update component state.",
    },

    {
      id: nanoid(),
      question: "What is a component in React?",
      answer: "A component is a reusable piece of UI logic and structure.",
    },

    {
      id: nanoid(),
      question: "What is virtual DOM?",
      answer:
        "Virtual DOM is a lightweight copy of the real DOM used for efficient updates.",
    },

    {
      id: nanoid(),
      question: "Why use keys in React lists?",
      answer:
        "Keys help React identify which elements changed, added, or removed.",
    },
  ]);
  const [isOpenId, setIsOpenId] = useState(null);

  function toggleState(id) {
    if (isOpenId == null) setIsOpenId(id);
    else if (isOpenId != id) setIsOpenId(id);
    else setIsOpenId(null);
  }
  return (
    <>
      <h1 className="text-6xl m-4">Accordion</h1>
      <div>
        {accordion.map((item) => {
          return (
            <div key={item.id} className="">
                <AccordionBox item={item} openId={isOpenId} toggleState={toggleState}/>
            </div>
          );
        })}
      </div>
    </>
  );
}
