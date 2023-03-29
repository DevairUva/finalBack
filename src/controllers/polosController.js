import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

function PolosController(app) {

  app.get('/polo', exibirPolos)
  function exibirPolos(req, res) {
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

  app.get('/polo/:polo', selecionarPolos)
  function selecionarPolos(req, res) {
    (async () => {
      const db = await open({
        filename: './src/infra/bd.db',
        driver: sqlite3.Database
      })
      const result = await db.all('SELECT * FROM polos where id_polo like ?', req.params.polo)
      res.send(result)
      db.close()
    })()
  }

}

export default PolosController