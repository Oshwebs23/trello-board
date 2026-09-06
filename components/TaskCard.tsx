import React from "react";

export default function TaskCard({ id, title, description, onMove }) {
  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-700">{description}</p>

      {/* Movement Button (arrow icon) */}
      {onMove && (
        <button
          onClick={onMove}
          className="mt-2 text-purple-600 text-xl"
        >
          ➜
        </button>
      )}
    </div>
  );
}
