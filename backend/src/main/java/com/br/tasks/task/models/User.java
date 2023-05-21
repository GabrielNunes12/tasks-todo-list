package com.br.tasks.task.models;

import lombok.Builder;
import lombok.Getter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Table(name = "user", schema = "security")
@Builder
public class User implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String username;
  private String password;

  @OneToMany
  private List<Task> taskList = new ArrayList<>();

  public User(Long id, String username, String password, List<Task> taskList) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.taskList = taskList;
  }

  public User(String username, String password) {
    this.username = username;
    this.password = password;
  }

  public User() {
  }
}
