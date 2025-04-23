// Control Flow Assignment
// A user has 3 attempts to log in. Simulate failed login attempts using while. After 3, show "Account locked".
function failedAttempt(loginAttempt) {
    loginAttempt = 1;
    while (loginAttempt <= 3) {
        console.log(`This is your ${loginAttempt}st attempt`)
        loginAttempt++;
    }
    console.log("Account Locked");
}
failedAttempt();

// Users are voting on a feature. Use do...while to log each vote from an array until all votes are processed.
function voting(votes) {
    votes.forEach(vote => {

        do {
            console.log(vote)
        }
        while (vote[vote.length]);
    });
}
voting(["vote1", "vote2", "vote3"]);

// Loop through an array of numbers from 1–7 and use a switch to print the corresponding day name.
function correspondingName(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        switch (numbers[i]) {
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
                break;
            case 7:
                day = "Sunday";
                break;
            default:
                day = "Out of range"
        }
        console.log(`${numbers[i]}:${day}`);
    }
};
numbers = [1, 2, 3, 4, 5, 6, 7];
correspondingName(numbers);

// Given an array of password strings, use if...else to: log "Strong" if length >= 8, and "Weak" otherwise.
let checkingPassword = (passwords) => {
    passwords.forEach(password => {
        if (password.length >= 8) {
            console.log("Strong");
        }
        else {
            console.log("Weak");

        }
    });
}
passwords = ["Abebe1234", "abebe"];
checkingPassword(passwords);

// You're building a multilingual site. Use a switch to show greetings based on language codes. I.e "en" → "Hello", "fr" → "Bonjour", "sw" → "Habari".
let showStrings = function (languageCodes) {
    languageCodes.forEach(language => {
        switch (language) {
            case "en":
                greetings = "Hello";
                break;
            case "fr":
                greetings = "Bonjour";
                break;
            case "sw":
                greetings = "Habari";
                break;
            case "dutch":
                greetings = "Goodmorgen"
                break;
            default:
                greetings = "Selam"
        }
        console.log(`${language}:${greetings}`);

    });
};
languageCodes = ["en", "fr", "sw", "dutch"]
showStrings(languageCodes);

// You're building a weather dashboard. Loop through an array of temperatures and: If above 30, log "High heat alert!", else if below 15, log "Cold alert!", else, log "Normal conditions"
function weatherDashboard(temperatures) {
    temperatures.forEach(temperature => {
        if (temperature >= 30) {
            console.log(`Temprature = ${temperature}: High heat alert!`);
        }
        else if (temperature < 15) {
            console.log(`Temprature = ${temperature}: Cold alert!`);
        }
        else {
            console.log(`Temprature = ${temperature}: Normal conditions`);

        }
    });
};
weatherDashboard([30, 35, 5, 45, 24, -5]);


// Users are queued to register. Use a while loop to remove and print each name until the queue is empty.
function removeAndPrintQueue(usersToRegister) {
    for (i = 0; i < usersToRegister.length; i++) {
        console.log(usersToRegister);
        while (i < usersToRegister.length) {
            console.log(usersToRegister[i]);
            usersToRegister.splice(usersToRegister[i], 1);
            console.log(usersToRegister);
        };
    };

};
usersToRegister = ["Meron", "Fana", "Lwam", "Brhanu"];
removeAndPrintQueue(usersToRegister);

// Students retake a test until they score 50 or more. Use do...while to simulate attempts, increasing the score by 10 each time until it's >= 50.
function retakeTest(score) {
    for (i = 0; i < score.length; i++) {
        do {
            console.log(`your score is ${score[i]} which is less than 50 so retake the exam`);
            score[i] += 10
            console.log(`Since it is less than 50 the score adds by 10 which is ${score[i]}\n`);

        }
        while (score < 50);

    }
}
retakeTest([25, 50, 55, 32, 44]);