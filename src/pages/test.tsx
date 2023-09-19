import { useState } from "react";

export default function Test() {
  const [toDoList, setToDoList] = useState<any>([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event: any) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      status: false,
    };
    return setToDoList([...toDoList, task]);
  };

  const deleteTask = (id: any) => {
    setToDoList(toDoList.filter((task: any) => task.id !== id));
  };

  const statusTask = (id: any) => {
    setToDoList(
      toDoList.map((task: any) => {
        if (task.id === id) {
          return task.status
            ? { ...task, status: false }
            : { ...task, status: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        {toDoList.map((task: any) => {
          // return (
          //   <Test
          //     taskName={task.taskName}
          //     id={task.id}
          //     status={task.status}
          //     deleteTask={deleteTask}
          //     statusTask={statusTask}
          //   />
          // );
        })}
      </div>
    </div>
  );
}
