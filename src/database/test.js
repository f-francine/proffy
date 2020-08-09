const Database = require("./db"); 
const createProffy = require("./createProffy");

Database.then(async(db) => {
    proffyValue = {
        name: "Francine Guimarães",
        avatar: "https://scontent.fpoa39-1.fna.fbcdn.net/v/t1.0-9/95092407_1577915349041529_5878084020738195456_o.jpg?_nc_cat=110&_nc_sid=454319&_nc_ohc=ojHeIv29QCEAX-aHkoG&_nc_ht=scontent.fpoa39-1.fna&oh=563b101eac1ca263128acd1c68d39a3a&oe=5F519C2C",
        whatsapp: "0197907265",
        bio: "Apaixonada por números. Amo dividir minha paixão pelos números com o mundo!",
    }

    classValue = {
        subject: "Matemática",
        cost: "10"
        // proffy_id comes from database.
    }

    classScheduleValues = 
    [
        {
            weekday: 1,
            time_from: 1450,
            time_to: 1800
        },

        {
            weekday: 1,
            time_from: 50,
            time_to: 100
        }
    ]

  // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // query data
    const selectProffys = await db.all("SELECT * FROM proffys");

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes on (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "1800"
        AND class_schedule.time_to > "1450";
    `)

    
    console.log(selectClassesSchedules);
})