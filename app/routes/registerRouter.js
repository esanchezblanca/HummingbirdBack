  
// const { User, sequelize } = require('./models/user.js.js');
// const jwt = require('jsonwebtoken');
// const config = require('../config');



// const customerController = {

//     async register(req, res) {
//         try {
//             const customer = await Customer.create({
//                 id: req.body.CustomerId,
//                 name: req.body.name,
//                 lastName: req.body.lastName,
//                 phone: req.body.phone,
//                 mail: req.body.mail,
//                 password: req.body.password,
//                 birthDay: req.body.birthDay,
//                 eBilling: req.body.eBilling,
//                 DNI: req.body.DNI,
//                 remarks: req.body.remarks,
//                 role: 'Guest',
//             });

//             res.send({
//                 message: 'Account successfully created'
//             })

//         } catch (error) {
//             console.error(error);
//             res.status(500).send({
//                 message: 'Customer could not be created'
//             })
//         }
//     },


    
// }

// module.exports = registerController;