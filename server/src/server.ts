import express from 'express';
import { sendEmailRoute } from './routes/SendEmail';

const app = express();

app.use(express.json());
app.use(sendEmailRoute);

app.listen(3333, () =>
  console.log('======== !!! Server Running On Port: 3333!!! ========')
);
