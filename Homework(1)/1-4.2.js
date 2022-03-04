function findNum5(n) {
    return (!n.toString().includes('5')) ? "yes" : "no"
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
        findNum5(n);
        break;
    }
}