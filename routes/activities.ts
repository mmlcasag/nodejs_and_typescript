import express from 'express';

import { Activity, ActivitiesRepository } from '../models/activity';

const router = express.Router();

router.get('/', (req, res, next) => {
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
});

export default router;