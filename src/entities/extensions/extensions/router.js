import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

// gets services
router.get('/api/service', async (req, res) => {
  try {
    const services = await Ctrl.getServices();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all services',
      data: services
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

// get a service
router.get('/api/service/:id', async (req, res) => {
  try {
    const service = await Ctrl.getService(req.params);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched service',
      data: service
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Service not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

// add a service
router.post('/api/service', async (req, res) => {
  if (
    req.body.category &&
    req.body.title &&
    req.body.no_of_hours >= 0 &&
    req.body.no_of_participants >= 0 &&
    req.body.role &&
    req.body.credits >= 0
  ) {
    try {
      const id = await Ctrl.addService(req.body);
      const serviceAdded = await Ctrl.getService({ id: id });

      res.status(200).json({
        status: 200,
        message: 'Successfully created sample',
        data: serviceAdded
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

// removes a service
router.delete('/api/service/:id', async (req, res) => {
  try {
    const service = await Ctrl.getService(req.params);
    await Ctrl.removeService(req.params);

    res.status(200).json({
      status: 200,
      message: 'Successfully removed sample',
      data: service
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Cannot Delete: Service not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});


// edits a service
router.put('/api/service/', async (req, res) => {
  try {
    await Ctrl.editService(req.body);
    const serviceEdited = await Ctrl.getService({ id: req.body.id });

    res.status(200).json({
      status: 200,
      message: 'Successfully edited service',
      data: serviceEdited
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Service not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

export default router;