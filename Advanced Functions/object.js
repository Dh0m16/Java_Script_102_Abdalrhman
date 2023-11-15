let obj = {
    title: "How to write a function in an object",

    function1: function () {
        return console.log("First function")
    },
    function2: () => {
        return console.log("Second function")
    },
    function3() {
        return console.log("Third function")
    }
}

obj.function1()
obj.function2()
obj.function3()