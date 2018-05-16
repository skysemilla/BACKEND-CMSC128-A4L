import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

router.post('/api/studyload/add', async (req, res) => {
  // console.log(req.body);
  if (req.body.credits &&
      req.body.courseno &&
      req.session.user.emp_id &&
      req.body.start_time &&
      req.body.end_time &&
      req.body.school &&
      req.body.days
     ){
    try {
      // await Ctrl.checkUser(req.body.empNo);
      // this checks if the empno is already assigned to a faculty
      const id = await Ctrl.addStudyLoad(req.body,req.session.user);
      res.status(200).json({
        status: 200,
        message: 'Successfully created study load'//,
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

router.post('/api/studyload/delete', async (req, res) => {
  console.log(req.body);
  if (req.body.studyload_id) {
    try {
      const book = await Ctrl.getStudyLoad([req.body.studyload_id]);
      await Ctrl.removeStudyLoad(req.body);
      await Ctrl.removeStudyLoadDays(req.body.studyload_id);

      res.status(200).json({
        status: 200,
        message: 'Successfully removed study load',
        data: book
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

router.post('/api/studyload/edit', async (req, res) => {
  console.log(req.body);
  if (
    req.body.studyload_id &&
    req.body.credits &&
    req.body.courseno &&
    req.body.start_time &&
    req.body.school &&
    req.body.days &&
    req.session.user
  ) {
    try {
      await Ctrl.editStudyLoad(req.body,req.session.user.emp_id);
      const sample = await Ctrl.getStudyLoad( 
        [req.body.studyload_id
      ]);
      await Ctrl.removeStudyLoadDays(req.body.studyload_id);
      await Ctrl.addDays(req.body.studyload_id,req.body.days);
      res.status(200).json({
        status: 200,
        message: 'Successfully edited study load',
        // data: sample
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

router.post('/api/studyload/view', async (req, res) => {
  try {
    const book = await Ctrl.getStudyEmp(req.session.user);
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
router.post('/api/studyload/viewByStudyloadId', async (req, res) => {
  console.log(req.body);
  if(
    req.session.user &&
    req.body.studyload_id
  ){
    try {
      const book = await Ctrl.getStudyLoad(req.body.studyload_id);
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
router.get('/api/studyload/viewStudyCredentials', async (req, res) => {
  try {
    const book = await Ctrl.getStudyCredentials(req.session.user);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched study credentials',
      data: book
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Credentials not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.post('/api/studyload/editStudyCredentials', async (req, res) => {
  console.log(req.body);
  if (
    req.body.studyleave &&
    req.body.fellowship &&
    req.session.user
  ) {
    try {
      await Ctrl.editStudyCredentials(req.body,req.session.user.emp_id);
      res.status(200).json({
        status: 200,
        message: 'Successfully edited study credentials',
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});
router.post('/api/studyload/getDays',async(req,res)=>{
  if(req.body.studyload_id &&
      req.session.user.emp_id
  ){
   try{
    const out = await Ctrl.getDays(req.body.studyload_id);
    res.status(200).json({
      status: 200,
      message: 'Successfully got days',
      data: out
    });
  } catch (status) {
    res.status(500).json({ status: 500, message: 'Internal server error' });
  }
  }else{
    res.status(400).json({ status: 400, message: 'Bad request' });    
  }
})
router.post('/api/studyload/getStudyLoadFSR',async(req,res)=>{
  if(req.body.emp_id &&
      req.session.user.emp_id
  ){
   try{
    const out = await Ctrl.getStudyEmp(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully got Studyload',
      data: out
    });
  } catch (status) {
    res.status(500).json({ status: 500, message: 'Internal server error' });
  }
  }else{
    res.status(400).json({ status: 400, message: 'Bad request' });    
  }
})
router.post('/api/studyload/getStudyLoadCredentialsFSR',async(req,res)=>{
  if(req.body.emp_id &&
      req.session.user.emp_id
  ){
    console.log(req.body);

    try{
    const out = await Ctrl.getStudyCredentials(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully got Studyload',
      data: out
    });
  } catch (status) {
    res.status(500).json({ status: 500, message: 'Internal server error' });
  }
  }else{
    res.status(400).json({ status: 400, message: 'Bad request' });    
  }
})
router.post('/api/studyload/getDaysFSR',async(req,res)=>{
  if(req.body.studyload_id &&
      req.body.emp_id &&
      req.session.user.emp_id
  ){
   try{
    const out = await Ctrl.getDays(req.body.studyload_id);
    res.status(200).json({
      status: 200,
      message: 'Successfully got days',
      data: out
    });
  } catch (status) {
    res.status(500).json({ status: 500, message: 'Internal server error' });
  }
  }else{
    res.status(400).json({ status: 400, message: 'Bad request' });    
  }
})
export default router;
