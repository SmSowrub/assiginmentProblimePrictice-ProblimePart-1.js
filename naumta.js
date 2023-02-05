// ৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে।

function numta(num){
    for(var i =0; i <= num; i++){
       let element = i +" " + "X" + " " + num +" " + "=" + " " + i *3;
       console.log(element);
    }
   
}

console.log(numta(10));