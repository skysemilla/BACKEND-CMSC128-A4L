import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

router.post('/api/teachload/add', async (req, res) => {
  if (req.body.emp_id && req.body.noOfStudents && req.body.subject_code) {
    try {
      // await Ctrl.checkUser(req.body.empNo);
      // this checks if the empno is already assigned to a faculty
      const id = await Ctrl.addTeachLoad(req.body);
      const sample = await Ctrl.getTeachLoad({ teachingload_id: id });

      res.status(200).json({
        status: 200,
        message: 'Successfully created teaching load',
        data: sample
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

router.delete('/api/teachload/delete/:teachingload_id', async (req, res) => {
  try {
    const book = await Ctrl.getTeachLoad(req.params);
   await Ctrl.removeTeachLoad(req.params);

    res.status(200).json({
      status: 200,
      message: 'Successfully removed teach load',
      data: book
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Teach Load not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.put('/api/teachload/edit/', async (req, res) => {
  try {
    await Ctrl.editTeachLoad(req.body);
    const sample = await Ctrl.getTeachLoad({
      teachingload_id: req.body.teachingload_id
    });

    res.status(200).json({
      status: 200,
      message: 'Successfully edited teach load',
      data: sample
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Teach load not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.get('/api/teachload/view/:teachingload_id', async (req, res) => {
  try {
    const book = await Ctrl.getTeachLoad(req.params);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched teach load',
      data: book
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Teach load not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.get('/api/teachload/viewAll', async (req, res) => {
  try {
    const subjects = await Ctrl.getAllTeachLoad();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all teaching load',
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
