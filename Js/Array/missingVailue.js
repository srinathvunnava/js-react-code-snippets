const mis = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "11"];
const CL =console.log


function findMissNum(arr, n) {
    let total = (n * (n+1) /2);
    let sum = arr.reduce((acc, prv) => parseInt(acc) + parseInt(prv))
  

  CL(total - sum) 
}

findMissNum(mis, 11);
