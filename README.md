# Prueba Técnica – Desarrollador Fullstack (Angular + Node.js + MySQL)

Este proyecto consiste en una aplicación Fullstack para la gestión de tareas por usuario. Permite registrar, autenticar y CRUD de tareas protegidas por JWT.

---

## Tecnologías utilizadas

- **Frontend:** Angular 12+ (TypeScript)
- **Backend:** Node.js + Express
- **Base de Datos:** MySQL
- **Autenticación:** JWT
- **ORM:** `mysql2`
- **Seguridad:** Middleware de autenticación
- **Documentación:** Este README 😄

---

## Estructura del proyecto

project-root/
├── frontend/ # Angular app
│ └── src/app/
│ ├── auth/
│ ├── tasks/
│ └── shared/
├── backend/ # Node.js app
│ ├── controllers/
│ ├── routes/
│ ├── middleware/
│ ├── db.js
│ └── server.js
└── prueba-app.sql # Script para base de datos


---

## Requisitos previos

- Node.js 18+ y npm
- Angular CLI (`npm install -g @angular/cli`)
- MySQL Server
- MySQL Workbench o consola

---

## Configuración de la base de datos

1. Abre **MySQL Workbench** o terminal MySQL.
2. Ejecuta el script `schema.sql` o este contenido:

```sql
CREATE DATABASE IF NOT EXISTS prueba-app;
USE prueba-app;

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

Funcionalidades
Backend (/auth, /tasks)
POST /auth/register: Registro de usuario

POST /auth/login: Devuelve token JWT

GET /tasks: Lista de tareas del usuario autenticado

POST /tasks: Crear tarea

PUT /tasks/:id: Editar tarea

DELETE /tasks/:id: Eliminar tarea

Frontend
Registro e inicio de sesión

Lista de tareas (protección con JWT)

Crear / Editar / Eliminar tareas

Filtro opcional por estado

Almacenamiento del token en localStorage

✅ Estado del proyecto
 Backend funcional con conexión a MySQL

 Autenticación con JWT

 Frontend Angular con formularios y rutas protegidas

 CRUD de tareas

 Interfaz básica y clara

 Documentación incluida (tú estás aquí)

 Desarrollado por Axel Andrés Rodríguez Chavarría para la prueba técnica de desarrollador
