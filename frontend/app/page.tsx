'use client';

import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import Sidebar from '../components/Sidebar';
import TasksFetcher from '../components/TasksFetcher';
import TopBar from '../components/TopBar';
import AddTaskModal from '../components/AddTaskModal';

export default function Home() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [reloadSignal, setReloadSignal] = useState(0);

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

          <TopBar onAddTask={() => setIsAddOpen(true)} />
          <TasksFetcher reloadSignal={reloadSignal} />
        </section>
      </div>

      {isAddOpen ? (
        <AddTaskModal
          onClose={() => setIsAddOpen(false)}
          onCreate={() => setReloadSignal((prev) => prev + 1)}
        />
      ) : null}
    </main>
  );
}
