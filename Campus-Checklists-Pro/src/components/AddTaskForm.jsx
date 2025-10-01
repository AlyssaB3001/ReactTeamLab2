import { useState } from "react";

export default function AddTaskForm({ addTask }) {
  const [text, setText] = useState("");
  return (
    <form onSubmit={e => { e.preventDefault(); addTask(text); setText(""); }}>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button disabled={text.length < 3}>Add</button>
    </form>
  );
}