import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

// gets samples
router.get('/api/sample', async (req, res) => {
  try {
    const books = await Ctrl.getSamples();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all samples',
      data: books
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

// get a sample
router.get('/api/sample/:id', async (req, res) => {
  try {
    const book = await Ctrl.getSample(req.params);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched sample',
      data: book
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Sample not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

// add a sample
router.post('/api/sample', async (req, res) => {
  if (
    req.body.name &&
    req.body.age >= 0 &&
    req.body.info
  ) {
    try {
      const id = await Ctrl.addSample(req.body);
      const sample = await Ctrl.getSample({ id: id });

      res.status(200).json({
        status: 200,
        message: 'Successfully created sample',
        data: sample
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

// removes a sample
router.delete('/api/sample/:id', async (req, res) => {
  try {
    const book = await Ctrl.getSample(req.params);
    await Ctrl.removeSample(req.params);

    res.status(200).json({
      status: 200,
      message: 'Successfully removed sample',
      data: book
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Sample not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});


// edits a sample
router.put('/api/sample/', async (req, res) => {
  try {
    await Ctrl.editSample(req.body);
    const sample = await Ctrl.getSample({ id: req.body.id });

    res.status(200).json({
      status: 200,
      message: 'Successfully edited sample',
      data: sample
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Sample not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

export default router;
