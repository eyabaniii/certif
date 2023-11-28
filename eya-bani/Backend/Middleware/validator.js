const { check, validationResult } = require("express-validator");

exports.registerValidation = () => [
  check("username", "username required!!").notEmpty(), // username no vide
  check("email", "email required!!").isEmail(),
];

exports.Validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(400).send(errors.array());
};
