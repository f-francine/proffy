// server:
const express = require("express");
const server = express();

const {landingPage, studyPage, teachPage, saveClasses} = require("./pages");

const nunjucks = require("nunjucks"); // config nunjucks (template engine).
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server
.use(express.urlencoded({extended: true})) //receiving req.body data.
.use(express.static("public")) // server configuration to get the public folder + routes.
.get("/", landingPage)
.get("/study", studyPage)
.get("/teach", teachPage)
.post("/save-classes", saveClasses)
.listen(5000);