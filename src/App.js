import { useEffect, useState } from "react";
import deleteIcon from "./assests/images/delete-icon.png";
import "./App.css";
import InputForm from "./components/InputForm";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  // Initializing States
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedTodoList, setCompletedTodoList] = useState([]);
  const [editTodoId, setEditTodoId] = useState("");

  useEffect(() => {});

  // Event Handling Functions
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (editTodoId) {
      if (todo.length) {
        const newTodoList = [...todoList];
        newTodoList[editTodoId] = todo;
        setTodoList(newTodoList);
      }
      setEditTodoId("");
    } else if (todo.length) {
      setTodoList([...todoList, todo]);
    }
    setTodo("");
  };

  const handleCheckbox = (event, index) => {
    if (editTodoId === index) {
      alert("This Todo is in Edit Mode!!");
      event.target.checked = false;
    } else {
      setCompletedTodoList([...completedTodoList, todoList[index]]);
      const newTodoList = todoList.filter((todo, idx) => idx !== index);
      console.log(newTodoList);
      setTodoList(newTodoList);
      event.target.checked = false;
    }
  };

  const handleDelete = (index) => {
    const newCompletedTodoList = completedTodoList.filter(
      (todo, idx) => idx !== index
    );
    setCompletedTodoList(newCompletedTodoList);
  };

  const handleEdit = (index) => {
    setEditTodoId(index);
    setTodo(todoList[index]);
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
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
