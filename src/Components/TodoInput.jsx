import React from "react";

export const TodoInput = (props) => {
  const [inputText, setInputText] = React.useState("");
  const handleEnterPress = (e) => {
    if(e.keycode === 13){
      props.addList(inputText) 
      setInputText("")
  }
}
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter Your Todo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleEnterPress}
      />
       <button
        className="add-btn"onClick={() => {props.addList(inputText) ;setInputText("");}}>
        ADD Task
      </button> 
    </div>
  );
};
export default TodoInput;
