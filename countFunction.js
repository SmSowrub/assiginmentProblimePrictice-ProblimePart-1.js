// এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

// ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]


// // আউটপুটঃ 3

function countNumber(number){
    let arr = 0 ;
    for ( let i =0; i<number.length; i++){
        let element =number[i];
        if (element > 5){
            arr = arr + 1;
        }
        
    }
    return arr;
}

let number = [-1,2,-3,4,5,6,-7,8,-9,10];
console.log(countNumber(number));