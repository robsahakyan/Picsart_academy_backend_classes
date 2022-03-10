let row = prompt("Enter a row");

for (let i = 0; i < row.length; i++) {
    if (row[i] === row[i].toLowerCase()) {
        console.log(row[i]);
    }
}