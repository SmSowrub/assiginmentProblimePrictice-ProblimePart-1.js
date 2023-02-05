// function triangleArea(a, b, c) {
//     let sp = (a + b + c) / 2;
//     let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));

//     return parseFloat(area.toFixed(2));
// }
 
// console.log(triangleArea(2, 4, 3.5));

function triangleArea(a, b, c) {
    let sp = (a + b + c) / 2;
    let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
     if(a == b && b == c && c==a){
        return "somodi baho";
     }
     else{
        return "besom baho"
     }
    // return parseFloat(area.toFixed(2));
}
 
console.log(triangleArea(2, 3, 2.2));