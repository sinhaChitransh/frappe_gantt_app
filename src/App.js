import React from "react";
import ReactGantt from "gantt-for-react";

import "./App.css";

function App() {
  const tasks = [
    {
      id: "Task 1",
      name: "Redesign website",
      start: "2016-12-28",
      end: "2016-12-31",
      progress: 20,
      dependencies: "",
      custom_class: "bar-milestone",
    },
    {
      id: "Task 2",
      name: "Redesign website",
      start: "2016-12-29",
      end: "2017-01-18",
      progress: 20,
      dependencies: "Task 1",
      custom_class: "bar-pink bar-milestone",
    },
    {
      id: "Task 3",
      name: "Redesign website",
      start: "2017-01-10",
      end: "2017-01-28",
      progress: 20,
      dependencies: "Task 2",
      custom_class: "bar-orange bar-milestone",
    },
    {
      id: "Task 4",
      name: "Redesign website",
      start: "2017-01-28",
      end: "2017-01-31",
      progress: 20,
      dependencies: "Task 2",
      custom_class: "bar-milestone",
    },
    {
      id: "Task 5",
      name: "Redesign website",
      start: "2017-01-30",
      end: "2017-02-10",
      progress: 20,
      dependencies: "Task 2, Task 3, Task 4",
      custom_class: "bar-milestone",
    },
  ];
  const taskNameOnClick = (task) => {
    return `
      <div class="details-container">
        <h5>${task.name}</h5>
      </div>
    `;
  };

  return (
    <div className="App">
      <h1>Frappe Gant Chart</h1>
      <ReactGantt
        columnWidth="20px"
        arrow_curve="5"
        tasks={tasks}
        viewMode={"Week"}
        customPopupHtml={taskNameOnClick}
        onClick={(task) => console.log(task)}
        onDateChange={(task, start, end) => console.log(task, start, end)}
        onProgressChange={(task, progress) => console.log(task, progress)}
        onTasksChange={(tasks) => console.log(tasks)}
      />
    </div>
  );
}

export default App;
