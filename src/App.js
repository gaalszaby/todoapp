import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import CardWrapper from "./components/UI/CardWrapper";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasklist", []);

  const addToTasklist = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.random(),
        taskName: task,
        complete: false,
      },
    ]);
  };

  const removeFromTasklist = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => +task.id !== +id));
  };

  const taskDoneHandler = (id) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => +task.id === +id);
    task.complete = !task.complete;
    setTasks(() => newTasks);
  };

  return (
    <>
      <h1 className="title">Task Tracker</h1>
      <CardWrapper>
        <TodoInput addToTasklist={addToTasklist} />
      </CardWrapper>
      <CardWrapper>
        {tasks.length === 0 ? (
          <p className="notasks">You Have no tasks!</p>
        ) : (
          <TodoList
            taskList={tasks}
            removeItem={removeFromTasklist}
            taskDone={taskDoneHandler}
          />
        )}
      </CardWrapper>
    </>
  );
}

export default App;
