"use client";
import React, { useState } from "react";
import {
  FaChevronRight,
  FaChevronDown,
  FaFolder,
  FaFolderOpen,
  FaFileAlt,
} from "react-icons/fa";

const TreeNode = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = data.children && data.children.length > 0;

  return (
    <div className="ml-4 mt-2">
      {/* Node */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 cursor-pointer 
        hover:bg-zinc-800 px-3 py-2 rounded-lg transition-all duration-200
        text-zinc-200 w-fit"
      >
        {/* Arrow */}
        {hasChildren ? (
          isOpen ? (
            <FaChevronDown className="text-sm text-zinc-400" />
          ) : (
            <FaChevronRight className="text-sm text-zinc-400" />
          )
        ) : (
          <span className="w-[14px]" />
        )}

        {/* Folder/File Icon */}
        {hasChildren ? (
          isOpen ? (
            <FaFolderOpen className="text-yellow-400" />
          ) : (
            <FaFolder className="text-yellow-400" />
          )
        ) : (
          <FaFileAlt className="text-blue-400" />
        )}

        {/* Label */}
        <span className="font-medium">{data.label}</span>
      </div>

      {/* Children */}
      {isOpen && (
        <div className="border-l border-zinc-700 ml-3 pl-3 mt-1">
          {data.children?.map((child) => (
            <TreeNode key={child.id} data={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;