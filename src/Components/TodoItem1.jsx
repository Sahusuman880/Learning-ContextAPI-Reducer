import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-item-store";
import { useContext } from "react";
function TodoItem1() {
  const contextObj = useContext(TodoItemsContext);
  const todoItem = contextObj.items;
  const deleteItems = contextObj.deleteItem;
  // console.log(todoItemFromContext);
  return (
    <div className="container ">
      {todoItem.map((element, index) => {
        return (
          <>
            <div className="row kg-row">
              <div className="col-6">{element.name}</div>
              <div className="col-4">{element.dueDate}</div>
              <div className="col-2">
                <button
                  type="button"
                  className="btn btn-danger kg-button"
                  onClick={() => deleteItems(index)}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
export default TodoItem1;
