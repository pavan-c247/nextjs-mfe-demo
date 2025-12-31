import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h1 className="text-xl font-bold mb-8">Acme Admin</h1>

        <nav className="space-y-4">
          <Link
            href="/dashboard"
            className="block hover:text-blue-400"
          >
            🏠 Dashboard
          </Link>

          <Link
            href="/dashboard/items"
            className="block hover:text-blue-400"
          >
            📦 Items (MFE)
          </Link>
          <Link
            href="/dashboard/settings"
            className="block hover:text-blue-400"
          >
            ⚙️ Settings
          </Link>

        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
