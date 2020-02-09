var roaster = []

function addNew(){
    var  newName = prompt("What Name would you like to Add?")
    roaster.push(newName)
    alert("Name Added Successfully...")
    console.log("Added name :-  "+newName)
}

function remove(){
    var remName = prompt("What Name would you like to Remove?")
    var index = roaster.indexOf(remName)
    roaster.splice(index,1)
    alert("Name Removed Successfully...")
    console.log("Removed name :-  "+remName)
}

function display(){
    console.log(roaster)
    alert("Given Names are :- "+roaster)
    console.log("List is :-  "+roaster)
}


var start = prompt("Enter the password to start the roaster web app.")
var request = "empty"

if (start==='This is password for You..!!!'){
    while(request !== "quit"){
        request = prompt("Please select an action:- \nAdd (a)\nRemove (r)\nDisplay (d)\nQuit (q)\n")
        if (request === 'a'){
            addNew()
        }else if (request === 'r'){
            remove()
        }else if (request === 'd'){
            display()
        }else if (request === 'q'){
            break
        }else{
            alert("Not Recognised...Please select Correct Option..!!!")
        }
    }
}
else
    alert("Please Enter the correct password..!!!")
console.log("Thank You For Using App...")
alert("Thanks for using the web app!")