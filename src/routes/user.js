import express from 'express';
import getHome from '../controller/user.js'
import routes from './user.Routes.js'
const router = express.Router();

router.get('/', getHome)
router.use('/hallBooking', routes);

export default router;