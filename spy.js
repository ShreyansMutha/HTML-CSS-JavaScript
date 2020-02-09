var firstName = prompt("First Name Please: ")
var lastName = prompt("Last Name Please: ")
var age = prompt("How old are you?")
var height = prompt("What is your height?")
var petName = prompt("What is your pet Name?")
alert("Thank You SO Much for the Information")

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

if(firstName[0] === lastName[0]){
    nameCond = true;
}else{
    nameCond = false;
}


if(age>20 && age<30){
    ageCond = true;
}else{
    ageCond = false;
}


if(height>=170){
    heightCond = true;
}else{
    heoghtCond = false;
}


if(petName[petName.length-1]==='y'){
    petCond = true;
}else{
    petCond = false;
}


if( nameCond && ageCond && heightCond && petCond ){
    console.log("Welcome SPY...!!!")
    console.log("VGhpcyBpcyBwYXNzd29yZCBmb3IgWW91Li4hISE=")
}else{
    console.log("Nothing to see Here")
}