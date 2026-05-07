"use client";
import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import AccordionBox from "@/components/AccordionBox";
import { Plus } from "lucide-react";

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
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingAccordion, setUpdatingAccordion] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function toggleState(id) {
    if (isOpenId == null) setIsOpenId(id);
    else if (isOpenId != id) setIsOpenId(id);
    else setIsOpenId(null);
  }

  function addAccordion() {
    if (!question.trim()) return;
    if (!answer.trim()) return;

    const newAccordion = {
      id: nanoid(),
      question: question,
      answer: answer,
    };
    setAccordion(() => {
      return [...accordion, newAccordion];
    });
    setIsAdding(false);
    setQuestion("");
    setAnswer("");
  }

  function deleteAccordion(id) {
    const newArr = accordion.filter((item) => id != item.id);
    setAccordion(newArr);
  }

  function updateAccordion() {
    if (!question.trim()) return;
    if (!answer.trim()) return;

    const updatedAccordion = accordion.map((item) => {
      if (updatingAccordion.id == item.id) {
        return { ...item, question: question, answer: answer };
      }

      return item;
    });

    setAccordion(updatedAccordion);
    setQuestion("");
    setAnswer("");
    setIsUpdating(false);
  }
  return (
    <>
      <div className="flex justify-around items-center">
        <h1 className="text-6xl m-4">Accordion</h1>
        <Plus
          onClick={() => {
            setIsAdding(true);
          }}
        />
      </div>
      <div>
        {isAdding ? (
          <div className="border rounded-xl p-4 shadow-md flex flex-col gap-3 bg-white">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              type="text"
              placeholder="Add question"
              className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-gray-400"
            />

            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              type="text"
              placeholder="Add answer"
              className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-gray-400"
            />

            <button
              onClick={isAdding ? addAccordion : updateAccordion}
              className="bg-black text-white rounded-lg p-2 hover:bg-gray-800 transition-colors"
            >
              {isAdding ? "Add Accordion" : "Update Accordion"}
            </button>
          </div>
        ) : isUpdating ? (
          <div className="border rounded-xl p-4 shadow-md flex flex-col gap-3 bg-white">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              type="text"
              placeholder="Add question"
              className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-gray-400"
            />

            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              type="text"
              placeholder="Add answer"
              className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-gray-400"
            />

            <button
              onClick={isAdding ? addAccordion : updateAccordion}
              className="bg-black text-white rounded-lg p-2 hover:bg-gray-800 transition-colors"
            >
              {isAdding ? "Add Accordion" : "Update Accordion"}
            </button>
          </div>
        ) : (
          <>
            {accordion.map((item) => {
              return (
                <div key={item.id} className="">
                  <AccordionBox
                    item={item}
                    openId={isOpenId}
                    toggleState={toggleState}
                    deleteAccordion={deleteAccordion}
                    setIsUpdating={setIsUpdating}
                    setUpdatingAccordion={setUpdatingAccordion}
                    setQuestion={setQuestion}
                    setAnswer={setAnswer}
                  />
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}
