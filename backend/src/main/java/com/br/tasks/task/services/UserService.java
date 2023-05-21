package com.br.tasks.task.services;

import com.br.tasks.task.dto.UserDTO;
import com.br.tasks.task.models.User;
import com.br.tasks.task.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@AllArgsConstructor
public class UserService {
  private UserRepository userRepository;
  private BCryptPasswordEncoder passwordEncoder;
  public UserDTO login(User user) {
    UserDTO userDto = new UserDTO();
    if(userRepository.existsById(user.getId())) {
      User userRepo =  userRepository.getReferenceById(user.getId());
      userDto.setUsername(userRepo.getUsername());
      userDto.setPassword(userRepo.getPassword());
      return userDto;
    }
    return userDto;
  }

  public User register(User user) {
    User newUser = User.builder()
            .password(passwordEncoder.encode(user.getPassword()))
            .username(user.getUsername())
            .build();
    return userRepository.save(newUser);
  }
}
