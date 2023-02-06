import React from "react";

const InputForm = ({ todo, setTodo, handleFormSubmit }) => {
  return (
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
  );
};

export default InputForm;
