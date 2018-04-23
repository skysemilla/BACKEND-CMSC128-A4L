import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();
const alphanumRegex = /^[a-zA-Z0-9 ]*[a-zA-Z ][a-zA-Z0-9 ]*$/;
const numRegex = /^[0-9\s\-']+$/;
const creditRegex = /^[0-9]$/;
const empidRegex = /^[0-9]{9}$/;
const nameRegex = /^[A-Za-z\-'\s]+$/;

// gets extension
router.post('/api/extension/viewByID', async (req, res) => {
  try {
    const extensions = await Ctrl.getExtensionByID(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all Extensions',
      data: extensions
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

router.post('/api/extension/viewByID', async (req, res) => {
  if(req.body.id){
    try {
      const extension = await Ctrl.getExtensionByID(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully fetched Extension',
        data: extension
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'Extension not found';
          break;
        case 500:
          message = 'Internal server error';
          break;
      }
      res.status(status).json({ status, message });
    }
  }
});

// get a extensions
router.post('/api/extension/view', async (req, res) => {
  if(req.body.id){
    try {
      const extension = await Ctrl.getExtension(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully fetched Extension',
        data: extension
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'Extension not found';
          break;
        case 500:
          message = 'Internal server error';
          break;
      }
      res.status(status).json({ status, message });
    }
  }
});

// credit_unit,
//   extension_name,
//   extension_type,
//   no_of_hours,
//   no_of_participants,
//   extension_role,
//   start_time,
//   end_time,
//   funding_agency,
//   emp_id

// add a extension
router.post('/api/extension/add', async (req, res) => {
  if (
    req.body.credit_unit >= 0 &&
    req.body.extension_type &&
    req.body.extension_name &&
    req.body.no_of_participants >= 0 &&
    req.body.extension_role &&
    req.body.funding_agency &&
    (req.body.funding_agency.match(numRegex) === false)
  ){
    try {
      const id = await Ctrl.addExtension(req.body);
      // const extensionAdded = await Ctrl.getExtension({ id: id });

      res.status(200).json({
        status: 200,
        message: 'Successfully added Extension',
        // data: extensionAdded
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else{
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

// removes an extension
router.post('/api/extension/delete', async (req, res) => {
  if(req.body.id){
    try {
      // const extension = await Ctrl.getExtension(req.body);
      await Ctrl.removeExtension(req.body);

      res.status(200).json({
        status: 200,
        message: 'Successfully removed sample',
        // data: extension
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'Cannot Delete: Extension not found';
          break;
        case 500:
          message = 'Internal server error';
          break;
      }
      res.status(status).json({ status, message });
    }
  }
});

// edits a extension
router.post('/api/extension/edit', async (req, res) => {
  if(req.body.id){
    try {
      await Ctrl.editExtension(req.body);
      // const extensionEdited = await Ctrl.getExtension({ id: req.body.extension_id });

      res.status(200).json({
        status: 200,
        message: 'Successfully edited extension',
        // data: extensionEdited
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'Extension not found';
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
