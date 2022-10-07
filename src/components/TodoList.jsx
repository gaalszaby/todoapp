import React from "react";
import { motion } from "framer-motion";

const variants = {
  complete: { opacity: 0.8, scale: 0.95 },
  notComplete: { opacity: 1, scale: 1 },
};

const TodoList = (props) => {
  const removeItemFunction = (event) => {
    const taskId = event.target.parentElement.id;
    props.removeItem(taskId);
  };

  const taskDoneFunction = (event) => {
    const taskId = event.target.parentElement.id;
    props.taskDone(taskId);
  };

  return (
    <ul className="todo-list">
      {props.taskList.map((task) => (
        <motion.li
          key={task.id}
          className={`todo-items ${task.complete ? "task-done" : ""}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={task.complete ? "complete" : "notComplete"}
          transition={{ duration: 0.3 }}
          variants={variants}
        >
          <p>{task.taskName}</p>
          <div id={task.id} className="task-buttons">
            {task.complete && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="task-notdoneBtn"
                onClick={taskDoneFunction}
              >
                Not done
              </motion.button>
            )}
            {!task.complete && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="task-doneBtn"
                onClick={taskDoneFunction}
              >
                Done!
              </motion.button>
            )}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="task-removeBtn"
              onClick={removeItemFunction}
            >
              Remove
            </motion.button>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default TodoList;
