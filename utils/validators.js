const {body} = require('express-validator');

exports.registerValidator = [
    body("name").isLength({min: 20, max: 60}),
    body("email").isEmail(),
    body("address").isLength({max:400}),
    body("password").matches(/^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,16}$/)
];

exports.ratingValidator = [
    body("rating").isInt({min: 1, max:5})
]