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

arr.sort((a, b) => b - a);

console.log(arr);