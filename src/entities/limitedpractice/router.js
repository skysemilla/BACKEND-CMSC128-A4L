import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

router.post('/api/limitedpractice/add', async (req, res) => {
  if (
    req.body.haveApplied &&
    req.body.date_submitted &&
    req.body.emp_id
  ) {
    try {
      // const sample = await Ctrl.getLimitedPractice({ limited_practice_id: id });
      await Ctrl.addLimitedPractice(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully created limited practice',
        // data: sample
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});


router.post('/api/limitedpractice/delete', async (req, res) => {
  if (
    req.body.limited_practice_id
  ) {
    try {
      // const book = await Ctrl.getLimitedPractice(req.body);
      await Ctrl.removeLimitedPractice(req.body);
  
      res.status(200).json({
        status: 200,
        message: 'Successfully removed limited practice',
        // data: book
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});



router.post('/api/limitedpractice/edit', async (req, res) => {
  if (
    req.body.haveApplied &&
    req.body.date_submitted &&
    req.body.emp_id
  ) {
    try {
      await Ctrl.editLimitedPractice(req.body);
      // const sample = await Ctrl.getLimitedPractice({
      //   limited_practice_id: req.body.limited_practice_id
      // });
      res.status(200).json({
        status: 200,
        message: 'Successfully edited limited practice',
        // data: sample
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

router.post('/api/limitedpractice/view', async (req, res) => {
  try {
    const book = await Ctrl.getLimitedPractice(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched limited practice',
      data: book
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Limited practice not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.get('/api/limitedpractice/viewAll', async (req, res) => {
  try {
    const subjects = await Ctrl.getAllLimitedPractice();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all limited practice',
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
