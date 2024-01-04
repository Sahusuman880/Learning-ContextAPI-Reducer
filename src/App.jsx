import "./Todo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem1 from "./Components/TodoItem1";
import EmptyMessage from "./Components/emptyMessage";
import TodoItemContextProvider from "./store/todo-item-store";

function App() {
  return (
    <TodoItemContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <EmptyMessage />
        <div className="item-container">
          <TodoItem1 />
          {/* <TodoItem2 /> */}
        </div>
      </center>
    </TodoItemContextProvider>
  );
}
export default App;
