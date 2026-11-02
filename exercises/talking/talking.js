// A says
let messagesA=[" You're really going to slime out all non-jujutsu sorcerors?? There's no point! It's impossible", " HUH?!" , "....", "What are you trying to say!?" ];
let counterA=0

// B says
let messagesB=[" You're so arrogant", "You could do it yourself Satoru, yet you would try to convice someone else that it is impossible that is possible for you", "Do you think you're the strongest because you're Satoru Gojo, or are you Satoru Gojo because you're the strongest? ", ];
let counterB=0

// when A is clicked
// A speaks when counterA = counterB
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

// when B is clicked 
// B speaks when counterB < counterA
$("#character-b").click(function(){

    if(counterB < counterA) {

        $("#chat").append("<p>Geto:" + messagesB[counterB]+ "</p> ");

        counterB=counterB+1;
    }

});

// if B is > 3 then show the buttons
// make the color buttons work 

$("#answer-green").click(function () {

    $("body").css( "background-color", "green" );
    $("#chat").append("<p>Geto: I'm sorry, I take it all back");
    $("#answers").css("display", "none");

});

$("#answer-pink").click(function () {

    $("body").css( "background-color", "pink" );
    $("#chat").append("<p>Geto: if I were able to become you, this moment woould be a lot more grounded dont you think? </p>");
    $("#answers").css("display", "none");


});