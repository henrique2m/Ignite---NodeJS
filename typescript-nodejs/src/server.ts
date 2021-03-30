import express from 'express';
import { CreateCourse } from './routes';

const app = express();

app.use(express.json());

app.get('/',  CreateCourse);

app.listen(3333, () => {console.log('Staring server!')})