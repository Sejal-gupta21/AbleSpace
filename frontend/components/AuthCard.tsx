import Link from 'next/link';

export default function AuthCard() {
  return (
    <div className="mx-auto max-w-md rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">
      <div className="mb-6 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-[var(--muted)]">Welcome back</p>
        <h1 className="mt-3 text-3xl font-semibold">Let’s get back on track</h1>
        <p className="mt-3 text-sm text-[var(--muted)]">Enter your email below to login to your account or continue as guest.</p>
      </div>

      <div className="space-y-4">
        <button className="w-full rounded-3xl bg-[var(--text)] py-3 text-sm font-semibold text-white transition hover:opacity-90">
          Continue as Guest
        </button>
        <button className="w-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-slate-100">
          Login with Google
        </button>
      </div>

      <p className="mt-6 text-center text-xs text-[var(--muted)]">
        By clicking continue, you agree to our <span className="text-brand-500">Terms of Service</span> and <span className="text-brand-500">Privacy Policy</span>.
      </p>

      <p className="mt-3 text-center text-sm text-[var(--muted)]">
        Or go back to <Link href="/" className="text-brand-500 underline">task board</Link>.
      </p>
    </div>
  );
}
