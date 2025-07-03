import React, { useState, useEffect } from 'react';
import { Task, TaskFilter } from '@/types/task';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { TaskForm } from './TaskForm';
import { TaskItem } from './TaskItem';
import { TaskFilter as TaskFilterComponent } from './TaskFilter';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export function TaskManager() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [filter, setFilter] = useState<TaskFilter>('all');

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      default:
        return true;
    }
  });

  const taskCounts = {
    all: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length,
  };

  return (
    <div className="space-y-6" id="tasks">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Task Manager</CardTitle>
          <p className="text-muted-foreground">
            Organize your tasks efficiently with our intuitive task management system.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <TaskForm onSubmit={addTask} />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <TaskFilterComponent
              currentFilter={filter}
              onFilterChange={setFilter}
              taskCounts={taskCounts}
            />
            <p className="text-sm text-muted-foreground">
              {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'}
            </p>
          </div>

          <div className="space-y-3 group">
            {filteredTasks.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-muted-foreground">
                  {filter === 'all' && 'No tasks yet. Add your first task above!'}
                  {filter === 'active' && 'No active tasks. Great job!'}
                  {filter === 'completed' && 'No completed tasks yet.'}
                </div>
              </div>
            ) : (
              filteredTasks.map(task => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
