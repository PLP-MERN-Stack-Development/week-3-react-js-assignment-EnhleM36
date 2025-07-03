import React from 'react';
import { Task } from '@/types/task';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, X, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <Card className={cn('fade-in task-card', task.completed && 'opacity-75')}>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onToggle(task.id)}
            className={cn(
              'mt-1 p-1 rounded-full transition-all',
              task.completed 
                ? 'bg-green-500 text-white hover:bg-green-600' 
                : 'hover:bg-primary hover:text-primary-foreground'
            )}
          >
            <Check className="h-4 w-4" />
          </Button>
          
          <div className="flex-1 min-w-0">
            <h3 className={cn(
              'font-medium text-foreground transition-all',
              task.completed && 'line-through text-muted-foreground'
            )}>
              {task.title}
            </h3>
            {task.description && (
              <p className={cn(
                'text-sm text-muted-foreground mt-1',
                task.completed && 'line-through'
              )}>
                {task.description}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-2">
              Created: {new Date(task.createdAt).toLocaleDateString()}
            </p>
          </div>
          
          <Button
            variant="danger"
            size="sm"
            onClick={() => onDelete(task.id)}
            className="p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
