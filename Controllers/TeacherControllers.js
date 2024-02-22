const express = require('express');


exports.AllTeachers = (req, res, next) => {
    res.json({ teachers: "allTeachers" });
}

exports.AddTeacher = (req, res, next) => {
    res.json({ teachers: "Teacher Added" });
}

exports.updateTeacher = (req, res, next) => {
    res.json({ teachers: "Teacher with ID: " + req.params.id + " Updated" });

}

exports.deleteTeacher = (req, res, next) => {
    res.json({ teachers: "Teacher with ID: " + req.params.id + " Deleted" });
}

exports.TeacherWithID = (req, res, next) => {
    console.log(req.params);
    res.json({ teachers: req.params });

}

exports.getSupervisor = (req, res, next) => {
    res.json({ Teacher: "Supervisor" });

}