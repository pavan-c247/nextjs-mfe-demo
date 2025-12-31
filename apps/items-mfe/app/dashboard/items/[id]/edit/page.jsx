export default async function EditItem({ params }) {
  const { id } = await params;
  return (
    <div>
      <h2 className="text-xl font-bold">
        Editing Item {id} 
      </h2>
    </div>
  );
}
