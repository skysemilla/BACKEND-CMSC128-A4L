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

export default router;
