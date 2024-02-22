const express = require("express");
const router = express.Router()
const controller = require("./../Controllers/TeacherControllers")
const validator = require("./../Middlewares/Validations/Validator")
const { insertTeacher, checkID, patchTeacher } = require("./../Middlewares/Validations/TeacherValidator");


router.route("/teacher")
    .get(controller.AllTeachers)
    .post(insertTeacher, validator, controller.AddTeacher)

router.get("/teacher/supervisor", controller.getSupervisor)

router.route("/teacher/:id")
    .get(checkID, validator, controller.TeacherWithID)
    .patch(checkID, patchTeacher, validator, controller.updateTeacher)
    .delete(checkID, validator, controller.deleteTeacher)

module.exports = router

