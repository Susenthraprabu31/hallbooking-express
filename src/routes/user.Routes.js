import userController from '../controller/user.Controller.js'
import express from 'express';
let router = express.Router();

router.post('/createRoom', userController.createRoom);
router.post('/roomBooking', userController.roomBooking);
router.get('/roomDetails', userController.roomDetails);
router.get('/customerDetails', userController.customerDetails);
router.get('/customerHistory/:customerName', userController.customerHistory);

export default router