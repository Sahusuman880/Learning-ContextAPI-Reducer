import { useState, useRef, useContext } from "react";
import styles from "./AddTodo.module.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-item-store";

function AddTodo() {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // function addName(event) {
  //   let newName = event.target.value;
  //   event.target.value = "";
  //   setTodoName(newName);
  //   noOfUpdtaes.current += 1;
  // }
  // function addDate(event) {
  //   let newDate = event.target.value;
  //   event.target.value = "";
  //   setTodoDate(newDate);
  //   console.log("no of updates are ", noOfUpdtaes);
  // }
  const contextObj = useContext(TodoItemsContext);
  const AddTodoItem = contextObj.addTodoItem;
  //or we can write
  // const { addTodoItem } = useContext(TodoItemsContext);

  function handleAddButton(event) {
    //called on add button click
    // console.log(event);
    event.preventDefault(); //for reload
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    AddTodoItem(todoName, todoDate);
    // setTodoName("");
    // setTodoDate(""); //after add button click all inpt value will be blank
  }
  return (
    <div className="container text-center">
      <form action="" onSubmit={handleAddButton}>
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              name=""
              ref={todoNameElement}
              id={styles.mytext}
              placeholder="Enter Todo Here"
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              name=""
              ref={dueDateElement}
              id={styles.mydate}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success kg-button">
              <IoMdAddCircleOutline />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
