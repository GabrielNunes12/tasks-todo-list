import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function TasksList() {
  const [task, setTask] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/v1/tasks")
      .then((response) => setTask(response.data))
      .catch((error) => setTask(error));
  }, []);
  const handleEdit = (edit, id, task) => {
    console.log(edit);
    if (edit) {
      navigate("/tasks", { state: { isEdit: true, id: id, data: task } });
    }
  };
  return (
    <div>
      {task.length > 0
        ? task.map((task) => (
            <div key={task.id}>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
              <p>{task.isFinished ? "Finished" : "Not finished"}</p>
              <button onClick={() => handleEdit(true, task.id, task)}>
                Edit
              </button>
            </div>
          ))
        : "No tasks"}
    </div>
  );
}
