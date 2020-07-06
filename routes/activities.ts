import express from 'express';

import { Activity } from '../models/activity';

let ActivitiesRepository: Array<Activity> = [];

const router = express.Router();

router.get('/activities', (req, res, next) => {
    res.status(200).json({ 
        activities: ActivitiesRepository
    });
});

router.post('/activity', (req, res, next) => {
    const newActivity: Activity = {
        id: new Date().toISOString(),
        description: req.body.description
    }

    ActivitiesRepository.push(newActivity);

    res.status(201).json({
        result: 'success',
        message: 'Activity created successfully'
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
            message: 'Activity updated successfully'
        });
    } else {
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

export default router;