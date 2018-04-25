import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

const empidRegex = /^[0-9]{9}$/;
const nameRegex = /^[A-Za-z\-'\s]+$/;

// gets all pending fsr
router.post('/api/fsr/viewPending', async (req, res) => {
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
router.post('/api/fsr/viewApproved', async (req, res) => {
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

// get a pending fsr by id
router.post('/api/fsr/viewPendingById', async (req, res) => {
  if (req.body.empid.match(empidRegex)) {
    try {
      const data = await Ctrl.getPendingById(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully fetched FSRs',
        data: data
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'FSR not found';
          data = data;
          break;
        case 500:
          message = 'Internal server error';
          break;
      }
      res.status(status).json({ status, message });
    }
  }
});

// get a pending fsr by name
router.post('/api/fsr/viewPendingByName', async (req, res) => {
  if (req.body.name.match(nameRegex)) {
    try {
      const data = await Ctrl.getPendingByName(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully fetched FSRs',
        data: data
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'FSR not found';
          data: data;
          break;
        case 500:
          message = 'Internal server error';
          break;
      }
      res.status(status).json({ status, message });
    }
  }
});

// get an approved fsr by id
router.post('/api/fsr/viewApprovedById', async (req, res) => {
  if (req.body.empid.match(empidRegex)) {
    try {
      const data = await Ctrl.getApprovedById(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully fetched FSRs',
        data: data
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'FSR not found';
          data = data;
          break;
        case 500:
          message = 'Internal server error';
          break;
      }
      res.status(status).json({ status, message });
    }
  }
});

// get an approved fsr by name
router.post('/api/fsr/viewApprovedByName', async (req, res) => {
  if (req.body.name.match(nameRegex)) {
    try {
      const data = await Ctrl.getApprovedByName(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully fetched FSRs',
        data: data
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'FSR not found';
          data = data;
          break;
        case 500:
          message = 'Internal server error';
          break;
      }
      res.status(status).json({ status, message });
    }
  }
});

// send to admin
router.post('/api/fsr/send', async (req, res) => {
  if (req.body.empid.match(empidRegex)) {
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
  }
});

// rejects fsr
router.post('/api/fsr/reject', async (req, res) => {
  if (req.body.empid.match(empidRegex)) {
    try {
      await Ctrl.rejectFSR(req.body);

      res.status(200).json({
        status: 200,
        message: 'Successfully rejected FSR'
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
  }
});

export default router;
