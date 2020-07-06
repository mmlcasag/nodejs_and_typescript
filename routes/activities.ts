import express from 'express';

import { Activity } from '../models/activity';

let ActivitiesRepository: Array<Activity> = [];

type RequestParams = { id: string };
type RequestBody = { description: string };

const router = express.Router();

router.get('/activities', (req, res, next) => {
    res.status(200).json({ 
        result: 'success',
        message: 'Activities fetched successfully',
        activities: ActivitiesRepository
    });
});

router.post('/activity', (req, res, next) => {
    const body = req.body as RequestBody;
    const description = body.description;

    const newActivity: Activity = {
        id: new Date().toISOString(),
        description: description
    };

    ActivitiesRepository.push(newActivity);

    res.status(201).json({
        result: 'success',
        message: 'Activity created successfully',
        activity: newActivity
    });
});

router.put('/activity/:id', (req, res, next) => {
    const params = req.params as RequestParams;
    const activityId = params.id;
    
    const body = req.body as RequestBody;
    const description = body.description;

    const activityIndex = ActivitiesRepository.findIndex(activity => activity.id === activityId);

    if (activityIndex >= 0) {
        ActivitiesRepository[activityIndex] = {
            id: ActivitiesRepository[activityIndex].id,
            description: description
        };
        return res.status(200).json({
            result: 'success',
            message: 'Activity updated successfully',
            activity: ActivitiesRepository[activityIndex]
        });
    } else {
        return res.status(404).json({ 
            result: 'error',
            message: 'Could not find the required activity'
        });
    }
});

router.delete('/activity/:id', (req, res, next) => {
    const params = req.params as RequestParams;
    const activityId = params.id;
    
    ActivitiesRepository = ActivitiesRepository.filter(activity => activity.id !== activityId);
    
    return res.status(200).json({
        result: 'success',
        message: 'Activity deleted successfully'
    });
});

export default router;