import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

router.post('/api/position/add', async (req, res) => {
  if (
    req.body.office &&
    req.body.credit_units &&
    req.body.emp_id
  ) {
    try {  
      const id = await Ctrl.addPosition(req.body);
      // const sample = await Ctrl.getPosition({ id });

      res.status(200).json({
        status: 200,
        message: 'Successfully added position',
        // data: sample

      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

router.post('/api/position/delete', async (req, res) => {
  try {
    const consultation = await Ctrl.getPosition(req.body);
    await Ctrl.removePosition(req.body);

    res.status(200).json({
      status: 200,
      message: 'Successfully removed position',
      data: consultation
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Position not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

//edit a position
router.put('/api/position/edit', async (req, res) => {
  try {
    await Ctrl.editPosition(req.body);
    const positionEdited = await Ctrl.getPosition({ id: req.body.id });

    res.status(200).json({
      status: 200,
      message: 'Successfully edited position',
      data: positionEdited
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

router.post('/api/position/view', async (req, res) => {
  try {
    const book = await Ctrl.getPosition(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched position',
      data: book
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Position not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});


router.get('/api/position/viewAll', async (req, res) => {
  try {
    const subjects = await Ctrl.getAllPositions();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all positions',
      data: subjects
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

export default router;
