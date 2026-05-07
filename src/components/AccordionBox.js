import React from "react";

const AccordionBox = ({ item, openId, toggleState }) => {
  return (
    <>
      <div className={`border rounded-xl p-4 mb-4 shadow-md  ${openId === item.id ? "bg-gray-400" : "bg-white hover:bg-gray-200"}`}>
        <button
          className="w-full flex justify-between items-center"
          onClick={() => {
            toggleState(item.id);
          }}
        >
          <span className="text-lg font-semibold">{item.question}</span>
          <span className="text-2xl font-bold cursor-pointer">
            {openId === item.id ? "-" : "+"}
          </span>
        </button>

        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            ${openId === item.id ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}
        `}
        >
          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </>
  );
};

export default AccordionBox;
