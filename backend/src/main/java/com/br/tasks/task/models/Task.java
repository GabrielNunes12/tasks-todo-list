package com.br.tasks.task.models;

import com.br.tasks.task.enums.TaskEnum;

import javax.persistence.*;

@Entity
@Table(name = "task")
public class Task {

  @Id
  @GeneratedValue(strategy= GenerationType.AUTO)
  private Long id;
  private String title;
  private String description;
  private boolean isFinished;
  @Enumerated(EnumType.STRING)
  private TaskEnum taskEnum;

  public Task() {
  }

  public Task(Long id, String title, String description, boolean isFinished, TaskEnum taskEnum) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isFinished = isFinished;
    this.taskEnum = TaskEnum.valueOf(isFinished ? TaskEnum.CONCLUIDO.name() : TaskEnum.EM_PROGRESSO.name());
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public boolean isFinished() {
    return isFinished;
  }

  public void setFinished(boolean finished) {
    isFinished = finished;
  }

  public TaskEnum getTaskEnum() {
    return taskEnum;
  }

  public void setTaskEnum(TaskEnum taskEnum) {
    this.taskEnum = taskEnum;
  }
}
