let count = 0;

let buttonCreature = {
    name: "Verity",
    species: "needy beta",
    favoriteFood: "Mobs",
    moods: ["eepy", "angy", "kawaii", "loviety", "falsity", "cruelty"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>You touched me " + count + " times.</p>";
         message = message + "<p>I'm feeling.. " + currentMood + ".</p>";
         message = message + "<p>Hey! It's me, it's " + buttonCreature.name + ".</p>";
         message = message + "<p>I am a " + buttonCreature.species + ".</p>";
         message = message + "<p>I love eating " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
    
});





