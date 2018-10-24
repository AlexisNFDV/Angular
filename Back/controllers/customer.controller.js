const Customer = require('../models/Customer')


module.exports = {
    index: (req, res) => {
        Customer.find({}, (error, customers) => {
            if (error) {
                throw error;
            }
            res.json(customers);
        });
    },
    view: (req, res) => {
        Customer.findById(req.params.id, (error, customer) => {
            if (error) {
                throw error;
            }
            res.json(customer);
        });
    },
    create: (req, res) => {
        const company = req.body.company;
        const address = req.body.address;
        const contact = req.body.contact;
        const businessLine = req.body.businessLine;
        console.log(businessLine);

        const customer = new Customer({
            company,
            address,
            contact,
            businessLine
        });

        console.log(customer);
        customer.save((error) => {
            if (error) {
                console.log("Error on customer");
            }
            res.send({message: "Customer successfully created!"})
        });
    },
    delete: (req, res) => {
        Customer.findById(req.params.id, (error, customer) => {
            if (error) {
                throw error;
            }
            customer.remove((error) => {
                if (error) {
                    throw error;
                }
                res.send({message: "Customer successfully deleted!"})
            });
        });
    },
    update: (req, res) => {
        Customer.findById(req.params.id, (error, customer) => {
            if (error) {
                throw error;
            }
            customer.company = req.body.company;
            customer.address = req.body.address;
            customer.contact = req.body.contact;
            customer.businessLine = req.body.businessLine;
            customer.save((error, customer) => {
                if (error) {
                    throw error;
                }
                res.send({message: "Customer successfully updated!"})
            });
        });
    }
}