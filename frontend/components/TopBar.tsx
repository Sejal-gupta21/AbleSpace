'use client';

import FieldMenu from './FieldMenu';
import AddTaskButton from './AddTaskButton';

interface TopBarProps {
  onAddTask: () => void;
}

export default function TopBar({ onAddTask }: TopBarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center">
        <label className="relative block flex-1">
          <span className="sr-only">Search tasks</span>
          <span className="pointer-events-none absolute inset-y-0 left-4 inline-flex items-center text-[var(--muted)]">🔍</span>
          <input
            type="search"
            placeholder="Search tasks"
            className="w-full rounded-3xl border border-[var(--border)] bg-[var(--bg)] py-3 pl-11 pr-4 text-sm text-[var(--text)] outline-none transition focus:border-brand-500"
          />
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <FieldMenu />
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-medium text-[var(--text)] shadow-sm transition hover:bg-slate-100"
          >
            Filter
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm font-medium text-[var(--text)] shadow-sm transition hover:bg-slate-100"
        >
          Continue as Guest
        </button>
        <AddTaskButton onClick={onAddTask} />
      </div>
    </div>
  );
}
