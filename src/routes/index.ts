import { Router, json } from 'express';
import appoitmentsRouter from './appoitments.routes';

const routes = Router();

routes.use(json());
routes.use('/appointments', appoitmentsRouter);

export default routes;
