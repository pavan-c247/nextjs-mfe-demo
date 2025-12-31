export default function DashboardHome() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Dashboard Home
      </h2>

      <div className="grid grid-cols-3 gap-6">
        <StatCard title="Users" value="1,204" />
        <StatCard title="Orders" value="312" />
        <StatCard title="Revenue" value="$24,500" />
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-500">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}
