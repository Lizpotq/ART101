let count= 0

let environmentTitle = "Domain Expandsion: Infinite Void";

let environmentElements = ["see everything", " feel everything", " know everything", " hear everything"];

let mainEntity = {
    name: "Gojo Satoru",
    type: "Special Grade Sorceror",
    mood: "offensive",
    isMoving: true,
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


let messagesA=[" You're really going to slime out all non-jujutsu sorcerors? There's no point! It's impossible", " HUH?!" , " ....", " What are you trying to say!?" ];
let counterA=0


let messagesB=[" You're so arrogant", " You could do it yourself Satoru, yet you would try to convice someone else that it is impossible that is possible for you", " Do you think you're the strongest because you're Satoru Gojo, or are you Satoru Gojo because you're the strongest? ", ];
let counterB=0

$("#character-a").click(function(){

    if(counterA == 3) {
        $("#answers").css("display", "flex"); 
        $("#chat").append("<p>Gojo:" + messagesA[counterA]+ "</p> ");
        counterA=counterA+1;
        counterB=1000;
    }

    else if (counterA == counterB) {
         $("#chat").append("<p>Gojo:" + messagesA[counterA]+ "</p> ");
        counterA=counterA+1;
    }

    else if (counterA > 3000) {}

});

$("#character-b").click(function(){

    if(counterB < counterA) {

        $("#chat").append("<p>Geto:" + messagesB[counterB]+ "</p> ");

        counterB=counterB+1;
    }

});

$("#answer-green").click(function () {

    $("body").css( "background-image", "url(getoandgojohappy.jpg)" );
    $("#chat").append("<p>Geto: I'm sorry.. You're right, I don't know what I was thinking");
    $("#answers").css("display", "none");

});

$("#answer-pink").click(function () {

    $("body").css( "background-image", "url(getodeath.jpg)" );
    $("#chat").append("<p>Geto: If I were able to become you, this moment woould be a lot more grounded dont you think? </p>");
    $("#answers").css("display", "none");


});
