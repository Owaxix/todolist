import React, { useState } from "react";

export const TodoList = (props) => {
  // State to manage the editing mode and edited text
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.item);

  // Handle the double-click to enable editing mode
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle saving the edited text when Enter is pressed or input loses focus
  const handleSave = () => {
    props.editItem(props.index, editText); // Save the edited text
    setIsEditing(false); // Exit editing mode
  };

  return (
    <div className="list-item">
      {isEditing ? (
        // Show input field if in editing mode
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === "Enter" && handleSave()} // Save on Enter
          className="edit-input"
          autoFocus
        />
      ) : (
        // Show the item text if not in editing mode
        <span>{props.item}</span>
      )}
      <span className="icons">
        <i
          className="fa-solid fa-pen-to-square icon-edit"
          onClick={handleEditClick}
        ></i>
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={(e) => {
            props.deletItem(props.index);
          }}
        ></i>
      </span>
    </div>
  );
};

export default TodoList;
