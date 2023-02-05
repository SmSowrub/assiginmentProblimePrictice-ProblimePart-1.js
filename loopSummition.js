// 1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।
function summation(n){
    let sum =0;
    for(let i =0 ; i <= n; i++){
         sum = sum + i;
         console.log(i,sum)
    }
    return sum;
}
console.log(summation(10));
