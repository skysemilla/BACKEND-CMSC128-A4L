import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

// gets a publication by id
router.get('/api/publication/:id', async (req, res) => {
  try {
    const publication = await Ctrl.getPublication(req.params);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched publication',
      data: publication
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Publication not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

// gets publications
router.get('/api/publication', async (req, res) => {
  try {
    const publications = await Ctrl.getPublications();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all publications',
      data: publications
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


// add a publication
router.post('/api/publication', async (req, res) => {
  if (
    req.body.credit_units >=0 &&
    req.body.category &&
    req.body.funding &&
    req.body.title &&
    req.body.role &&
    req.body.start_date &&
    req.body.end_date
  ) {
    try {
      const id = await Ctrl.addPublication(req.body);
      const publication = await Ctrl.getPublication({ id: id });

      res.status(200).json({
        status: 200,
        message: 'Successfully created publication',
        data: publication
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

// add a coworker
router.post('/api/publication', async (req, res) => {
  if (
    req.body.publication_id
  ) {
    try {
      await Ctrl.addCoworker(req.body);
      const row = Ctrl.checkIfExisting(req.body);

      res.status(200).json({
        status: 200,
        message: 'Successfully added coworker',
        data: row
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

// removes a publication
router.delete('/api/publication/:id', async (req, res) => {
  try {
    const publication = await Ctrl.getPublication(req.params);
    await Ctrl.removePublication(req.params);

    res.status(200).json({
      status: 200,
      message: 'Successfully removed publication',
      data: publication
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Publication not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});


// edits a publication
router.put('/api/publication/', async (req, res) => {
  try {
    await Ctrl.editPublication(req.body);
    const publication = await Ctrl.getPublication({ id: req.body.id });

    res.status(200).json({
      status: 200,
      message: 'Successfully edited publication',
      data: publication
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Publication not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

export default router;
