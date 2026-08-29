import TaskCard from "../components/TaskCard";

export default function Home() {
  return (
    <main className="p-6 grid grid-cols-3 gap-6">
      <div>
        <h2 className="text-xl font-bold mb-4">To Do</h2>
        <TaskCard title="Task A" description="Something to do." />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Doing</h2>
        <TaskCard title="Working on UI." description="Building the board layout." />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Done</h2>
        <TaskCard title="Setup Development Environment" description="Created Next.js and Tailwind."/>
      </div>
    </main>
  );
}

