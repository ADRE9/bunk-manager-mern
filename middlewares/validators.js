const { check, validationResult } = require('express-validator');

exports.validateSignupRequest = [
    check('name').notEmpty().withMessage("First name is required"),
    check('email').isEmail().withMessage("Email is required"),
    check('password')
        .isLength({min : 6}).withMessage("Password must be atleast 6 character long")
        .matches('[0-9]').withMessage('Password must contain at least 1 number.')
        .matches('[a-z]').withMessage('Password must contain at least 1 lowercase letter.')
        .matches('[A-Z]').withMessage('Password must contain at least 1 uppercase letter.')
];

exports.validateLogin = [
    check('email').isEmail().withMessage("Email is required"),
    check('password').isLength({min : 6}).withMessage("Password must be atleast 6 character long")
]

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if( errors.array().length > 0 ){
        console.log(errors.array()[0])
        return res.status(400).json({
            errors : errors.array()[0]
        })
    }
    next();
}