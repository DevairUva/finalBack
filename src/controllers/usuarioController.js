import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

function UsuarioController(app) {

  app.get('/usuario', exibirUsuarios)
  function exibirUsuarios(req, res) {
    (async () => {
      const db = await open({
        filename: './src/infra/bd.db',
        driver: sqlite3.Database
      })
      const result = await db.all('SELECT * FROM usuarios')
      res.send(result)
      db.close()
    })()
  }

  app.post('/usuario', postUsuario)
  function postUsuario(req, res) {
    (async () => {
      const db = await open({
        filename: './src/infra/bd.db',
        driver: sqlite3.Database
      })
      await db.run(`INSERT INTO usuarios(nome, email, senha) VALUES(?, ?, ?)`, req.body.nome, req.body.email, req.body.senha)
      res.send(`Usuário ${req.body.nome} inserido`)
      db.close()
    })()
  }

  app.put('/usuario/id/:id', Editar)
  function Editar(req, res) {
    (async () =>{
      const db = await open({
        filename: './src/infra/bd.db',
        driver: sqlite3.Database
      })
      const result = await db.all('SELECT * FROM usuarios where id_usuario like ?', req.params.id)
      if(result != ''){
        res.send(`Usuário ${req.params.id} atualizado`)
        await db.run('UPDATE usuarios SET nome=?, email=?, senha=? WHERE id_usuario= ?', req.body.nome, req.body.email, req.body.senha, req.params.id)
      } else {
        res.send(`Usuário não encontrado`)
      }
      db.close()
    })()
  }

  app.delete('/usuario/id/:id', Excluir)
  function Excluir(req, res){
    (async () =>{
      const db = await open({
        filename: './src/infra/bd.db',
        driver: sqlite3.Database
      })
      const result = await db.all('SELECT * FROM usuarios where id_usuario like ?', req.params.id)
      if(result != ''){
        res.send(`Usuário ${req.params.id} excluido`)
        await db.run('DELETE from usuarios WHERE id_usuario= ?', req.params.id)
      } else {
        res.send(`Usuário não encontrado`)
      }
      db.close()
    })()
  }

}

export default UsuarioController