import { useState } from "react";

export default function AddListForm({ addList }) {
  const [name, setName] = useState("");
  return (
    <form onSubmit={e => { e.preventDefault(); addList(name); setName(""); }}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button disabled={name.length < 3}>Create</button>
    </form>
  );
}