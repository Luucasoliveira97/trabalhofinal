import express from 'express';
import crudRoutes from './routes/bookRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/biblioteca',crudRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta PORT`);
});