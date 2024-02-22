const express = require('express');
const router = express.Router();
const controller = require("./../Controllers/ClassController");
const validator = require("./../Middlewares/Validations/Validator");
const { insertClass, patchClass, checkID } = require("./../Middlewares/Validations/ClassValidator");

router.route('/class')
    .get(controller.classes)
    .post(insertClass, validator, controller.addClass)


router.route('/class/:id')
    .get(checkID, validator, controller.getClass)
    .patch(checkID, patchClass, validator, controller.updateClass)
    .delete(checkID, validator, controller.deleteClass)

router.get('/class/child/:id', checkID, validator, controller.ChildrenClass)
router.get('/class/teacher/:id', checkID, validator, controller.TeachersClass)
module.exports = router