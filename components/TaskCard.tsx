interface TaskCardProps {
  title: string;
  description: string;
}

export default function TaskCard({ title, description }: TaskCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  );
}

