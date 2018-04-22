import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();
const nameRegex = /^[A-Za-z\-'\s]+$/;
const alphanumRegex = /^[A-Za-z0-9]+$/;
const passRegex = /^[A-Za-z0-9\-_.]+$/;
const empIdRegex = /^[0-9]{9}$/;
const emailRegex = /^[^;"']+@up.edu.ph$/;

// edits the faculty
router.post('/api/faculty/edit', async (req, res) => {
  if (
    req.body.empid &&
    req.body.empid.match(empIdRegex) &&
    req.body.username &&
    req.body.username.match(alphanumRegex) &&
    req.body.password &&
    req.body.password.length >= 6 &&
    req.body.password.length <= 16 &&
    req.body.password.match(passRegex) &&
    req.body.fname &&
    req.body.fname.match(nameRegex) &&
    req.body.mname &&
    req.body.mname.match(nameRegex) &&
    req.body.lname &&
    req.body.lname.match(nameRegex) &&
    req.body.emptype &&
    req.body.emptypeno &&
    req.body.email &&
    req.body.email.match(emailRegex) &&
    req.body.college &&
    req.body.dept &&
    req.body.is_full_time
  ) {
    try {
      await Ctrl.editFaculty(req.body);

      res.status(200).json({
        status: 200,
        message: 'Successfully edited faculty'
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'Faculty not found';
          break;
        case 500:
          message = 'Internal server error';
          break;
      }
      res.status(status).json({ status, message });
    }
  }
});

// edits the semester information
router.post('/api/faculty/termEdit', async (req, res) => {
  if (
    req.body.year &&
    req.body.term &&
    req.body.empid &&
    req.body.empid.match(empIdRegex) &&
    req.body.isnew
  ) {
    try {
      await Ctrl.editTerm(req.body);

      res.status(200).json({
        status: 200,
        message: 'Successfully edited term information'
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'Faculty not found';
          break;
        case 500:
          message = 'Internal server error';
          break;
      }
      res.status(status).json({ status, message });
    }
  }
});

// get the faculty data
router.post('/api/faculty/data', async (req, res) => {
  if (req.body.empid && req.body.empid.match(empIdRegex)) {
    try {
      const data = await Ctrl.getData(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully fetched faculty data',
        data: data
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'Faculty not found';
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
