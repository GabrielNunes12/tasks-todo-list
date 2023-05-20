package com.br.tasks.task.controllers;

import com.br.tasks.task.models.Task;
import com.br.tasks.task.services.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/api/v1/tasks")
@RestController
@AllArgsConstructor
public class TaskController {
  private final TaskService taskService;
  @GetMapping
  public ResponseEntity<?> getAllTasks() {
    return ResponseEntity.ok().body(taskService.getAllTasks());
  }
  @PostMapping
  public ResponseEntity<?> insertTasks(@RequestBody Task task) {
    return ResponseEntity.ok().body(taskService.insertTasks(task));
  }
  @PostMapping("/update/{id}")
  public ResponseEntity<?> updateTask(@PathVariable Long id, @RequestBody Task newTask) {
    return ResponseEntity.ok().body(taskService.updateTask(id, newTask));
  }
  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteTask(@PathVariable Long id) {
    String hasError = taskService.deleteTask(id);
    return ResponseEntity.ok().body(hasError);
  }
}
