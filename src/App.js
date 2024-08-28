import React, { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  // State to store the list of ToDo items
  const [listTodo, setListTodo] = useState(() => {
    // Retrieve the list from localStorage on initial render
    const savedTodos = localStorage.getItem("listTodo");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save the to-do list to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("listTodo", JSON.stringify(listTodo));
  }, [listTodo]);

  // Function to add a new item to the ToDo list
  const AddList = (inputText) => {
    if (inputText.trim() !== "") {
      setListTodo((prevList) => [...prevList, inputText]);
    }
  };

  // Function to delete an item from the ToDo list
  const deleteListItem = (key) => {
    setListTodo((prevList) => prevList.filter((_, index) => index !== key));
  };

  // Function to edit an item in the ToDo list
  const editListItem = (key, newText) => {
    setListTodo((prevList) =>
      prevList.map((item, index) => (index === key ? newText : item))
    );
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={AddList} />
        <h1 className="App-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => (
          <TodoList
            item={listItem}
            key={i}
            index={i}
            deletItem={deleteListItem}
            editItem={editListItem} // Pass the edit function to TodoList
          />
        ))}
      </div>
    </div>
  );
}

export default App;
