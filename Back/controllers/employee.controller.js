const Employee = require('../models/Employee')


module.exports = {
    index: (req, res) => {
        Employee.find({}, (error, employees) => {
            if (error) {
                throw error;
            }
            res.json(employees);
        });
    },
    view: (req, res) => {
        Employee.findById(req.params.id, (error, employee) => {
            if (error) {
                throw error;
            }
            res.json(employee);
        });
    },
    create: (req, res) => {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const username = req.body.username;
        const birthDate = req.body.birthDate;
        const address = req.body.address;
        const phoneNumber = req.body.phoneNumber;
        const mail = req.body.mail;
        const job = req.body.job;

        const employee = new Employee({
            firstname,
            lastname,
            username,
            birthDate,
            address,
            phoneNumber,
            mail,
            job
        });
        employee.save((error) => {
            if (error) {
                console.log("Error on employee");
            }
            res.send({message: "Employee successfully created!"})
        });
    },
    delete: (req, res) => {
        Employee.findById(req.params.id, (error, employee) => {
            if (error) {
                throw error;
            }
            employee.remove((error) => {
                if (error) {
                    throw error;
                }
                res.send({message: "Employee successfully deleted!"})
            });
        });
    },
    update: (req, res) => {
        Employee.findById(req.params.id, (error, employee) => {
            if (error) {
                throw error;
            }
            employee.firstname = req.body.firstname;
            employee.lastname = req.body.lastname;
            employee.username = req.body.username;
            employee.birthDate = req.body.birthDate;
            employee.address = req.body.address;
            employee.phoneNumber = req.body.phoneNumber;
            employee.mail = req.body.mail;
            employee.job = req.body.job;
            employee.save((error, employee) => {
                if (error) {
                    throw error;
                }
                res.send({message: "Employee successfully updated!"})
            });
        });
    }
}