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


function getSubject(subjectNumber) { // it takes subject number and returns subject string.
    const position = +subjectNumber - 1; // + means that the variabe is a integer type.
    return subjects[position];
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":");
    return Number((hour * 60) + minutes);
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}