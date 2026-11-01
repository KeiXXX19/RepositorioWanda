const mysql = require('mysql2/promise');

// Configuración de la conexión a la base de datos (reemplaza con tus credenciales o pool)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tu_password',
  database: 'db_logistics'
});

/**
 * Busca un usuario por correo electrónico utilizando una consulta parametrizada
 * para prevenir ataques de Inyección SQL.
 * @param {string} correo - Correo electrónico del usuario a buscar
 */
async function buscarUsuario(correo) {
  try {
    // Uso de marcadores de posición (?) para sanitizar automáticamente el parámetro
    const query = 'SELECT * FROM usuarios WHERE correo = ?';
    
    // Ejecución segura pasando los parámetros en un arreglo
    const [rows] = await pool.execute(query, [correo]);
    
    return rows;
  } catch (err) {
    console.error('❌ Error ejecutando la consulta:', err.message);
    throw err;
  }
}

module.exports = { buscarUsuario };
