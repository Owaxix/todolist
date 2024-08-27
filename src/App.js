import React from "react";

// TodoInput component for adding new tasks to the todo list
export const TodoInput = (props) => {
  // State to store the text input value
  const [inputText, setInputText] = React.useState("");

  // Function to handle Enter key press for adding a new task
  const handleEnterPress = (e) => {
    if (e.keycode === 13) {
      // Check if the Enter key is pressed
      props.addList(inputText); // Call the addList function passed via props
      setInputText(""); // Clear the input field
    }
  };

  return (
    <div className="input-container">
      {/* Input field for entering the task */}
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter Your Todo"
        value={inputText} // Bind the input value to the inputText state
        onChange={(e) => setInputText(e.target.value)} // Update inputText on change
        onKeyDown={handleEnterPress} // Handle Enter key press
      />
      {/* Button to add the task */}
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText); // Call the addList function on button click
          setInputText(""); // Clear the input field
        }}
      >
        ADD Task
      </button>
    </div>
  );
};

export default TodoInput;
