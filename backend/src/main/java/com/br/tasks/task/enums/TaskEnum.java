package com.br.tasks.task.enums;

public enum TaskEnum {
  CONCLUIDO("Concluída", "CONCLUIDA"),
  EM_PROGRESSO("Em andamento", "EM_ANDAMENTO");

  private String name;
  private String code;
  TaskEnum(String name, String code) {
    this.name = name;
    this.code = code;
  }
}
