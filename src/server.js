const proffys = 
[
    {
        name: "Francine Guimarães",
        avatar: "https://scontent.fpoa39-1.fna.fbcdn.net/v/t1.0-9/95092407_1577915349041529_5878084020738195456_o.jpg?_nc_cat=110&_nc_sid=454319&_nc_ohc=ojHeIv29QCEAX-aHkoG&_nc_ht=scontent.fpoa39-1.fna&oh=563b101eac1ca263128acd1c68d39a3a&oe=5F519C2C",
        whatsapp: "0197907265",
        bio: "Apaixonada por números. Amo dividir minha paixão pelos números com o mundo!",
        subject: "Matemática",
        cost: "10",
        weekday: [1,3,5],
        time_from: [1450],
        time_to: [1800]
    },

    {
        name: "Neromar Guimarães",
        avatar: "https://scontent.fpoa39-1.fna.fbcdn.net/v/t1.0-1/p200x200/19642547_400154457074018_871861846057259951_n.jpg?_nc_cat=102&_nc_sid=7206a8&_nc_ohc=PsxAZTwhygIAX-H79Ax&_nc_ht=scontent.fpoa39-1.fna&_nc_tp=6&oh=e6f876745bb0de117aefb49b7d7849cf&oe=5F52C796",
        whatsapp: "0123654747",
        bio: "Professor de português ha 10 anos.<br/>Acredito que a educação é um dos pilares essencias para tornar o mundo um lugar melhor.",
        subject: "Português",
        cost: "15",
        weekday: [2,4,6],
        time_from: [1250],
        time_to: [1600]
    }
]

const subjects = 
[
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Música",
    "Potuguês",
    "Química"
]

const weekdays =
[
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]
// functionalities

function getSubject(subjectNumber) { // it takes subject number and returns subject string.
    const position = +subjectNumber - 1; // + means that the variabe is a integer type.
    return subjects[position];
}

function pageLanding(req, res) {
    return res.render("index.html");
}

function studyPage(req, res) {
    const filters = req.query;
    return res.render("study.html", {proffys, filters, subjects, weekdays});
}

function teachPage(req, res) {
    const data = req.query; // catch the data awnser from front-end.

    const isNotEmpty = Object.keys(data).length > 0; // it transforms data in an array, then, we can check if data is empty or not.

    if (isNotEmpty){
        data.subject = getSubject(data.subject);
        proffys.push(data); // adding data to the proffys' list.
        return res.redirect("/study");
    }
    return res.render("teach.html", {subjects, weekdays});
}

// server:
const express = require("express");
const server = express();

const nunjucks = require("nunjucks"); // config nunjucks (template engine).
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server
.use(express.static("public")) // server configuration to get the public folder + routes.
.get("/", pageLanding)
.get("/study", studyPage)
.get("/teach", teachPage)

.listen(5000);