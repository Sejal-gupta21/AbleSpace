'use client';

import { useState } from 'react';

const fields = ['Priority', 'Members', 'Due Date', 'Labels', 'Status'];

export default function FieldMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-medium text-[var(--text)] shadow-sm transition hover:bg-slate-100"
      >
        Fields
      </button>

      {open ? (
        <div className="absolute left-0 top-full z-10 mt-2 w-48 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-lg">
          <div className="space-y-2">
            {fields.map((field) => (
              <label key={field} className="flex items-center gap-2 text-sm text-[var(--text)]">
                <input type="checkbox" checked readOnly className="h-4 w-4 rounded border-gray-300 text-brand-500" />
                {field}
              </label>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
