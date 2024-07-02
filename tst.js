const prompt = require('prompt-sync')({sigint: true});

let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
    const element = document.getElementById("demo");
    document.getElementById("demo").innerHTML = "Hello " + person + "! How are you today?";
}