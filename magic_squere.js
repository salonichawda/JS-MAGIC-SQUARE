let magic_square = [

    [8, 3, 4],

    [1, 5, 9],

    [6, 7, 2],

]
let result=0
for (let i=0;i<magic_square.length;i++){
    let row=0
    let column=0
    for (let j=0;j<magic_square[i].length;j++){
       row+=magic_square[i][j]
       column+=magic_square[j][i]
    }
    console.log(`row ${row}`+"  "+`column ${column}`);

    if (row!==column){
        result=false
    }
    else{
        result=true
    }
}
var d1=0
var d2=0
for (let k=0;k<magic_square.length;k++){
    for (let n=0;n<magic_square[k].length;n++){
        if (k===n){
            d1+=magic_square[k][n]
        }
        if (k+n===magic_square.length-1){
            d2+=magic_square[k][n]
        }
    }
}
console.log(`digonle1 ${d1}`+"  "+`digonle2 ${d2}`);

if (d1!==d2){
    result=false
}
else{
    result=true
}

if (result){
    console.log("it is a magic squire");
}
else{
    console.log("it is not a magic squire");
}