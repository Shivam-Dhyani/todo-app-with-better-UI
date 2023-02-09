import editIcon from "../assests/images/edit-icon.png";
import deleteIcon from "../assests/images/delete-icon.png";

const DisplayTodos = (props) => {
  const {
    todoListData,
    handleCheckbox,
    completedTodoList,
    handleDelete,
    handleEdit,
  } = props;
  return (
    <div className="tasks">
      <div className="todos-to-be-done">
        <div>
          <h1>Tasks to be Done</h1>

          {todoListData?.map((item, index) => (
            <div className="todo" key={index}>
              <div>
                <input
                  type="checkbox"
                  onChange={(event) => handleCheckbox(event, index)}
                />
                <span>{item}</span>
              </div>
              <a onClick={() => handleEdit(index)}>
                <img src={editIcon} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="todos-completed">
        <div>
          <h1>Completed Todos</h1>
          {completedTodoList.map((item, index) => (
            <div className="todo" key={index}>
              <span>{item}</span>
              <a onClick={() => handleDelete(index)}>
                <img src={deleteIcon} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayTodos;
