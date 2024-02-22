// Class Data:_id(Number), name, supervisor (teacher id number), classren which is
// array of childresren ids


const { body, query, param } = require("express-validator");

exports.insertClass = [
    body("id").isInt().withMessage("class ID must be number"),
    body("name").isString().withMessage("class name must be string"),
    body("supervisor").isInt().withMessage("class supervisor id must be number"),
    body("children").isArray({ min: 1 }).custom((arr) => {
        // Validate each child object
        for (var id of arr) {
            console.log(id);

            if (typeof (id) !== 'number') {
                throw new Error('Invalid child ID or length < 1');
            }
        }
        return true;
    }).withMessage("class children must be array of integer IDs and length must be > 1")

]


exports.patchClass = [
    body("id").isInt().withMessage("class ID must be number"),
    body("name").optional().isString().withMessage("class name must be string"),
    body("supervisor").optional().isInt().withMessage("class supervisor id must be number"),
    body("children").optional().isArray({ min: 1 }).custom((arr) => {
        // Validate each child object
        for (var id of arr) {
            console.log(id);

            if (typeof (id) !== 'number') {
                throw new Error('Invalid child ID or length < 1');
            }
        }
        return true;
    }).withMessage("class children must be array of IDs")

]


exports.checkID = [
    param("id").isInt().withMessage("Entered id must be integer")
]