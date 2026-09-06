"use client";

import { useState } from "react";
import TaskCard from "../components/TaskCard";

export default function Home() {
  // Task state
  const [todoTasks, setTodoTasks] = useState([
    {
      id: 1,
      title: "Plan weekly schedule",
      description: "Organise tasks into To Do, Doing, Done",
    },
    {
      id: 2,
      title: "Build Telo UI",
      description: "Create columns and layout",
    },
  ]);

  const [doingTasks, setDoingTasks] = useState([
    {
      id: 3,
      title: "Add interactivity",
      description: "Buttons, drag-and-drop, state",
    },
  ]);

  const [doneTasks, setDoneTasks] = useState([
    {
      id: 4,
      title: "Setup project",
      description: "Created Next.js + Tailwind",
    },
  ]);

  // Form state
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // Add new task
  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      title: newTitle,
      description: newDescription,
    };

    setTodoTasks([...todoTasks, newTask]);

    setNewTitle("");
    setNewDescription("");
    setShowForm(false);
  };

  // Movement logic
  const moveToDoing = (id) => {
    const task = todoTasks.find((t) => t.id === id);
    setTodoTasks(todoTasks.filter((t) => t.id !== id));
    setDoingTasks([...doingTasks, task]);
  };

  const moveToDone = (id) => {
    const task = doingTasks.find((t) => t.id === id);
    setDoingTasks(doingTasks.filter((t) => t.id !== id));
    setDoneTasks([...doneTasks, task]);
  };

  return (
    <main className="p-6 grid grid-cols-3 gap-6">
      {/* To Do Column */}
      <div>
        <h2 className="text-xl font-bold mb-4">To Do</h2>
        {todoTasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            onMove={() => moveToDoing(task.id)}
          />
        ))}
      </div>

      {/* Doing Column */}
      <div>
        <h2 className="text-xl font-bold mb-4">Doing</h2>
        {doingTasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            onMove={() => moveToDone(task.id)}
          />
        ))}
      </div>

      {/* Done Column */}
      <div>
        <h2 className="text-xl font-bold mb-4">Done</h2>
        {doneTasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
      </div>

      {/* Floating Purple Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 bg-purple-600 text-white w-14 h-14 rounded-full shadow-lg text-3xl flex items-center justify-center"
      >
        +
      </button>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed bottom-24 right-6 bg-white p-4 rounded-lg shadow-lg w-64">
          <h3 className="text-lg font-bold mb-2">Add New Task</h3>

          <input
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />

          <textarea
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />

          <button
            onClick={handleAddTask}
            className="w-full bg-purple-600 text-white p-2 rounded"
          >
            Add Task
          </button>

          <button
            onClick={() => setShowForm(false)}
            className="w-full mt-2 bg-gray-300 p-2 rounded"
          >
            Cancel
          </button>
        </div>
      )}
    </main>
  );
}
