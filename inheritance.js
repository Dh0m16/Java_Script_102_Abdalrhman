class Animal(name,color){
this.name = name
this.color = color
this.speed = 0
}
return(speed){
    this.speed = speed
    return '${this.namw} runs with speed ${this.speed}'
}


class Cat extends Animal{
    makeSound(){
return 'mew...'
    }
}

class Fox extends Animal{
    makeSound(){
return 'bark...'
    }
}

const cat = new Cat('snowy','white')
console.log(cat);