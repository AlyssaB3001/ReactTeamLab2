import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map(t => (
        <TaskItem key={t.id} task={t} toggleTask={() => toggleTask(t.id)} deleteTask={() => deleteTask(t.id)} />
      ))}
    </ul>
  );
}