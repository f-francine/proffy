module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) { //it needs to use 'async' to can use 'await' later.
    // inserting data in proffys table.
    // waits run db, untill can go to the next line compilation.
   const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        ); 
   `); 
    const proffy_id = insertedProffy.lastID;

    // inserting data in classes table.

    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)

    const class_id = insertedClass.lastID;

    // inserting data in schedule class table.
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValues) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValues.weekday}",
                "${classScheduleValues.time_from}",
                "${classScheduleValues.time_to}"
            );
        `)
    })

    await Promise.all(insertedAllClassScheduleValues);
}
