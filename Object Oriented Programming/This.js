const car = {
    name: 'camry',
    color: 'white',
    currentSoeed: 0,
    move: function (speed) { 
        this.currentSoeed = speed
        return 'The ${this.name} is moving at speed of $
        {this.CurrentSpeed}km per hour '
    
    },
    stop: function () {
      this.currentSoeed=0
    }
}
console.log(car.move(100));
