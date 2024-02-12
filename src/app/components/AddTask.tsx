"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { v4 as uuid } from "uuid";
import { addTodo } from "@/api";

const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addTodo({ id: uuid(), text: todoTitle });
    setTodoTitle("");
  };

  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTodoTitle(e.target.value)
        }
        value={todoTitle}
      />
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:scale-95 duration-200">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
