const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');
const customerController = require('../controllers/customer.controller');
const projectController = require('../controllers/project.controller');

/* Employee route */
router.get("/employee/list/", employeeController.index)
router.get("/employee/view/:id", employeeController.view)
router.post("/employee/create", employeeController.create)
router.delete("/employee/delete/:id", employeeController.delete)
router.put("/employee/update/:id", employeeController.update)

/* Customer route */
router.get("/customer/list/", customerController.index)
router.get("/customer/view/:id", customerController.view)
router.post("/customer/create", customerController.create)
router.delete("/customer/delete/:id", customerController.delete)
router.put("/customer/update/:id", customerController.update)

/* Project route */
router.get("/project/list/", projectController.index)
router.get("/project/view/:id", projectController.view)
router.post("/project/create", projectController.create)
router.delete("/project/delete/:id", projectController.delete)
router.put("/project/update/:id", projectController.update)

module.exports = router;