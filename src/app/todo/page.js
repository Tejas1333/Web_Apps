"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import { Pencil, Plus, Square, CheckSquare } from "lucide-react";
import { nanoid } from "nanoid";

export default function Todo() {
  const [addingTask, setAddingTask] = useState("");
  const [updatingTask, setUpdatingTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdatingTodoId, setIsUpdatingTodoId] = useState(null);
  const [priority, setPriority] = useState("Low");

  const priorityOrder = {
    High: 3,
    Medium: 2,
    Low: 1,
  };
  const sortedTodos = [...todos].sort(
    (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority],
  );

  useEffect(() => {
    const savedTodo = localStorage.getItem("todos");
    if (savedTodo) {
      setTodos(JSON.parse(savedTodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    if (!addingTask.trim()) return;

    const newTodo = {
      id: nanoid(),
      text: addingTask,
      priority: priority,
      complete: false,
    };
    setTodos(() => {
      return [...todos, newTodo];
    });
    setIsAdding(false);
    setAddingTask("");
  }

  function deleteTodo(id) {
    const newArr = todos.filter((todo) => id != todo.id);
    setTodos(newArr);
  }
  function toggleTodo(id) {
    const toggleTodo = todos.map((todo) => {
      if (id == todo.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });

    setTodos(toggleTodo);
  }

  function updateTodo(id) {
    if (!updatingTask.trim()) return;

    const updatedTodos = todos.map((todo) => {
      if (id == todo.id) {
        return { ...todo, text: updatingTask };
      }

      return todo;
    });

    setTodos(updatedTodos);
    setIsUpdatingTodoId(null);
    setUpdatingTask("");
  }

  return (
    <>
      {/* Title */}
      <div className="text-6xl font-bold text-center mt-10">To-Do-app</div>

      {/* Showing Todos */}
      <div className="flex flex-col items-center gap-6 mt-10">
        {sortedTodos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="flex items-center justify-between w-100 p-4 rounded-lg"
              style={{
                background:
                  todo.priority === "High"
                    ? "red"
                    : todo.priority === "Medium"
                      ? "yellow"
                      : "green",
              }}
            >
              {todo.id == isUpdatingTodoId ? (
                <div className="flex gap-3 w-full">
                  <input
                    type="text"
                    value={updatingTask}
                    onChange={(e) => {
                      setUpdatingTask(e.target.value);
                    }}
                    className="border px-3 py-1 rounded w-full"
                  />

                  <button
                    onClick={() => {
                      updateTodo(todo.id);
                    }}
                    className="bg-black text-white px-3 rounded cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between w-full">
                  <p
                    style={{
                      textDecoration: todo.complete ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </p>

                  <div className="flex gap-4">
                    <button
                      className="cursor-pointer"
                      onClick={() => {
                        toggleTodo(todo.id);
                      }}
                    >
                      {todo.complete ? <CheckSquare /> : <Square />}
                    </button>
                    <button
                      className="cursor-pointer"
                      onClick={() => {
                        deleteTodo(todo.id);
                      }}
                    >
                      <Trash2 />
                    </button>

                    <button
                      className="cursor-pointer"
                      onClick={() => {
                        setUpdatingTask(todo.text);
                        setIsUpdatingTodoId(todo.id);
                      }}
                    >
                      <Pencil />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {isAdding ? (
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Add task"
              value={addingTask}
              onChange={(e) => {
                setAddingTask(e.target.value);
              }}
              className="border px-3 py-2 rounded"
            />
            <select
              value={priority}
              onChange={(e) => {
                setPriority(e.target.value);
              }}
              className="border px-3 py-2 rounded"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <button
              onClick={addTodo}
              className="bg-black text-white px-4 py-2 rounded cursor-pointer"
            >
              Submit
            </button>
          </div>
        ) : (
          <button
            className="bg-black text-white p-3 rounded-full cursor-pointer"
            onClick={() => {
              setIsAdding(true);
            }}
          >
            <Plus />
          </button>
        )}
      </div>
    </>
  );
}
