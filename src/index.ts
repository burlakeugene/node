import express from 'express';
import userRouter from './routers/users.routers';
import './db/index';
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/api', userRouter);
app.get('/', (req, res) => {
  res.send('index');
});

app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
