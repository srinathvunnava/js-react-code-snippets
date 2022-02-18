// charCodeAt function gives utf char values for a given letter/number

//youtube 

<a href="https://www.youtube.com/watch?v=Kr7grjJXm6U"> Charset and Code point at</a>

// Covert array of letters into numbers, add all odd/even value and return the value;

const str = "abjdksffjdsljffjkhsdfj";
const cl = console.log;

// function to format the string into Array
 function strToArr(str) {
    let promis =  new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(str.split(""))
            reject(err => console.log(err))
        }, 3000);
        console.warn("Time Out working");
    })
        
    return promis
}

// function to transform Array of letters to Numbers
function charTransformToNum(arr) {
    return arr.map((i) => i.toLowerCase().charCodeAt() - 96);
}

// Add list of numbers in array
function addNumbers(arr) {
    return arr.reduce((pre, next) => pre + next);
}

async function convertStrToNum() {
    console.log("Step1");
    const a =   await strToArr(str)
    await console.log("StepA", a);
    const b = charTransformToNum(a)
    console.log('StepB', b)
    const c = addNumbers(b)
    console.log('StepC', c)
}

convertStrToNum();