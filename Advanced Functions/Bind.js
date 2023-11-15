let user1 = {
    firstName: "Fatimah",
    lastName: "khalid"
}

let user2 = {
    firstName: "asmaa",
    lastName: "mohammed"
}

let printFullNmae = function (age) {
    console.log("Hello, " + this.firstName + "" + this.lastName + "Your age is:" + age);
    return

}
let newFunction = printFullNmae.bind(user1)
newFunction("25")