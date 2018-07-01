import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();
// Get all Lanes
router.route('/lanes').get(LaneController.getLanes);
// add a new lane
router.route('/lanes').post(LaneController.addLane);
// delete lane by laneID
router.route('/lanes/:laneId').delete(LaneController.deleteLane);
// Edit a lane name  by laneId
router.route('/lanes/:laneId').put(LaneController.editLane);
export default router;
