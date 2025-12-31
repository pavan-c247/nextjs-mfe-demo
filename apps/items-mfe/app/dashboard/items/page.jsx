import Link from "next/link";

/**
 * Server-side fetch (recommended for this demo)
 * - Runs inside Items MFE
 * - Includes cookies automatically
 * - Works with rewrites
 */
async function getItems() {
  const res = await fetch("http://localhost:3001/api/items", {
    cache: "no-store", // always fresh for demo
  });

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  return res.json();
}

export default async function ItemsPage() {
  const items = await getItems();
  console.log(items);
  

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        Items Microfrontend
      </h2>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.price}</td>
                <td className="p-4">
                  <Link
                    href={`/dashboard/items/${item.id}`}
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
