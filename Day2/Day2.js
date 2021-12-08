const fs = require('fs');

const lines = fs.readFileSync("Day2Data.txt" , {encoding: "utf-8"})
.split("\n")
.filter((x) => Boolean(x))
.map((x) =>{
    const [direction, n] = x.split(" ");
    return {
        direction,
        n:parseInt(n)
    };
});

console.log(lines[0].direction);

const part1 = (arr) =>{
    let horizontal = 0;
    let depth = 0;
    arr.map((value, index) => {
        switch(arr[index].direction){
            case "forward":
                horizontal += arr[index].n;
                break;
            case "up":
                depth -= arr[index].n;
                break;
            case "down":
                depth += arr[index].n;
                break;
        }    
    })

    return horizontal * depth;

}
const arr = [{direction:'forward', n: 5}, {direction:'down', n: 5}, {direction:'forward', n: 8}, {direction:'up', n: 3}, {direction:'down', n: 8}, {direction:'forward', n: 2}]
const part2 = (arr) =>{
    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    arr.map((value, index) => {
       
        switch(arr[index].direction){
            case "forward":
                horizontal += arr[index].n;
                depth += aim * arr[index].n;
                break;
            case "up":
                aim -= arr[index].n;
                break;
            case "down":
                aim += arr[index].n;
                break;
        }    
    })
    return horizontal * depth
}
console.log(part2(lines))