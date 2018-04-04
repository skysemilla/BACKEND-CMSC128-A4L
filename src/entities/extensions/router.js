import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

// gets activitites
router.get('/api/activity/viewAll', async (req, res) => {
  try {
    const activities = await Ctrl.getActivities();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all Activities',
      data: activities
    });
  } catch (status) {
    let message = '';

    switch (status) {
      case 500:
        message = 'Internal server error';
        break;
    }

    res.status(200).json({ status, message });
  }
});

// get a activity
router.post('/api/activity/view', async (req, res) => {
  try {
    const activity = await Ctrl.getActivity(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched activity',
      data: activity
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Activity not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

// add a activity
router.post('/api/activity/add', async (req, res) => {
  if (
    req.body.category &&
    req.body.title &&
    req.body.no_of_hours >= 0 &&
    req.body.no_of_participants >= 0 &&
    req.body.role &&
    req.body.credits >= 0
  ) {
    try {
      const id = await Ctrl.addActivity(req.body);
      const activityAdded = await Ctrl.getActivity({ id: id });

      res.status(200).json({
        status: 200,
        message: 'Successfully created sample',
        data: activityAdded
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

// removes a service
router.post('/api/activity/delete', async (req, res) => {
  try {
    const activity = await Ctrl.getActivity(req.body);
    await Ctrl.removeActivity(req.body);

    res.status(200).json({
      status: 200,
      message: 'Successfully removed Activity',
      data: activity
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Cannot Delete: Activity not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

// edits a Activity 
router.post('/api/activity/edit', async (req, res) => {
  try {
    await Ctrl.editActivity(req.body);
   const activityEdited = await Ctrl.getActivity({ id: req.body.activity_id });

    res.status(200).json({
      status: 200,
      message: 'Successfully edited activity',
     data: activityEdited
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Activity not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

export default router;
