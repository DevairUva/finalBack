import express  from 'express';
import cors from 'cors';
import UsuarioController from './controllers/usuarioController.js';
import PolosController from './controllers/polosController.js'

const app = express();

app.use(express.json());

app.use(cors())

UsuarioController(app)
PolosController(app)

export default app;