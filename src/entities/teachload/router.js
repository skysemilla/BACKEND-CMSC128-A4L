import { Router } from 'express';
import * as Ctrl from './controller';
import { isNull } from 'util';

const router = Router();

router.post('/api/teachload/add', async (req, res) => {
  if (
    req.body.no_of_students &&
    req.body.subject_code &&
    req.body.section_code 
  ) {
    try {
      const existHourTeachLoad = await Ctrl.checkExistHourTeachLoad(req.body, req.session.user);    //If value > 1 then there is an overlapping schedule with the hour
      const existDayTeachLoad = await Ctrl.checkExistDayTeachLoad(req.body, req.session.user);      //If value > 1 then there is an overlapping schedule within the day
      const existHourConsultation = await Ctrl.checkExistHourConsultation(req.body, req.session.user);
      const existDayConsultation = await Ctrl.checkExistDayConsultation(req.body, req.session.user);
      if((existDayConsultation==0||existHourConsultation==0)&&(existHourTeachLoad==0||existDayTeachLoad==0)){
        const id = await Ctrl.addTeachLoad(req.body, req.session.user);
        const sample = await Ctrl.getTeachLoad({teachingload_id: id});

        res.status(200).json({
          status: 200,
          message: 'Successfully created teaching load',
          data: sample
        });
      }else{
        res.status(400).json({
          status: 400,
          message: 'Overlapping schedule error'
        });
      }
     
        
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

router.post('/api/teachload/delete/', async (req, res) => {
  if (req.body.teachingload_id) {
    try {
      const book = await Ctrl.getTeachLoad(req.body);
      await Ctrl.removeTeachLoad(req.body);

      res.status(200).json({
        status: 200,
        message: 'Successfully removed teach load',
        data: book
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

router.post('/api/teachload/edit/', async (req, res) => {
  if (
    req.body.no_of_students &&
    req.body.subject_code &&
    req.body.section_code &&
    req.body.teachingload_id
  ) {
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
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

router.post('/api/teachingload/viewByTeachloadId', async (req, res) => {
  console.log(req.body);
  if(
    req.session.user &&
    req.body.teachingload_id
  ){
    try {
      const book = await Ctrl.getTeachLoad(req.body.teachingload_id);
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
  }else{
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
  });

router.post('/api/teachload/viewempadmin', async (req, res) => {
  console.log(req.body.emp_id);
  if(req.body.emp_id){    
    try {
      const book = await Ctrl.getTeachEmpAdmin(req.body);
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
  }
});


router.post('/api/teachload/view', async (req, res) => {
  try {
    const book = await Ctrl.getTeachEmp(req.session.user);
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

router.post('/api/teachload/editAddTeachLoadUnits/', async (req, res) => {
  if (
    req.body.units
  ) {
    try {
      await Ctrl.editAddTeachLoadUnits(req.body, req.session.user);
      const sample = await Ctrl.getEmployee(req.session.user);

      res.status(200).json({
        status: 200,
        message: 'Successfully edited teach load',
        data: sample
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

router.post('/api/teachload/editRemoveTeachLoadUnits/', async (req, res) => {
  if (
    req.body.units
  ) {
    try {
      await Ctrl.editRemoveTeachLoadUnits(req.body, req.session.user);
      const sample = await Ctrl.getEmployee(req.session.user);

      res.status(200).json({
        status: 200,
        message: 'Successfully edited teach load',
        data: sample
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

router.post('/api/teachingload/viewByTeachloadId', async (req, res) => {
  console.log(req.body);
  if(
    req.body.teachingload_id
  ){
    try {
      const book = await Ctrl.getTeachLoad(req.body);
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
  }else{
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
  });

router.post('/api/teachload/subjectByTeachId', async (req, res) => {
  // console.log("BODY: "+req.body.teachingload_id);
  if(
    req.body.teachingload_id
  ){
  try {
    const book = await Ctrl.getSubjectByTeachLoad(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched subject',
      data: book
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
}else{
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

export default router;
