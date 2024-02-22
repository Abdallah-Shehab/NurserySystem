const express = require('express');

exports.allChildren = (req, res, next) => {
    res.json({ Chilldren: "All children" });
}

exports.addChild = (req, res, next) => {
    res.json({ child: "Child Added" })
}

exports.updateChild = (req, res, next) => {
    res.json({ child: "child with ID: " + req.params.id + " Updated" });

}
exports.deleteChild = (req, res, next) => {
    res.json({ child: "child with ID: " + req.params.id + " Deleted" });

}

exports.childWithID = (req, res, next) => {
    res.json({ child: "child with ID: " + req.params.id });

}
