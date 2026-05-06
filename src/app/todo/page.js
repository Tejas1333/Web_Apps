"use client";
import React from "react";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import { Plus } from "lucide-react";
import { nanoid } from "nanoid";

export default function Todo() {
  const [addingTask, setAddingTask] = useState("");
  const [updatingTask, setUpdatingTask] = useState("");
  const [todos, setTodos] = useState([
    { id: nanoid(), text: "DO HW" },
    { id: nanoid(), text: "DO CW" },
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdatingTodoId, setIsUpdatingTodoId] = useState(null);

  function addTodo() {
    setTodos(() => {
      return [...todos, { id: nanoid(), text: addingTask }];
    });
    setIsAdding(false);
    setAddingTask("");
  }

  function deleteTodo(id) {
    const newArr = todos.filter((todo) => id != todo.id);
    setTodos(newArr);
  }

  function updateTodo(id) {
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
      <div className="text-6xl flex justify-center">To-Do-app</div>

      {/* Showing Todos */}
      <div className="flex flex-col items-center gap-10 m-4">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="flex gap-10">
              {todo.id == isUpdatingTodoId ? (
                <div>
                  <input
                    type="text"
                    value={updatingTask}
                    onChange={(e) => {
                      setUpdatingTask(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      updateTodo(todo.id);
                    }}
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <div>
                  {todo.text}
                  <button
                    className="hover:cursor-pointer"
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    <Trash2 />
                  </button>
                  <button
                    className="hover:cursor-pointer"
                    onClick={() => {
                      setUpdatingTask(todo.text);
                      setIsUpdatingTodoId(todo.id);
                    }}
                  >
                    <Pencil />
                  </button>
                </div>
              )}
            </div>
          );
        })}

        {isAdding ? (
          <div>
            <input
              type="text"
              placeholder="Add task"
              value={addingTask}
              onChange={(e) => {
                setAddingTask(e.target.value);
              }}
            />
            <button onClick={addTodo}>submit</button>
          </div>
        ) : (
          <button
            className="hover:cursor-pointer"
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
