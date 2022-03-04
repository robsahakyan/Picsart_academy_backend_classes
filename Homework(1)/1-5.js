function isGrower(n) {
    let convertToString = n.toString();
    for (i = 1; i < convertToString.length; i++) {
        if (convertToString[i] <= convertToString[i-1] ) {
           return alert("no")
        }
    }
    return alert("yes")
}
while(true) {
    let n = +prompt("Enter a number");
    if (isNaN(n)) {
       alert("it isn't a number");
    }
    else {
        
        isGrower(n);
        break;
    }
}