import ThemeToggle from '../components/ThemeToggle';
import Sidebar from '../components/Sidebar';
import TaskCard from '../components/TaskCard';
import type { Task } from '../lib/types';

const tasks: Task[] = [
  {
    id: '1',
    title: 'Design Homepage',
    priority: 'High',
    assignee: 'Ananya',
    dueDate: '12 Sep 2026',
    status: 'todo',
  },
  {
    id: '2',
    title: 'Develop Login Feature',
    priority: 'Low',
    assignee: 'CN',
    dueDate: '15 Sep 2026',
    status: 'doing',
  },
  {
    id: '3',
    title: 'Test Payment Gateway',
    priority: 'Medium',
    assignee: 'QA Team',
    dueDate: '18 Sep 2026',
    status: 'completed',
  },
];

const statusColumns = [
  { label: 'To Do', value: 'todo' as const, color: 'bg-slate-400' },
  { label: 'Doing', value: 'doing' as const, color: 'bg-slate-400' },
  { label: 'Completed', value: 'completed' as const, color: 'bg-slate-400' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] p-6 text-[var(--text)]">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[280px_1fr]">
        <Sidebar />

        <section className="flex flex-col gap-6">
          <header className="flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[var(--muted)]">AbleSpace</p>
              <h1 className="text-3xl font-semibold">Task Management</h1>
            </div>
            <ThemeToggle />
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {statusColumns.map((column) => (
              <div key={column.value} className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">{column.label}</h2>
                  <span className={`h-2.5 w-2.5 rounded-full ${column.color}`} />
                </div>
                <div className="space-y-4">
                  {tasks.filter((task) => task.status === column.value).map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
