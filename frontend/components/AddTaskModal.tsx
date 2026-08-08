'use client';

import { useState } from 'react';
import type { TaskPriority, TaskStatus } from '../lib/types';

interface AddTaskModalProps {
  onClose: () => void;
  onCreate: () => void;
}

const priorities: TaskPriority[] = ['High', 'Medium', 'Low'];
const statuses: TaskStatus[] = ['todo', 'doing', 'completed'];

export default function AddTaskModal({ onClose, onCreate }: AddTaskModalProps) {
  const [title, setTitle] = useState('');
  const [assignee, setAssignee] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<TaskPriority>('High');
  const [status, setStatus] = useState<TaskStatus>('todo');
  const [labels, setLabels] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (!title || !assignee || !dueDate) {
      setError('Title, assignee, and due date are required.');
      return;
    }

    setSaving(true);

    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          assignee,
          dueDate,
          priority,
          status,
          labels: labels
            .split(',')
            .map((label) => label.trim())
            .filter(Boolean),
        }),
      });

      if (!res.ok) {
        throw new Error('Unable to create task');
      }

      setTitle('');
      setAssignee('');
      setDueDate('');
      setPriority('High');
      setStatus('todo');
      setLabels('');
      onCreate();
      onClose();
    } catch (e) {
      setError('Unable to create task.');
      console.error(e);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 py-6">
      <div className="w-full max-w-2xl rounded-[32px] bg-[var(--surface)] p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Add New Task</h2>
            <p className="text-sm text-[var(--muted)]">Create a new task and assign it to your workflow.</p>
          </div>
          <button type="button" className="text-[var(--muted)]" onClick={onClose}>
            Close
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm text-[var(--muted)]">Title</span>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="mt-2 w-full rounded-3xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 outline-none"
              />
            </label>
            <label className="block">
              <span className="text-sm text-[var(--muted)]">Assignee</span>
              <input
                value={assignee}
                onChange={(event) => setAssignee(event.target.value)}
                className="mt-2 w-full rounded-3xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 outline-none"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm text-[var(--muted)]">Due Date</span>
              <input
                type="date"
                value={dueDate}
                onChange={(event) => setDueDate(event.target.value)}
                className="mt-2 w-full rounded-3xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 outline-none"
              />
            </label>
            <label className="block">
              <span className="text-sm text-[var(--muted)]">Priority</span>
              <select
                value={priority}
                onChange={(event) => setPriority(event.target.value as TaskPriority)}
                className="mt-2 w-full rounded-3xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 outline-none"
              >
                {priorities.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm text-[var(--muted)]">Status</span>
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value as TaskStatus)}
                className="mt-2 w-full rounded-3xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 outline-none"
              >
                {statuses.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm text-[var(--muted)]">Labels</span>
              <input
                value={labels}
                onChange={(event) => setLabels(event.target.value)}
                placeholder="Design, Research"
                className="mt-2 w-full rounded-3xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 outline-none"
              />
            </label>
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="rounded-3xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:opacity-60"
            >
              {saving ? 'Saving…' : 'Create Task'}
            </button>
            <button
              type="button"
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--text)]"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
