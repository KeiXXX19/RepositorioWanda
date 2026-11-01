function buscarUsuario(correo) {
  const sql = "SELECT * FROM usuarios WHERE correo = '" + correo + "'";
  return db.query(sql);
}
