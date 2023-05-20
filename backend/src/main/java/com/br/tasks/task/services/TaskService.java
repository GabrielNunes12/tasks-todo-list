package com.br.tasks.task.services;

import com.br.tasks.task.models.Task;
import com.br.tasks.task.repositories.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
@AllArgsConstructor
public class TaskService {
  private final TaskRepository taskRepository;
  public List<Task> getAllTasks() {
    return taskRepository.findAll();
  }

  public Task insertTasks(Task task) {
    Task newTask = new Task();
    newTask.setDescription(task.getDescription());
    newTask.setTitle(task.getTitle());
    newTask.setFinished(task.isFinished());
    return taskRepository.save(newTask);
  }

  public Task updateTask(Long id, Task newTask) {
    Task oldTask = taskRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    oldTask.setTitle(newTask.getTitle());
    oldTask.setDescription(newTask.getDescription());
    oldTask.setFinished(newTask.isFinished());
    taskRepository.save(oldTask);
    return oldTask;
  }

  public String deleteTask(Long id) {
    if(taskRepository.findById(id).isPresent()) {
      taskRepository.deleteById(id);
      return "Task deleted sucessfully";
    } else {
      return "Error!";
    }
  }
}
