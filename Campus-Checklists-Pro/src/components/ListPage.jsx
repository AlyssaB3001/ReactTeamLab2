import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import FilterBar from "./FilterBar";
import { useState } from "react";

export default function ListPage({ list, addTask, toggleTask, deleteTask }) {
  const [filter, setFilter] = useState("all");

  const tasks = list.tasks.filter(t =>
    filter === "all" ? true : filter === "active" ? !t.done : t.done
  );

  return (
    <div>
      <h2>{list.name}</h2>
      <AddTaskForm addTask={(text) => addTask(list.id, text)} />
      <FilterBar filter={filter} setFilter={setFilter} />
      {tasks.length === 0 ? (
        list.tasks.length === 0 ? <p>This list is empty</p> : <p>No tasks</p>
      ) : (
        <TaskList tasks={tasks} toggleTask={(id) => toggleTask(list.id, id)} deleteTask={(id) => deleteTask(list.id, id)} />
      )}
      <p>{list.tasks.filter(t => t.done).length} of {list.tasks.length} completed</p>
    </div>
  );
}