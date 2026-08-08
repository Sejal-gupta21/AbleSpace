'use client';

import { Task } from '../lib/types';

interface TaskCardProps {
  task: Task;
}

const priorityStyles: Record<Task['priority'], string> = {
  High: 'text-red-600',
  Medium: 'text-orange-500',
  Low: 'text-slate-500',
};

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold">{task.title}</h3>
        <span className={`text-xs font-semibold ${priorityStyles[task.priority]}`}>{task.priority}</span>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)]">
        <span>{task.assignee}</span>
        <span>•</span>
        <span>{task.dueDate}</span>
      </div>
    </article>
  );
}
