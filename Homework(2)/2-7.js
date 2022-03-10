let lengthOfArray = prompt("Enter a length");
let arr = [];
let arrElementsCount = [];

for (let i = 0; i < lengthOfArray; i++) {
    while(true) {
        arr[i] = +prompt(`Enter an element No${i}`);
        if (isNaN(arr[i])) {
            alert("its not a number");
        }
        else break; 
    }
}

arr.forEach(e => {
    arrElementsCount[e] = (arrElementsCount[e] || 0) + 1;
});

let maxCount = arr[0];
let maxIndex = 0;

for (let i = 0; i < arrElementsCount.length; i++) {
    if (arrElementsCount[i] > maxCount) {
        maxCount = arrElementsCount[i];
        maxIndex = i;
    }
}

console.log(arr);
console.log(maxIndex);