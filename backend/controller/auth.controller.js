const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req, res) => {
  const { nombre, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await db.execute(
    'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
    [nombre, email, hashed]
  );
  res.status(201).json({ mensaje: 'Usuario registrado' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const [rows] = await db.execute('SELECT * FROM usuarios WHERE email = ?', [email]);
  const user = rows[0];
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ mensaje: 'Credenciales inválidas' });
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
};
