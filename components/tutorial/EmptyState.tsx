import React from "react";
import { FileQuestion } from "lucide-react";

interface EmptyStateProps {
  message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center">
      <FileQuestion className="w-16 h-16 text-gray-400 mb-4" />
      <h3 className="text-lg font-semibold text-purple-700 mb-2">
        No tutorials found
      </h3>
      <p className="text-sm text-gray-500">{message}</p>
    </div>
  );
}
