import { useState } from "react";
import deleteIcon from "./assests/images/delete-icon.png";
import "./App.css";

function App() {
  // Initializing States
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedTodoList, setCompletedTodoList] = useState([]);

  // Event Handling Functions
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (todo.length) {
      setTodoList([...todoList, todo]);
    }
    setTodo("");
  };

  const handleCheckbox = (event, index) => {
    if (event.target.checked) {
      setCompletedTodoList([...completedTodoList, todoList[index]]);
      const newTodoList = todoList.filter((todo, idx) => idx !== index);
      console.log(newTodoList);
      setTodoList(newTodoList);
    }
  };

  const handleDelete = (index) => {
    const newCompletedTodoList = completedTodoList.filter(
      (todo, idx) => idx !== index
    );
    setCompletedTodoList(newCompletedTodoList);
  };

  return (
    <div className="main">
      <div className="container">
        <h1>ToDo App</h1>

        {/* Input Form */}
        <div className="input-todo">
          <form onSubmit={(event) => handleFormSubmit(event)}>
            <label htmlFor="">Add New Task</label>
            <input
              type="text"
              name=""
              id=""
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </div>

        {/* Display Todos */}
        <div className="tasks">
          <div className="todos-to-be-done">
            <div>
              <h1>Tasks to be Done</h1>
              {todoList.map((item, index) => (
                <div className="todo" key={index}>
                  <input
                    type="checkbox"
                    onChange={(event) => handleCheckbox(event, index)}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="todos-completed">
            <div>
              <h1>Completed Todos</h1>
              {completedTodoList.map((item, index) => (
                <div className="todo" key={index}>
                  {item}
                  <a onClick={() => handleDelete(index)}>
                    <img src={deleteIcon} alt="" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
