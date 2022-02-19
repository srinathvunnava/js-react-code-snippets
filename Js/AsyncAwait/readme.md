Q1 ) What is callback in Javascript()

Ans: a function that is passed to another function as a parameter is called callback function.

function primary (callback) {
    callback()
}

function callback () {
    console.log('This is callback function')
}

primary(callback); 

<!--------------------------------------------!>
