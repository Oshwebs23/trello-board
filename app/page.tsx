import TaskCard from "../components/TaskCard";

const tasks = [
  {
    title: "Plan weekly schedule",
    description: "Organise tasks into To Do, Doing, Done",
  },
  {
    title: "Build Telo UI",
    description: "Create columns and layout",
  },
  {
    title: "Add interactivity",
    description: "Buttons, drag-and-drop, state",
  },
];

export default function Home() {
  return (
    <main className="p-6 space-y-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.title}
          title={task.title}
          description={task.description}
        />
      ))}
    </main>
  );
}


