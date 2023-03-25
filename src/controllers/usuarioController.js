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

}

export default UsuarioController