import React from "react";

export const ThemeCard = ({ title, desc, theme }) => {
  return (
    <div
      className={`${theme}-card p-6 rounded-2xl shadow-md hover:shadow-xl transition`}
    >
      <h3 className="text-2xl font-semibold mb-3 text-gray-600">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};
