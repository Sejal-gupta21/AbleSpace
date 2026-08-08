import Link from 'next/link';

const navItems = [
  { label: 'Tasks', href: '/' },
  { label: 'Projects', href: '/projects' },
];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-full max-w-[280px] flex-col gap-6 rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-500 text-white">D</div>
        <div>
          <p className="text-sm font-medium">Dexter</p>
          <p className="text-xs text-[var(--muted)]">Workspace</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--text)] transition hover:bg-slate-100"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
