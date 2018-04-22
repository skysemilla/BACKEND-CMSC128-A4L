import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

// gets all pending fsr
router.get('/api/fsr/viewPending', async (req, res) => {
  try {
    const fsr = await Ctrl.getPendingFSR();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched FSRs',
      data: fsr
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

// gets all approved fsr
router.get('/api/fsr/viewApproved', async (req, res) => {
  try {
    const fsr = await Ctrl.getApprovedFSR();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched FSRs',
      data: fsr
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

// send to admin
router.post('/api/fsr/send', async (req, res) => {
  try {
    await Ctrl.sendToAdmin(req.body);

    res.status(200).json({
      status: 200,
      message: 'Successfully sent FSR'
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'FSR not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

export default router;
