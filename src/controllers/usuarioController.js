import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

function UsuarioController(app){

  app.get('/usuario', exibirUsuarios)
  function exibirUsuarios (req, res){
    (async () =>{
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
  function postUsuario(req, res){
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

  // app.get('/tarefa', exibirTarefas)
  // function exibirTarefas (req, res){
  //   (async () =>{
  //     const db = await open({
  //       filename: './src/infra/bdTarefas.db',
  //       driver: sqlite3.Database
  //     })
  //     const result = await db.all('SELECT * FROM Tecnologia')
  //     res.send(result)
  //     db.close()
  //   })()
  // }

}

export default UsuarioController