package com.br.tasks.task.controllers;

import com.br.tasks.task.models.User;
import com.br.tasks.task.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/api/v1/users")
@RestController
@AllArgsConstructor
public class UserController {
  private UserService userService;
  @GetMapping
  public ResponseEntity<?> login(@RequestBody User user) {
    return ResponseEntity.ok().body(userService.login(user));
  }
  @Transactional
  @PostMapping
  public ResponseEntity<?> register(@RequestBody User user) {
    return ResponseEntity.ok().body(userService.register(user));
  }
}
