class car {
    static number0fcars = 0
    #currentSpeed
    constructor(name, color, currentSpeed) {
        this.namr = name
        this.color = color
        this.currentSpeed = currentSpeed
        car.incermentNumber0fcars()
    }
    move(speed){
        this.#currentSpeed=speed
        return 'The ${this.name} is moving at speed of ${this.currentSpeed}km per hour '

    
}
stop(){
    this.#currentSpeed = 0
    return 'The ${this.name} stopped'
}
static incermentNumber0fcars(){
    car.number0fcars++
}
}

const car1 = new car('camry','white',0)


console.log(car.move(100));
console.log(car)