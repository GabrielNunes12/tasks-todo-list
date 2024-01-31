package com.br.tasks.task.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(onlyExplicitlyIncluded = true)
public class UserDTO {
  @ToString.Include
  private String username;
  private String password;
}
