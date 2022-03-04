function swapNumbers(n) {
    if (n >= 0) {
        let lengthNum = n.toString().length;
        let lastItem = n % 10;
        let firstItem = +n.toString()[0];

        return ((n -  ((firstItem * Math.pow(10,lengthNum - 1) ))) + (lastItem * (Math.pow(10,lengthNum - 1))) - lastItem + firstItem)
    }
    else {
        n = Math.abs(n);
        let lengthNum = n.toString().length;
        let lastItem = n % 10;
        let firstItem = +n.toString()[0];

        return -((n -  ((firstItem * Math.pow(10,lengthNum - 1) ))) + (lastItem * (Math.pow(10,lengthNum - 1))) - lastItem + firstItem)
        
    }
} 
while(true) {
    let n = +prompt("Enter a number");
    if (isNaN(n)) {
       alert("it isn't a number");
    }
    else {
        swapNumbers(n);
        break;
    }
}