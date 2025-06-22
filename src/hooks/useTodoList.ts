import React from "react";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

type Items = {
  id: string;
  text: string;
  isCompleted: boolean;
};
type Filter = "all" | "active" | "completed";

export const useTodoList = () => {
  const [todos, setTodos] = useState<string>("");
  const [filter, setFilter] = useState<Filter>("all");
  const data = localStorage.getItem("todoList");
  // localStorageからデータを取得
  // 取得したデータをJSON.parseでオブジェクトに変換
  const [todoList, setTodoList] = useState<Items[]>(JSON.parse(data || "[]"));

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodos(e.target.value);
  };

  const handleAddTodo = () => {
    const newItems: Items = {
      id: nanoid(),
      text: todos,
      isCompleted: false,
    };
    setTodoList((prev) => [...prev, newItems]);
    setTodos("");
  };

  const handleDeleteTodo = (id: string) => {
    setTodoList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const toggleTodo = (id: string) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleFilter = (newFilter: Filter) => {
    setFilter(newFilter);
  };

  const filteredList = todoList.filter((item) => {
    if (filter === "completed") {
      return !item.isCompleted;
    }
    if (filter === "active") {
      return item.isCompleted;
    }
    return true;
  });
  console.log(filteredList);
  return {
    handleSubmit,
    handleAddTodo,
    toggleTodo,
    handleDeleteTodo,
    handleFilter,
    todos,
    todoList,
    filteredList,
  };
};
