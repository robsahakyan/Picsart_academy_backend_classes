let lengthOfArray = prompt("Enter a length");
let arr = [];
let sum  = 0;

for (let i = 0; i < lengthOfArray; i++) {
    while(true) {
        arr[i] = +prompt(`Enter an element No${i}`);
        if (isNaN(arr[i])) {
            alert("its not a number");
        }
        else break; 
    }
}

for (let i = 0; i < lengthOfArray; i++) {
    sum += arr[i];
}

console.log(arr);
console.log(sum/arr.length);