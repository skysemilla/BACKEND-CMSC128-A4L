import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

// gets samples
router.post('/api/subject/viewAll', async (req, res) => {
  try {
    const subject = await Ctrl.getSubjects();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all subjects',
      data: subject
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

router.post('/api/subject/getsubjectid', async (req, res) => {
  try {
    const subject = await Ctrl.getSubjectByID(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched subject',
      data: subject
    }); 
  } catch (status) {
    let message = '';

    switch (status) {
      case 500:
        message = 'Internal server error';
        break;
    }

    res.status(status).json({ status, message });
  }
});

// gets sample
router.post('/api/subject/viewsubject', async (req, res) => {
  try {
    const subject = await Ctrl.getSubject(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched subject',
      data: subject
    }); 
  } catch (status) {
    let message = '';

    switch (status) {
      case 500:
        message = 'Internal server error';
        break;
    }

    res.status(status).json({ status, message });
  }
});

// add a sample
router.post('/api/subject/add', async (req, res) => {
  console.log(req.body);
  if (
    req.body.subject_code &&
    req.body.section_code &&
    req.body.isLecture &&
    req.body.isGraduate &&
    req.body.units &&
    req.body.room &&
    req.body.start_time &&
    req.body.end_time
  ) {
    try {
      const id = await Ctrl.addSubject(req.body);
      // console.log(id);
      // const subject = await Ctrl.getSubjectByID({ subject_id: id });

      res.status(200).json({
        status: 200,
        message: 'Successfully created subject',
        data: id
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

// removes a subject
router.post('/api/subject/delete', async (req, res) => {
  console.log(req.body);
  try {
    const subject = await Ctrl.getSubjectByID(req.body);
    await Ctrl.removeSubject(req.body);

    res.status(200).json({
      status: 200,
      message: 'Successfully removed subject',
      data: subject
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


// edits a subject
router.post('/api/subject/edit', async (req, res) => {
  console.log(req.body);
  try {
    await Ctrl.editSubject(req.body);
    const subject = await Ctrl.getSubjectByID(req.body);

    res.status(200).json({
      status: 200,
      message: 'Successfully edited subject',
      data: subject
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Subject not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

export default router;
