import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();
const empidRegex = /^[0-9]{9}$/;
const nameRegex = /^[A-Za-z\-'\s]+$/;

// enable faculty
router.post('/api/admin/enable', async (req, res) => {
  if (req.body.empid.match(empidRegex)) {
    try {
      await Ctrl.enableFaculty(req.body);

      res.status(200).json({
        status: 200,
        message: 'Successfully enabled faculty'
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

// disable faculty
router.post('/api/admin/disable', async (req, res) => {
  if (req.body.empid.match(empidRegex)) {
    try {
      await Ctrl.disableFaculty(req.body);

      res.status(200).json({
        status: 200,
        message: 'Successfully disabled faculty'
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

// get a faculty by id
router.post('/api/faculty/searchById', async (req, res) => {
  if (req.body.empid.match(empidRegex)) {
    try {
      const data = await Ctrl.getFacultyById(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully fetched faculty',
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

// get a faculty by name
router.post('/api/faculty/searchByName', async (req, res) => {
  if (req.body.name.match(nameRegex)) {
    try {
      const data = await Ctrl.getFacultyByName(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully fetched faculties',
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
