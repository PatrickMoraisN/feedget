import express from 'express';
import cors from 'cors';
import { sendEmailRoute } from './routes/SendEmail';

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));
app.use(sendEmailRoute);

app.listen(process.env.PORT || 3333, () =>
  console.log('======== !!! Server Running On Port: 3333!!! ========')
);
