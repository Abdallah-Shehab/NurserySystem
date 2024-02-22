// Child Data: _id(Number), fullName, age , level (one of PreKG,KG1,KG2), address 
// (city,street and building)
const { body, query, param } = require("express-validator");

exports.insertChild = [
    body("id").isInt().withMessage("Child ID must be number"),
    body("fullname").isString().withMessage("Child name must be string"),
    body("age").isInt().withMessage("Child age must be number"),
    body("level").isString().withMessage("Child level must be string")
        .isIn(['PreKG', 'KG1', 'KG2']).withMessage("Child level must one of theses value [PreKG,KG1,KG2]"),
    body("address").isObject().withMessage("Child address must be object"),
    body("address.city").isString().withMessage("Child address.city must be string"),
    body("address.street").isString().withMessage("Child address.street must be string"),
    body("address.building").isInt().withMessage("Child address.building must be number"),

]
// check address is object 

exports.patchChild = [
    body("id").optional().isInt().withMessage("Child ID must be number"),
    body("fullname").optional().isString().withMessage("Child name must be string"),
    body("age").optional().isInt().withMessage("Child age must be number"),
    body("level").optional().isString().withMessage("Child level must be string")
        .isIn(['PreKG', 'KG1', 'KG2']).withMessage("Child level must one of theses value [PreKG,KG1,KG2]"),
    body("address.city").optional().isString().withMessage("Child address.city must be string"),
    body("address.street").optional().isString().withMessage("Child address.street must be string"),
    body("address.building").optional().isInt().withMessage("Child address.building must be number"),

]


exports.checkID = [
    param("id").isInt().withMessage("Entered id must be integer")
]