//number 1: Using the boolean conditional to ascertain if students passed the pass mark or not
function studentsPassScore () {
let passScore = 180;
let studentScore = 199;
let studentScore2 = 100;
if (studentScore >= passScore) {console.log("Passed")}
else {console.log("Failed")};
if (studentScore2 >= passScore) {console.log("Passed")}
else {console.log("Failed")};
};
studentsPassScore();


// Number 2:
function votersVotingAge (voterName, voterAge) {
let votingAge = 18;

if (voterAge >= votingAge) {console.log("You are eligible to vote")}
else {console.log("Not eligible to vote")};
if (voterAge >= votingAge) {console.log(`${voterName}, you are eligible to vote`)}
else {console.log("Not eligible to vote")};
};
votersVotingAge("John", 28);


// Number 3:
function candidatesGradeScore () {
let candidatescore = 80;
let excellentGrade = 90;
let goodGrade = 75;
let averageGrade = 50;

if (candidatescore >= excellentGrade) {console.log("Excellent")}
else if (candidatescore >= goodGrade) {console.log("Good")}
else if (candidatescore >= averageGrade) {console.log("average")}
else {console.log("Fail")};
};
candidatesGradeScore();


// Number 4:
// function accessControl () {
// let hasID = true;
// let isAbove18 = false;
// if (hasID == true && isAbove18 == true) 
//     {console.log("Access granted")}
// else {console.log("Access not granted")};
// }
// accessControl();

// Number 4:
function accessControl (hasID, isAbove18) {
    if (hasID == true && isAbove18 == true) 
    {console.log("Access granted")}
    else {console.log("Access not granted")};
}
accessControl(true, true);
accessControl(true, false)


// Number 5:
let score = [65, 80, 40, 50, 85, 28, 70];
for (let a = 0; a < score.length; a++) {
    if (score[a] > 50) {console.log("Passed")}
    else {console.log("Failed")}
};


// Number 6:
let numberValue = (englishScore, mathsScore)=>{
    let passScore = 50
    if (englishScore > passScore && mathsScore > passScore) {
        console.log("Yes")
    } else {
        console.log("No")
    }
};
numberValue(20, 80)
numberValue(65, 90)


// Number 7:
function checkEmailPhone (checkEmail, checkPhoneNumber) {
    if(checkEmail == true || checkPhoneNumber == true) {
        console.log("User's details found")
    } else {
        console.log("User's details not found")
    }
};
    checkEmailPhone(true, true);
    checkEmailPhone(true, false);
    checkEmailPhone(false, true);
    checkEmailPhone(false, false);


// Number 8:
function userLogin (username, password) {
    if (username == "" || password == "") {
        console.log("Invalid input")
    } else {
        console.log("Valid input")
    }
};
userLogin("John Doe", "")
userLogin("John Doe", "Johndoe")


// Number 9:
function hoursWorkedControl (hoursworked) {
    hoursworked >= 40? console.log("Full-time"): console.log("Part-time")
};
hoursWorkedControl(50)
hoursWorkedControl(25)


// Number 10:
let numbers = (a, b)=>{
    if(a > b) {
        console.log(a)
    } else {
        console.log(b)
    }
};
numbers(20, 10)
numbers(5, 8)
