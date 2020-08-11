import { Router } from 'express';

import ensureAthenticatication from '@modules/users/infra/http/middlewares/ensureAthenticatication';

import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRouter.use(ensureAthenticatication);

appointmentsRouter.post('/', appointmentsController.create);
appointmentsRouter.get('/my-schedule', providerAppointmentsController.index);

export default appointmentsRouter;
