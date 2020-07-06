"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let ActivitiesRepository = [];
const router = express_1.default.Router();
router.get('/activities', (req, res, next) => {
    res.status(200).json({
        result: 'success',
        message: 'Activities fetched successfully',
        activities: ActivitiesRepository
    });
});
router.post('/activity', (req, res, next) => {
    const newActivity = {
        id: new Date().toISOString(),
        description: req.body.description
    };
    ActivitiesRepository.push(newActivity);
    res.status(201).json({
        result: 'success',
        message: 'Activity created successfully',
        activity: newActivity
    });
});
router.put('/activity/:id', (req, res, next) => {
    const activityId = req.params.id;
    const activityIndex = ActivitiesRepository.findIndex(activity => activity.id === activityId);
    if (activityIndex >= 0) {
        ActivitiesRepository[activityIndex] = {
            id: ActivitiesRepository[activityIndex].id,
            description: req.body.description
        };
        return res.status(200).json({
            result: 'success',
            message: 'Activity updated successfully',
            activity: ActivitiesRepository[activityIndex]
        });
    }
    else {
        return res.status(404).json({
            result: 'error',
            message: 'Could not find the required activity'
        });
    }
});
router.delete('/activity/:id', (req, res, next) => {
    const activityId = req.params.id;
    ActivitiesRepository = ActivitiesRepository.filter(activity => activity.id !== activityId);
    return res.status(200).json({
        result: 'success',
        message: 'Activity deleted successfully'
    });
});
exports.default = router;
