function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");

    if (userNumber == whatNumber) {
        $("#output").html("Good job!");
    }
    else {
        $("#output").html("Nawwww");
    }
}

$("#good-button").click(function () {
    askNumber(7);
});