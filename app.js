let totalMarks = 100;

let userSubject = [];

alert("you can give unlimited subject name when want to finish enter 'stop' ");
let i = 1;
let userInputSubject;
do {
    userInputSubject = prompt("give subject name " + i).toLowerCase().trim();

    if (userInputSubject !== "stop") {
        userSubject.push(userInputSubject);
    }

    i++;
} while (userInputSubject !== "stop" && userInputSubject !== " ")

alert("now give obtain marks of all if you want to finish enter stop");

let userObtainMarks = [];

let userInputObtainMarks;
for (let j = 0; j < userSubject.length; j++) {
    userInputObtainMarks = +prompt(`give obtain marks of ${userSubject[j]}`).trim();
    userObtainMarks.push(userInputObtainMarks);
}


let totalPercentage = [];

// function for add values in array
function foraddition(add) {

    let total = 0;
    for (let i = 0; i < userSubject.length; i++) {
        total = add[i] + total;
    }

    return total;
}



// subjects column
for (let i = 0; i < userSubject.length; i++) {
    if (i == 0) {
        document.write("Subjects ");
    }
    document.write(`${userSubject[i]} \n`);
}

// total marks column
for (let i = 0; i < userSubject.length; i++) {
    if (i == 0) {
        document.write("Total Marks ");
    }
    document.write(`${totalMarks} \n`);
    if (i == (userSubject.length -1)) {
        document.write(` || ${totalMarks*userSubject.length}`);
    }
}

// // obtain marks column
for (let i = 0; i < userSubject.length; i++) {
    if (i == 0) {
        document.write(" Obtain Marks ");
    }
    document.write(`${userObtainMarks[i]} \n`);
    if (i == userSubject.length - 1) {
        document.write(`|| ${foraddition(userObtainMarks)}`)
    }
}

// // percentage
// document.write(`${userObtainMarks3} \n ${userObtainMarks2} \n ${userObtainMarks1}`);

for (let i = 0; i < userObtainMarks.length; i++) {
    if (i == 0) {
        document.write(" percentage ");
    }
    totalPercentage.push(((userObtainMarks[i] / totalMarks) * 100));
    document.write(" ", ((userObtainMarks[i] / totalMarks) * 100));
    if (i == userSubject.length - 1) {
        document.write(" || ", (foraddition(userObtainMarks) / (totalMarks * userSubject.length)) * 100, "%");

    }
}


