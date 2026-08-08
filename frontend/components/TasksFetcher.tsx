 'use client';

import { useEffect, useState } from 'react';
import type { Task } from '../lib/types';
import TaskCard from './TaskCard';

export default function TasksFetcher() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch('http://localhost:4000/tasks');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        if (mounted) setTasks(data);
      } catch (e) {
        // keep existing sample or show nothing
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  const statusColumns = [
    { label: 'To Do', value: 'todo' as const },
    { label: 'Doing', value: 'doing' as const },
    { label: 'Completed', value: 'completed' as const },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {statusColumns.map((column) => (
        <div key={column.value} className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">{column.label}</h2>
            <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
          </div>

          <div className="space-y-4">
            {loading ? (
              <p className="text-sm text-[var(--muted)]">Loading…</p>
            ) : (
              tasks
                .filter((t) => t.status === column.value)
                .map((task) => <TaskCard key={task.id} task={task} />)
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
