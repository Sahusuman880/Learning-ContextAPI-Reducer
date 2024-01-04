import { TodoItemsContext } from "../store/todo-item-store";
import { useContext } from "react";
import styles from "./EmptyMessage.module.css";
function EmptyMessage(props) {
  const contextObj = useContext(TodoItemsContext);
  const TodoItems = contextObj.items;
  return (
    <p className={styles.deleteButton}>
      {TodoItems.length === 0 ? "Add Some Todo Item" : null}
    </p>
  );
}
export default EmptyMessage;
