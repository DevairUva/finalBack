import express  from 'express';
import cors from 'cors';
import UsuarioController from './controllers/usuarioController.js';

const app = express();

app.use(express.json());

app.use(cors())

UsuarioController(app)

export default app;