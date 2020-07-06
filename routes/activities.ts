import express from 'express';

const router = express.Router();

const activitiesModel: Array<string> = [];

router.get('/', (req, res, next) => {
    res.status(200).json({ 
        activities: activitiesModel
    });
});

export default router;