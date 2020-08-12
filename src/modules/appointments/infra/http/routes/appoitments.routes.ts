import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAthenticatication from '@modules/users/infra/http/middlewares/ensureAthenticatication';

import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRouter.use(ensureAthenticatication);

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date().required(),
    },
  }),
  appointmentsController.create,
);
appointmentsRouter.get('/my-schedule', providerAppointmentsController.index);

export default appointmentsRouter;
