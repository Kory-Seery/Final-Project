"use strict";

const express = require("express");
const {
    getAllchallenges, createclient, clientsignin, createchallenge, createSuggestion,
} = require("./apihandlers");

express()
    .use(express.json())
    .use(express.static("public"))


    .get("/challengelist", getAllchallenges)
    .post("/createclient", createclient)
    .get("/clientsignin", clientsignin)
    .post("/createchallenge", createchallenge)
    .post("/createSuggestion", createSuggestion)

    .get("*", (req, res) => {
        res.status(404).json({status: 404, message: "Not what your looking for!"});
    })

    .listen(4000, () => console.log("Listening on port 4000"));