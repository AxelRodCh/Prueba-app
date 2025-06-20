const db = require('../db');

exports.getTasks = async (req, res) => {
  const [rows] = await db.execute('SELECT * FROM tareas WHERE id_usuario = ?', [req.userId]);
  res.json(rows);
};

exports.createTask = async (req, res) => {
  const { titulo, descripcion, estatus } = req.body;
  await db.execute(
    'INSERT INTO tareas (titulo, descripcion, estatus, id_usuario) VALUES (?, ?, ?, ?)',
    [titulo, descripcion, estatus, req.userId]
  );
  res.status(201).json({ mensaje: 'Tarea creada' });
};

exports.updateTask = async (req, res) => {
  const { titulo, descripcion, estatus } = req.body;
  const { id } = req.params;
  await db.execute(
    'UPDATE tareas SET titulo=?, descripcion=?, estatus=? WHERE id=? AND id_usuario=?',
    [titulo, descripcion, estatus, id, req.userId]
  );
  res.json({ mensaje: 'Tarea actualizada' });
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  await db.execute(
    'DELETE FROM tareas WHERE id=? AND id_usuario=?',
    [id, req.userId]
  );
  res.json({ mensaje: 'Tarea eliminada' });
};
