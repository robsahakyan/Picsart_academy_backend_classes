function findNum3(n) {
    return (n.toString().includes('3')) ? "yes" : "no" 
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
        findNum3(n);
        break;
    }
}
