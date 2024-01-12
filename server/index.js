"use strict";

const express = require("express");
const {
    getAllchallenges,
} = require("./apihandlers");

express()
    .use(express.json())
    .use(express.static("public"))


    .get("/challengelist", getAllchallenges)


    .get("*", (req, res) => {
        res.status(404).json({status: 404, message: "Not what your looking for!"});
    })

    .listen(4000, () => console.log("Listening on port 4000"));