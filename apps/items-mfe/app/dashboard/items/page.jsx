export default function ItemsPage() {
  const items = [
    { id: 1, name: "Laptop", price: "$1200" },
    { id: 2, name: "Keyboard", price: "$150" },
    { id: 3, name: "Mouse", price: "$80" },
  ];

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
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
