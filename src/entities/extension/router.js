import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

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

// get a extensions
router.post('/api/extension/view', async (req, res) => {
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
});

// add a extension
router.post('/api/extension/add', async (req, res) => {
  if (
    req.body.extension_type &&
    req.body.extension_name &&
    req.body.no_of_hours >= 0 &&
    req.body.no_of_participants >= 0 &&
    req.body.extension_role &&
    req.body.credit_unit >= 0 &&
    req.body.funding_agency
  ) {
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
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

// removes an extension
router.post('/api/extension/delete', async (req, res) => {
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
});

// edits a extension
router.post('/api/extension/edit', async (req, res) => {
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
});

export default router;

