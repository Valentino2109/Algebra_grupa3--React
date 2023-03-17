import "./App.css";
import { useState } from "react";
import AddTask from "./AddTask";
import Item from "./Item";

let currentId = 4;

function App() {
  const [taskList, setTaskList] = useState([
    { id: 1, name: `oprati prozore`, isDone: false },
    { id: 2, name: `task 2`, isDone: true },
    { id: 3, name: `bla bla bla`, isDone: false },
  ]);

  // Dodaj listu
  const handleAdd = (text) => {
    currentId++;
    const newTask = { id: currentId, name: text, isDone: false };
    const newTaskList = [newTask, ...taskList];
    setTaskList(newTaskList);
  };

  // Obrisi listu
  const handleDelete = (taskIdForDelete) => {
    const newList = taskList.filter((task) => task.id !== taskIdForDelete);
    setTaskList(newList);
  };

  // Done u undone i obrnuto
  const newTaskList = [...taskList];
  const handleStatusChange = (taskId) => {
    const task = taskList.find((task) => task.id === taskId);
    // if (task.isDone) {
    //   task.isDone = false;
    // } else {
    //   task.isDone = true;
    // }
    task.isDone = !task.isDone;
    setTaskList(newTaskList);
  };

  return (
    <div className="App">
      <h1>TODO App</h1>

      <button>Svi</button>
      <button>Aktivni</button>
      <button>Gotovi</button>
      <button>Obriši gotove</button>
      <div>
        <AddTask onAdd={handleAdd} />
        {taskList.map((taskItem) => (
          <Item
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            key={taskItem.id}
            task={taskItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
