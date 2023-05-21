import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export default function TasksList() {
  const [task, setTask] = useState([]);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [order, setOrder] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/v1/tasks")
      .then((response) => setTask(response.data))
      .catch((error) => setTask(error));
  }, []);
  const handleEdit = (edit, id, task) => {
    if (edit) {
      navigate("/tasks", { state: { isEdit: true, id: id, data: task } });
    }
  };
  const handleDelete = (id) => {
    setModal(true);
    axios
      .delete(`http://localhost:8090/api/v1/tasks/${id}`)
      .then((response) => setMessage(response.data))
      .catch((error) => setMessage(error));
  };
  const handleCloseModal = () => {
    setModal(false);
    window.location.reload();
  };
  const orderByAsc = () => {
    setOrder("asc");
  };
  const orderByDesc = () => {
    setOrder("desc");
  };
  useEffect(() => {
    if (order === "asc") {
      setTask([...task].sort((a, b) => a.title.localeCompare(b.title)));
    } else if (order === "desc") {
      setTask([...task].sort((a, b) => b.title.localeCompare(a.title)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
      {location.state?.isExpiredToken ? (
        <div>
          <h1> You must log in before accessing this page </h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <button onClick={() => orderByAsc()}>Order by ASC</button>
          <button onClick={() => orderByDesc()}>Order by DESC</button>
          {task.length > 0
            ? task.map((task) => (
                <div key={task.id}>
                  <h1>{task.title}</h1>
                  <p>{task.description}</p>
                  <p>
                    {task.taskEnum === "EM_PROGRESSO" ? "IN PROGRESS" : "DONE"}
                  </p>
                  <button onClick={() => handleEdit(true, task.id, task)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
              ))
            : "No tasks"}
          {modal && (
            <>
              <button onClick={() => handleCloseModal()}> Close </button>
              <div>
                <h1>{message}</h1>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
