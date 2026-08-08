import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';

const projects = [
  { title: 'Design Homepage', priority: 'High', lead: 'Ananya', dueDate: '12 Sep 2026' },
  { title: 'Develop Login Feature', priority: 'Low', lead: 'CN', dueDate: '15 Sep 2026' },
  { title: 'Test Payment Gateway', priority: 'Medium', lead: 'QA Team', dueDate: '18 Sep 2026' },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] p-6 text-[var(--text)]">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-[var(--muted)]">Projects</p>
                  <h1 className="text-3xl font-semibold">Manage projects</h1>
                </div>
              </div>
            </div>
            <TopBar />
          </div>

          <div className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-[var(--bg)]">
                <tr>
                  <th className="px-6 py-4 font-semibold text-[var(--muted)]">Project</th>
                  <th className="px-6 py-4 font-semibold text-[var(--muted)]">Priority</th>
                  <th className="px-6 py-4 font-semibold text-[var(--muted)]">Lead</th>
                  <th className="px-6 py-4 font-semibold text-[var(--muted)]">Due Date</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.title} className="border-t border-[var(--border)]">
                    <td className="px-6 py-4">{project.title}</td>
                    <td className="px-6 py-4 text-brand-500">{project.priority}</td>
                    <td className="px-6 py-4">{project.lead}</td>
                    <td className="px-6 py-4">{project.dueDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
