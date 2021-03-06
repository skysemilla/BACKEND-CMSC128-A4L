import { Router } from 'express';
import * as Ctrl from './controller';
var multer = require('multer');

const router = Router();
const alphanumRegex = /^[a-zA-Z0-9 ]*[a-zA-Z ][a-zA-Z0-9 ]*$/;
const numRegex = /^[0-9\s\-']+$/;
const creditRegex = /^[0-9]$/;
const empidRegex = /^[0-9]{9}$/;

// gets a publication by id
router.post('/api/publication/view', async (req, res) => {
  if (req.body.id) {
    try {
      const publication = await Ctrl.getPublication(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully fetched publication',
        data: publication
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'Publication not found';
          break;
        case 500:
          message = 'Internal server error';
          break;
      }
      res.status(status).json({ status, message });
    }
  }
});

// gets publications
router.post('/api/publication/viewAll', async (req, res) => {
  if (req.body.empid.match(empidRegex)) {
    try {
      const publications = await Ctrl.getPublications(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully fetched all publications',
        data: publications
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
  }
});

// add a publication
router.post('/api/publication/add', async (req, res) => {
  if (
    req.body.category &&
    req.body.subcategory &&
    req.body.title &&
    !req.body.title.match(numRegex) &&
    req.body.title.match(alphanumRegex) &&
    req.body.credit_units >= 0 &&
    req.body.credit_units.match(creditRegex)
  ) {
    try {
      const id = await Ctrl.addPublication(req.body);
      console.log('title');
      console.log(req.body.title);
      // const log = await Ctrl.addPublicationLog(req.body.title);
      // const publication = await Ctrl.getPublication({ id: id });

      res.status(200).json({
        status: 200,
        message: 'Successfully created publication',
        data: id
        // data: log
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

// add a coworker
router.post('/api/coworker/add', async (req, res) => {
  if (req.body.publication_id) {
    try {
      await Ctrl.addCoworker(req.body);
      // const row = Ctrl.checkIfExisting(req.body);

      res.status(200).json({
        status: 200,
        message: 'Successfully added coworker'
        // data: row
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

// removes a publication
router.post('/api/publication/delete', async (req, res) => {
  if (req.body.id) {
    try {
      const publication = await Ctrl.getPublication(req.body);
      await Ctrl.removePublication(req.body);

      res.status(200).json({
        status: 200,
        message: 'Successfully removed publication',
        data: publication
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'Publication not found';
          break;
        case 500:
          message = 'Internal server error';
          break;
      }
      res.status(status).json({ status, message });
    }
  }
});

// edits a publication
router.post('/api/publication/edit', async (req, res) => {
  if (
    req.body.category &&
    req.body.subcategory &&
    req.body.title &&
    !req.body.title.match(numRegex) &&
    req.body.title.match(alphanumRegex) &&
    req.body.credit_units >= 0 &&
    req.body.credit_units.toString().match(creditRegex) &&
    req.body.publication_id
  ) {
    try {
      await Ctrl.editPublication(req.body);
      const publication = await Ctrl.getPublication({
        id: req.body.publication_id
      });

      res.status(200).json({
        status: 200,
        message: 'Successfully edited publication',
        data: publication
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'Publication not found';
          break;
        case 500:
          message = 'Internal server error';
          break;
      }
      res.status(status).json({ status, message });
    }
  }
});

// gets publications
router.get('/api/publication/viewEmployees', async (req, res) => {
  try {
    const publications = await Ctrl.getEmployees();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all emps',
      data: publications
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

// gets publications
router.post('/api/publication/viewEmployeeCoworkers', async (req, res) => {
  if (req.body.empid.match(empidRegex)) {
    try {
      const publications = await Ctrl.getEmployeeCoworkers(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully fetched all possible coworkers',
        data: publications
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
  }
});

// gets publications
router.get('/api/publication/viewCoworkers', async (req, res) => {
  if (req.body.id) {
    try {
      const publications = await Ctrl.getCoworkers(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully fetched all coworkers',
        data: publications
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
  }
});

// removes a publication
router.post('/api/publication/deleteCoworkers', async (req, res) => {
  if (req.body.id) {
    try {
      // const publication = await Ctrl.getPublication(req.body);
      await Ctrl.removeCoworkers(req.body);

      res.status(200).json({
        status: 200,
        message: 'Successfully removed coworkers'
        // data: publication
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'Publication not found';
          break;
        case 500:
          message = 'Internal server error';
          break;
      }
      res.status(status).json({ status, message });
    }
  }
});

// gets coworkers of a publication
router.post('/api/publication/getCoworkers', async (req, res) => {
  if (req.body.id) {
    try {
      const publications = await Ctrl.getCoworkers(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully fetched all emps',
        data: publications
      });
    } catch (status) {
      let message = '';
      switch (status) {
        case 404:
          message = 'Publication not found';
          break;
        case 500:
          message = 'Internal server error';
          break;
      }

      res.status(200).json({ status, message });
    }
  }
});

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'src/uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.pdf');
  }
});

var upload = multer({ storage: storage }).any();

router.post('/api/publication/attach', function(req, res, next) {
  upload(req, res, err => {
    if (err) {
      console.log('sux');
    } else {
      console.log(req.File);
      console.log('success');
    }
  });
});

export default router;
