const express = require('express')

exports.classes = (req, res, next) => {
    res.json({ class: "All Classes" })
}
exports.addClass = (req, res, next) => {
    res.json({ class: "Class Added" })
}
exports.updateClass = (req, res, next) => {
    res.json({ class: "class With ID :" + req.params.id + " Updated" })
}
exports.deleteClass = (req, res, next) => {
    res.json({ class: "class With ID :" + req.params.id + " deleted" })
}

exports.getClass = (req, res, next) => {
    res.json({ class: "class With ID :" + req.params.id })

}

exports.ChildrenClass = (req, res, next) => {
    res.json({ ChildrenClass: "ChildrenClass With ID :" + req.params.id })

}
exports.TeachersClass = (req, res, next) => {
    res.json({ TeachersClass: "TeachersClass With ID :" + req.params.id })

}

