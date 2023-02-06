import { useState } from "react";
import deleteIcon from "./assests/images/delete-icon.png";
import "./App.css";
import InputForm from "./components/InputForm";
import DisplayTodos from "./components/DisplayTodos";

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
        <InputForm
          todo={todo}
          setTodo={setTodo}
          handleFormSubmit={handleFormSubmit}
        />

        {/* Display Todos */}
        <DisplayTodos
          todoListData={todoList}
          handleCheckbox={handleCheckbox}
          completedTodoList={completedTodoList}
          handleDelete={handleDelete}
          deleteIcon={deleteIcon}
        />
      </div>
    </div>
  );
}

export default App;
