let lengthOfArray = prompt("Enter a length");
let arr = [];

for (let i = 0; i < lengthOfArray; i++) {
    while(true) {
        arr[i] = +prompt(`Enter an element No${i}`);
        if (isNaN(arr[i])) {
            alert("its not a number");
        }
        else break; 
    }
}

let max = arr[0];
let maxIndex = 0;

for (let i = 0; i < lengthOfArray; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    }
}

console.log(arr);
console.log(max);
console.log(maxIndex);