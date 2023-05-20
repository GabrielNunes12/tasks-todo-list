import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
export default function Tasks() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const location = useLocation();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (location.state?.isEdit && location.state?.id) {
      const updatedTask = {
        title: title,
        description: description,
        finished: isFinished,
      };
      axios.post(
        `http://localhost:8090/api/v1/tasks/update/${location.state?.data.id}`,
        updatedTask
      );
    } else {
      const newTask = {
        title: title,
        description: description,
        finished: isFinished,
      };
      axios.post("http://localhost:8090/api/v1/tasks", newTask);
    }
  };
  useEffect(() => {
    if (location.state?.isEdit && location.state?.id) {
      setTitle(location.state.data.title);
      setDescription(location.state.data.description);
      setIsFinished(location.state.data.isFinished);
    }
  }, [location.state]);

  return (
    <div>
      <h1>
        {location.state?.isEdit && location.state?.id ? "Edit task" : "Tasks"}
      </h1>
      <form>
        <input
          type="text"
          placeholder="Task's title "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Your task</label>
        <input
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          limit={200}
        />
        <label>is it finished?</label>
        <input
          type="checkbox"
          checked={isFinished}
          onChange={(e) => setIsFinished(e.target.checked)}
        />
        <button type="submit" onClick={handleSubmit}>
          {location.state?.isEdit && location.state?.id
            ? "Update task"
            : "Add task"}
        </button>
      </form>
    </div>
  );
}
