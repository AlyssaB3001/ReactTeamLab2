export default function ListCard({ list, deleteList, selectList }) {
  const completed = list.tasks.filter(t => t.done).length;
  return (
    <div className="card">
      <h3 onClick={() => selectList(list.id)} style={{cursor:"pointer"}}>{list.name}</h3>
      <p>{completed} / {list.tasks.length}</p>
      <button onClick={() => deleteList(list.id)}>Delete</button>
    </div>
  );
}