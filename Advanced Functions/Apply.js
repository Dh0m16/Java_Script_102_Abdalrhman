let user1 = {
    firstName: "Fatimah",
    lastName: "khalid"
}

let user2 = {
    firstName: "asmaa",
    lastName: "mohammed"
}

let printFullNmae = function(age){
    console.log("Hello, " + this.firstName+""+this.lastName+"Your age is:"+age);


}
printFullNmae.call(user1,"25");
printFullNmae.call(user2,"50");