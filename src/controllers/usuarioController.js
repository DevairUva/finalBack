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

  app.get('/polo', exibirPolos)
  function exibirPolos (req, res){
    (async () =>{
      const db = await open({
        filename: './src/infra/bd.db',
        driver: sqlite3.Database
      })
      const result = await db.all('SELECT * FROM polos')
      res.send(result)
      db.close()
    })()
  }
  app.get('/polo/:polo', exibirPolos)
  function exibirPolos (req, res){
    (async () =>{
      const db = await open({
        filename: './src/infra/bd.db',
        driver: sqlite3.Database
      })
      const result = await db.all('SELECT * FROM polos where id_polo like ?', req.params.polo)
      res.send(result)
      db.close()
    })()
  }

  app.get('/tarefa', exibirTarefas)
  function exibirTarefas (req, res){
    (async () =>{
      const db = await open({
        filename: './src/infra/bdTarefas.db',
        driver: sqlite3.Database
      })
      const result = await db.all('SELECT * FROM Tecnologia')
      res.send(result)
      db.close()
    })()
  }

}

export default UsuarioController