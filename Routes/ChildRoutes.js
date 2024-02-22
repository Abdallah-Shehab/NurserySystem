const express = require("express");
const router = express.Router()
const controller = require("./../Controllers/ChildController")
const validator = require("./../Middlewares/Validations/Validator")
const { insertChild, patchChild, checkID } = require("./../Middlewares/Validations/ChildValidator")

router.route("/children")
    .get(controller.allChildren)
    .post(insertChild, validator, controller.addChild)


router.route("/children/:id")
    .get(checkID, validator, controller.childWithID)
    .patch(patchChild, validator, controller.updateChild)
    .delete(checkID, validator, controller.deleteChild)
module.exports = router

