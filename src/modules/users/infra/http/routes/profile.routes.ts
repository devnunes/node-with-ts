import { Router } from 'express';
import ProfileController from '../controllers/ProfileController';

import ensureAthentication from '../middlewares/ensureAthenticatication';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAthentication);

profileRouter.get('/', profileController.show);
profileRouter.put('/', profileController.update);

export default profileRouter;
