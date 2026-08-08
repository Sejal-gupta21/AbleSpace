import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] p-6 text-[var(--text)]">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[var(--muted)]">AbleSpace</p>
              <h1 className="text-3xl font-semibold">Task Management</h1>
            </div>
            <ThemeToggle />
          </div>
          <p className="max-w-2xl text-sm leading-6 text-[var(--muted)]">
            Clean Next.js app scaffold with Tailwind CSS and theme persistence. The next steps will add task board UI, guest login, and API integration.
          </p>
        </header>
      </div>
    </main>
  );
}
