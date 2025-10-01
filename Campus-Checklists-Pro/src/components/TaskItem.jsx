export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li>
      <input type="checkbox" checked={task.done} onChange={toggleTask} />
      {task.text}
      <button onClick={deleteTask}>X</button>
    </li>
  );
}