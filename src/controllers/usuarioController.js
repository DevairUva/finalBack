import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

function UsuarioController(app){

  app.get('/usuario', exibir)
  function exibir (req, res){
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

}

export default UsuarioController