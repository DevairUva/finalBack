import express  from 'express';
import UsuarioController from './controllers/usuarioController.js';

const app = express();

app.use(express.json());

UsuarioController(app)

export default app;