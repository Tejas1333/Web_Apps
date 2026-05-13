"use client";
import React from "react";
import { tree } from "@/data/tree";
import TreeNode from "@/components/TreeNode";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900 p-6">
      <h1 className="text-3xl font-bold text-white mb-6">
        Recursive Tree Menu
      </h1>

      <div className="bg-zinc-950 p-4 rounded-2xl shadow-xl w-fit min-w-[300px]">
        {tree.map((node) => (
          <TreeNode key={node.id} data={node} />
        ))}
      </div>
    </div>
  );
}