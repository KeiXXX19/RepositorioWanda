import sqlite3

def buscar_usuario(email):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    
    # Vulnerabilidad: Concatenación directa / f-string en la consulta SQL
    query = f"SELECT * FROM usuarios WHERE correo = '{email}'"
    
    cursor.execute(query)
    resultado = cursor.fetchall()
    conn.close()
    
    return resultado
