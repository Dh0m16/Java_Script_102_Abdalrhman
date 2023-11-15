let user1 = {
    firstName: "Fatimah",
    lastName: "khalid"
}

let printFullNmae = function(){
    console.log("Hello, " + this.firstName+""+this.lastName);

}
printFullNmae();