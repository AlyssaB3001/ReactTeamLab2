import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ListDashboard from "./components/ListDashboard";
import ListPage from "./components/ListPage";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [lists, setLists] = useLocalStorage("lists", [
    { id: 1, name: "ACM Club", tasks: [{ id: 1, text: "Plan meeting", done: false }] },
    { id: 2, name: "Lab 5", tasks: [{ id: 2, text: "Write report", done: true }] }
  ]);
  const [selectedListId, setSelectedListId] = useState(null);

  const addList = (name) => {
    setLists([...lists, { id: Date.now(), name, tasks: [] }]);
  };

  const deleteList = (id) => {
    if (confirm("Delete this list?")) {
      setLists(lists.filter(l => l.id !== id));
      setSelectedListId(null);
    }
  };

  const addTask = (listId, text) => {
    setLists(lists.map(l =>
      l.id === listId ? { ...l, tasks: [...l.tasks, { id: Date.now(), text, done: false }] } : l
    ));
  };

  const toggleTask = (listId, taskId) => {
    setLists(lists.map(l =>
      l.id === listId
        ? { ...l, tasks: l.tasks.map(t => t.id === taskId ? { ...t, done: !t.done } : t) }
        : l
    ));
  };

  const deleteTask = (listId, taskId) => {
    setLists(lists.map(l =>
      l.id === listId ? { ...l, tasks: l.tasks.filter(t => t.id !== taskId) } : l
    ));
  };

  return (
    <div className="app">
      <Header goHome={() => setSelectedListId(null)} />
      {selectedListId === null ? (
        <ListDashboard lists={lists} addList={addList} deleteList={deleteList} selectList={setSelectedListId} />
      ) : (
        <ListPage
          list={lists.find(l => l.id === selectedListId)}
          addTask={addTask}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      )}
    </div>
  );
}