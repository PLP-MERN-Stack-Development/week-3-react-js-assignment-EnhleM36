
import React from 'react';
import { Button } from '@/components/ui/Button';
import { TaskFilter as TaskFilterType } from '@/types/task';

interface TaskFilterProps {
  currentFilter: TaskFilterType;
  onFilterChange: (filter: TaskFilterType) => void;
  taskCounts: {
    all: number;
    active: number;
    completed: number;
  };
}

export function TaskFilter({ currentFilter, onFilterChange, taskCounts }: TaskFilterProps) {
  const filters: { key: TaskFilterType; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: taskCounts.all },
    { key: 'active', label: 'Active', count: taskCounts.active },
    { key: 'completed', label: 'Completed', count: taskCounts.completed },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(({ key, label, count }) => (
        <Button
          key={key}
          variant={currentFilter === key ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => onFilterChange(key)}
          className="flex items-center space-x-2"
        >
          <span>{label}</span>
          <span className="bg-background/20 px-2 py-0.5 rounded-full text-xs">
            {count}
          </span>
        </Button>
      ))}
    </div>
  );
}
