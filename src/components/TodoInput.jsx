import React, { useState } from "react";

const TodoInput = (props) => {
  const [taskInput, setTaskInput] = useState("");

  const taskInputHandler = (event) => {
    setTaskInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!taskInput.trim()) {
      setTaskInput(() => "");
      return;
    } else if (taskInput.length > 30) {
      let trimmedTask = taskInput.slice(0, 30) + "...";
      props.addToTasklist(trimmedTask);
    } else {
      props.addToTasklist(taskInput);
    }
    setTaskInput(() => "");
  };

  return (
    <>
      <form className="task-form" onSubmit={submitHandler}>
        <input
          className="task-input"
          type="text"
          placeholder="Add a task"
          onChange={taskInputHandler}
          value={taskInput}
        />
        <button type="submit" className="task-addBtn">
          +
        </button>
      </form>
    </>
  );
};

export default TodoInput;
