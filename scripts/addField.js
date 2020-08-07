document.querySelector("#add-time").addEventListener("click", cloneField); //Searching the button and listening to the click event.

function cloneField() {
    const newFieldContainer =  document.querySelector(".schedule-item").cloneNode(true); //true means the querySelector will take all the div. If you don't use true, its will take a empty div.
    const fields = newFieldContainer.querySelector("input");

    for (var i = 0; i <= fields.length; i++){
        console.log(fields[i].value = "");
    };

    document.querySelector("#schedule-items").appendChild(newFieldContainer);

}