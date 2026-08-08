import AuthCard from '../../components/AuthCard';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] p-6 text-[var(--text)]">
      <div className="flex min-h-[calc(100vh-48px)] items-center justify-center">
        <AuthCard />
      </div>
    </main>
  );
}
