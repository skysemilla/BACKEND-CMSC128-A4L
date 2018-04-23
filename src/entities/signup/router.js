import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();
const nameRegex = /^[A-Za-z\-'\s]+$/;
const alphanumRegex = /^[A-Za-z0-9]+$/;
const passRegex = /^[A-Za-z0-9\-_.]+$/;
const empIdRegex = /^[0-9]{9}$/;
const emailRegex = /^[^;"']+@up.edu.ph$/;

router.post('/api/signup', async (req, res) => {
  if (
    req.body.emp_id &&
    req.body.emp_id.match(empIdRegex) &&
    req.body.username &&
    req.body.username.match(alphanumRegex) &&
    req.body.password &&
    req.body.password.length >= 6 &&
    req.body.password.length <= 16 &&
    req.body.password.match(passRegex) &&
    req.body.type &&
    req.body.f_name &&
    req.body.f_name.match(nameRegex) &&
    req.body.m_name &&
    req.body.m_name.match(nameRegex) &&
    req.body.l_name &&
    req.body.l_name.match(nameRegex) &&
    req.body.department &&
    req.body.college &&
    req.body.emp_type &&
    req.body.is_full_time &&
    req.body.email &&
    req.body.email.match(emailRegex)
  ) {
    try {
      const id = await Ctrl.addEmployee(req.body);
      // const employee = await Ctrl.getEmployee({ id: id });

      res.status(200).json({
        status: 200,
        message: 'Successfully created employee'
        // data: employee
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

// get users
router.post('/api/checkValid', async (req, res) => {
  if (
    req.body.empid &&
    req.body.empid.match(empIdRegex) &&
    req.body.username &&
    req.body.username.match(alphanumRegex) &&
    req.body.email &&
    req.body.email.match(emailRegex)
  ) {
    try {
      const data = await Ctrl.checkValid(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully fetched users',
        data: data
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'User not found';
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
