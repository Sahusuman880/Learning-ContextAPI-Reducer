import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  items: [],
  addTodoItem: () => {},
  deleteItem: () => {},
});

const todoItemreducer = (currentTodoItem, action) => {
  let newItem = currentTodoItem;
  if (action.type === "NEW_ITEM") {
    let newItemObj = {};
    newItemObj.name = action.payload.itemName;
    newItemObj.dueDate = action.payload.itemDueDate;
    newItem = [...currentTodoItem, newItemObj];
  } else if (action.type === "DELETE_ITEM") {
    let newItemArray = [...currentTodoItem];
    newItemArray.splice(action.payload, 1);
    newItem = newItemArray;
  }
  return newItem;
};

const TodoItemContextProvider = (props) => {
  const [todoItems, dispatchTodoItem] = useReducer(todoItemreducer, []);
  function addTodoItem(itemName, itemDueDate) {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };

    dispatchTodoItem(newItemAction);
    //
    // setAddItem(newItemArray);
  }
  function deleteItem(index) {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: index,
    };

    dispatchTodoItem(deleteItemAction);

    // let newItem = [...addItem];
    // newItem.splice(index, 1);
    // setAddItem(newItem);
  }
  return (
    <TodoItemsContext.Provider
      value={{
        items: todoItems,
        addTodoItem: addTodoItem,
        deleteItem: deleteItem,
      }}
    >
      {props.children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemContextProvider;
