const fs = require('fs');

const lines = fs.readFileSync("Day1Data.txt" , {encoding: "utf-8"})
.split("\n")
.filter((x) => Boolean(x))
.map((x) => parseInt(x));

const Part1 = (arr) => {
    let increase = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i-1] < arr[i])
            increase++;
    }
    return increase;

}
const Part2 = (arr) =>{
    let prvMeasure = 0;
    let count = 0;
    for(let i = 2; i < arr.length; i++){
        let sum = arr[i-2] + arr[i-1] + arr[i];
        
        if(sum > prvMeasure && prvMeasure > 0){
            count++
        }
       prvMeasure = sum;
            
    }
    return count;
}



console.log(Part2(lines));