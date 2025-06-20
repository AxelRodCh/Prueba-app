CREATE DATABASE IF NOT EXISTS task_app;
USE task_app;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE tareas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  descripcion TEXT,
  estatus ENUM('pendiente', 'completado') DEFAULT 'pendiente',
  id_usuario INT NOT NULL,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);
