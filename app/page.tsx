"use client";
import { useState } from "react";
import TaskCard from "../components/TaskCard";

export default function Home() {
  const [todoTasks, setTodoTasks] = useState([
    {
      title: "Plan weekly schedule",
      description: "Organise tasks into To Do, Doing, Done",
    },
    {
      title: "Build Telo UI",
      description: "Create columns and layout",
    },
  ]);

  const [doingTasks, setDoingTasks] = useState([
    {
      title: "Add interactivity",
      description: "Buttons, drag-and-drop, state",
    },
  ]);

  const [doneTasks, setDoneTasks] = useState([
    {
      title: "Setup project",
      description: "Created Next.js + Tailwind",
    },
  ]);

  return (
    <main className="p-6 grid grid-cols-3 gap-6">
      {/* To Do Column */}
      <div>
        <h2 className="text-xl font-bold mb-4">To Do</h2>
        {todoTasks.map((task) => (
          <TaskCard
            key={task.title}
            title={task.title}
            description={task.description}
          />
        ))}
      </div>

      {/* Doing Column */}
      <div>
        <h2 className="text-xl font-bold mb-4">Doing</h2>
        {doingTasks.map((task) => (
          <TaskCard
            key={task.title}
            title={task.title}
            description={task.description}
          />
        ))}
      </div>

      {/* Done Column */}
      <div>
        <h2 className="text-xl font-bold mb-4">Done</h2>
        {doneTasks.map((task) => (
          <TaskCard
            key={task.title}
            title={task.title}
            description={task.description}
          />
        ))}
      </div>
    </main>
  );
}



