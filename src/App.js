import "./App.css";
import AddToDo from "./Components/AddToDo";
import { useState } from "react";
import ToDoList from "./Components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (items) => {
    setTodos(
      todos.concat({
        items,
        id: Date.now(),
        completed: false,
        sublist: ""
      })
    );
  };

  const CreateSub = (id, sublist) => {
    todos.map((el) => {
      if (el.id == id) {
        el.sublist = sublist;
      }
    });
    setTodos([...todos]);
  };

  const removeSublist = (id) => {
    todos.map((el) => {
      if (el.id == id) {
        delete el.sublist;
      }
      setTodos([...todos]);
    });
    console.log(todos);
  };

  const removeToDo = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const toggleToDo = (id) => {
    setTodos(
      todos.map((el) => {
        if (el.id == id) {
          el.complete = !el.complete;
        }
        return el;
      })
    );
  };

  const itemsUp = (id, index) => {
    todos[index - 1] = todos.splice(index, 1, todos[index - 1])[0];
    setTodos([...todos]);
  };

  const itemsDown = (id, index) => {
    todos[index + 1] = todos.splice(index, 1, todos[index + 1])[0];
    setTodos([...todos]);
  };

  return (
    <div className="wrapper">
      <h3 className="title">ToDoList</h3>
      <AddToDo onCreate={addToDo} />
      <ToDoList
        listItems={todos}
        removeToDo={removeToDo}
        toggleToDo={toggleToDo}
        itemsUp={itemsUp}
        itemsDown={itemsDown}
        onCreateSublist={CreateSub}
        removeSublist={removeSublist}
      />
    </div>
  );
}

export default App;
