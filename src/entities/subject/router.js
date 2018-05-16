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
      var id = -1;
      var start = req.body.start_time;
      var end = req.body.end_time;
      var arr_start = start.split(":");
      var arr_end = end.split(":");
      if(Number(arr_end[0])>Number(arr_start[0])){
        // console.log("SUCCESS");
        id = await Ctrl.addSubject(req.body);
      }else{
        if(Number(arr_end[0]==Number(arr_start[0]))){
          if(Number(arr_end[1]>Number(arr_start[1]))){
            // console.log("Success");
            id = await Ctrl.addSubject(req.body);
          }else{
            // console.log("Fail");
            res.status(400).json({ status: 400, message: 'Bad request'});
          }
        }
      }

      if(id!=-1){
        res.status(200).json({
          status: 200,
          message: 'Successfully created subject',
          data: id
        });
      }else{
        res.stats(404).json({
          status: 404,
          message: 'Bad request'
        });
      }

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
