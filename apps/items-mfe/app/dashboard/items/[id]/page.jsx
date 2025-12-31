import Link from "next/link";

export default async function ItemDetails({ params }) {
  const { id } = await params;

  return (
    <div>
      <h2 className="text-2xl font-bold">
        Item Details : {id}
      </h2>

      <Link
        href={`/dashboard/items/${id}/edit`}
        className="text-blue-600 underline"
      >
        Edit Item
      </Link>
    </div>
  );
}
