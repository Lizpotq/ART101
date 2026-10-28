let count= 0

let environmentTitle = "Domain Expandsion: Infinite Void";

let environmentElements = ["see everything", " feel everything", " know everything", " hear everything"];

let mainEntity = {
    name: "Gojo Satoru",
    type: "Special Grade Sorceror",
    mood: "offensive",
    isMoving: true,
    favoriteElement: environmentElements[4]
};

$("#title").click(function () {


  let message = " <h2> <em> Infinite Void... </em> </h2>";
         message = message + "<p> This is the inner world of limitless .</p>";

    $("#output").html(message);


}); 

$("#elements").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

 let message = ""; 
         message = message + "<p> I can.." + environmentElements+ ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
});  

$("#main-entity").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

 let message = ""; 
        message = message + "<p> My name is " + mainEntity.name + ".</p>";
        message = message + "<p>I am a " + mainEntity.type + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
}); 

$("#hol-purp").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

 let message = "<p>You've been hollow purpled " + count + " times.</p>"; 

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
}); 

