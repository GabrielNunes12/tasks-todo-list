package com.br.tasks.task.repositories;

import com.br.tasks.task.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
