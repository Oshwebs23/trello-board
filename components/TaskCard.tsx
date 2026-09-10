import React from "react";

export default function TaskCard({ id, title, description, onMove, onMoveBack }) {
  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-700">{description}</p>

      <div className="flex gap-2 mt-2">
        {/* Forward Movement Button */}
        {onMove && (
          <button
            onClick={onMove}
            className="text-purple-600 text-xl"
          >
            ➜
          </button>
        )}

        {/* Backward Movement Button */}
        {onMoveBack && (
          <button
            onClick={onMoveBack}
            className="text-purple-600 text-xl"
          >
            ←
          </button>
        )}
      </div>
    </div>
  );
}
