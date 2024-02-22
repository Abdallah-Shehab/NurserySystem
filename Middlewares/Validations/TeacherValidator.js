const { body, query, param } = require("express-validator");


// teacher Data: _id(objectID), fullname,password, email , 
// image (which is string)

exports.insertTeacher = [
    body("id").isMongoId().withMessage("Teacher ID must be number"),
    body("fullname").isString().withMessage("Teacher name must be string"),
    body("email").isEmail().withMessage("Teacher email must be string"),
    body("password").isString().withMessage("Teacher password must be Numbers")
        .isLength({ min: 5 }).withMessage("Teacher password must be > 5 ")
    // .isStrongPassword().withMessage("Teacher password must be strong")
    ,

    body("image").isString().withMessage("Teacher image must be string")
]


exports.patchTeacher = [
    body("id").optional().isInt().withMessage("Teacher ID must be number"),
    body("fullname").optional().isString().withMessage("Teacher name must be string"),
    body("email").optional().isString().withMessage("Teacher email must be string"),
    body("password").optional().isString().withMessage("Teacher password must be Numbers")
        .isLength({ min: 5 }).withMessage("Teacher password must be > 5 ")
    // .isStrongPassword().withMessage("Teacher password must be strong")
    ,
    body("image").optional().isString().withMessage("Teacher image must be string")
]

exports.checkID = [
    param("id").isInt().withMessage("Enterd ID must be number")
]

