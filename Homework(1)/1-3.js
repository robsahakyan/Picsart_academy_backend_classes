let tableMath = '';
for (i = 1; i <= 10; i++) {
     tableMath = '';
    for (j = 1; j <= 10; j++ ) {
        tableMath = tableMath.concat(`${i} x ${j} = ${i * j}  \n`);  
    }
    alert (tableMath);
}
