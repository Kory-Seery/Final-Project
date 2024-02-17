"use strict";

const express = require("express");
const {
    getAllchallenges, createclient, clientsignin, createchallenge, createSuggestion, getclient, updateAvatar, deleteSuggestion, deleteChallenge, deleteClient, fetchRandomChallenge, getDailyChallenge, modifyChallenge
} = require("./apihandlers");

express()
    .use(express.json())
    .use(express.static("public"))
    .patch("/challenges/:id", modifyChallenge)
    .get("/challengelist", getAllchallenges)
    .get("/getclient/:id", getclient)
    .post("/createclient", createclient)
    .post("/clientsignin", clientsignin)
    .post("/createchallenge", createchallenge)
    .post("/createSuggestion", createSuggestion)
    .post("/updateAvatar", updateAvatar)
    .delete("/deleteSuggestion/:suggestionId", deleteSuggestion)
    .delete("/deleteChallenge/:challengeId", deleteChallenge)
    .delete("/deleteClient/:clientusername", deleteClient)
    .get("/fetchrandomchallenge", fetchRandomChallenge)
    .get("/dailychallenge", getDailyChallenge)


    .get("*", (req, res) => {
        res.status(404).json({status: 404, message: "Not what your looking for!"});
    })

    .listen(4000, () => console.log("Listening on port 4000"));