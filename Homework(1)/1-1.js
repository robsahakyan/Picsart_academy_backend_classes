function factorialCounter(n) {
    if (n > 1) {
        return n * factorialCounter(n - 1)
    }
    return 1;
}
while(true) {
    let n = +prompt("Enter a number");
    if (isNaN(n)) {
       alert("it isn't a number");
    }
    else if (n < 1 || n !== parseInt(n)) {
       alert("it isn't a natural number"); 
    }
    else {
        factorialCounter(n);
        break;
    }
}
