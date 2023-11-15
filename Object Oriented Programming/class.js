class car {
    constructor(name, color, currentSpeed) {
        this.namr = name
        this.color = color
        this.currentSpeed = currentSpeed
    }
    move(speed){
        this.currentSpeed=speed
        return 'The ${this.name} is moving at speed of ${this.currentSpeed}km per hour '

    
}
stop(){
    this.currentSpeed = 0
    return 'The ${this.name} stopped'
}
}

const car1 = new car('camry','white',0)
const car2 = new car('corella','black',0)
console.log(car1);
console.log(car2);