const Project = require('../models/Project')


module.exports = {
    index: (req, res) => {
        Project.find({}, (error, projects) => {
            if (error) {
                throw error;
            }
            res.json(projects);
        });
    },
    view: (req, res) => {
        Project.findById(req.params.id, (error, project) => {
            if (error) {
                throw error;
            }
            res.json(project);
        });
    },
    create: (req, res) => {
        const name = req.body.name;
        const description = req.body.description;
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
        const customer = req.body.customer;
        const employee = req.body.employee;
        const amount = req.body.amount;
        const status = req.body.status;

        const project = new Project({
            name,
            description,
            startDate,
            endDate,
            customer,
            employee,
            amount,
            status
        });
        project.save((error) => {
            if (error) {
                console.log("Error on project");
            }
            res.send("Project successfully created !");
        });
    },
    delete: (req, res) => {
        Project.findById(req.params.id, (error, project) => {
            if (error) {
                throw error;
            }
            project.remove((error) => {
                if (error) {
                    throw error;
                }
                res.send("Project successfully deleted !");
            });
        });
    },
    update: (req, res) => {
        Project.findById(req.params.id, (error, project) => {
            if (error) {
                throw error;
            }
            project.firstname = req.body.firstname;
            project.lastname = req.body.lastname;
            project.username = req.body.username;
            project.birthDate = req.body.birthDate;
            project.address = req.body.address;
            project.phoneNumber = req.body.phoneNumber;
            project.mail = req.body.mail;
            project.job = req.body.job;
            project.save((error, project) => {
                if (error) {
                    throw error;
                }
                res.send("Project successfully updated !");
            });
        });
    }
}