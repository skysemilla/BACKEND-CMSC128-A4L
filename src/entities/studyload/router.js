import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

router.post('/api/studyload/add', async (req, res) => {
  if (
    req.body.degree &&
    req.body.university &&
    req.body.isFullTime &&
    req.body.credits &&
    req.body.emp_id &&
    req.body.subject_code
  ) {
    try {
      // await Ctrl.checkUser(req.body.empNo);
      // this checks if the empno is already assigned to a faculty
      const id = await Ctrl.addStudyLoad(req.body);
      const sample = await Ctrl.getStudyLoad({ studyload_id: id });

      res.status(200).json({
        status: 200,
        message: 'Successfully created study load',
        data: sample
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

router.delete('/api/studyload/delete/:studyload_id', async (req, res) => {
  try {
    const book = await Ctrl.getStudyLoad(req.params);
    await Ctrl.removeStudyLoad(req.params);

    res.status(200).json({
      status: 200,
      message: 'Successfully removed study load',
      data: book
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Study Load not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.put('/api/studyload/edit', async (req, res) => {
  try {
    await Ctrl.editStudyLoad(req.body);
    const sample = await Ctrl.getStudyLoad({
      studyload_id: req.body.studyload_id
    });

    res.status(200).json({
      status: 200,
      message: 'Successfully edited study load',
      data: sample
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Study load not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.get('/api/studyload/view/:studyload_id', async (req, res) => {
  try {
    const book = await Ctrl.getStudyLoad(req.params);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched study load',
      data: book
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Study load not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.get('/api/studyload/viewAll', async (req, res) => {
  try {
    const subjects = await Ctrl.getAllStudyLoad();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all studyload',
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
