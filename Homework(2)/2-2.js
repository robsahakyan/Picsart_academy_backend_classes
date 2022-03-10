let lengthOfArray = prompt("Enter a length");
let arr = [];
let count = 0;

for (let i = 0; i < lengthOfArray; i++) {
     arr[i] = +prompt(`Enter an element No${i}`);
}

for (let i = 0; i < lengthOfArray; i++) {
    if (arr[i] % 2 === 1 && arr[i] > 0) {
        count++;
    }
}

console.log(arr);
console.log(count);