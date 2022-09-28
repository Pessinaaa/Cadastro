async function connect(){
    if(global.connection && global.connect.state !== 'disconnected'){
        return global.connection
    }
    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection("mysql://root:alunofatec@localhost:3306/WebII")
    console.log("Conectado ao MySQL!")
    global.connection = connection
    return connection
}

// BUSCAR NA TABELA USUÁRIO
async function selectUsuario(){
    const conn = await connect()
    const [rows] = await conn.query('SELECT * FROM usuario;')
    return rows
}

// INSERIR NA TABELA USUÁRIO
async function insertUsuario(usuario){
    const conn = await connect()
    const sql = 'INSERT INTO usuario(nome, senha) VALUES (?, ?);'
    const values = [usuario.nome, usuario.senha]
    return await conn.query(sql, values)
}

// DELETAR DA TABELA USUÁRIO
async function deleteUsuario(id){
    const conn = await connect()
    const sql = 'DELETE FROM usuario WHERE id=?;'
    return await conn.query(sql, [id])
}

// ATUALIZAR NA TABELA USUÁRIO
async function updateUsuario(id, usuario){
    const conn = await connect()
    const sql = 'UPDATE usuario SET nome=?, senha=? WHERE id=?'
    const values = [usuario.nome, usuario.senha, id]
    return await conn.query(sql, values)
}

module.exports = {selectUsuario, insertUsuario, deleteUsuario}