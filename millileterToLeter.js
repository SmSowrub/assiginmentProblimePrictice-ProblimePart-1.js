// এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে।

function millilitersToLiter(milliliter){
    let millilitersToLiterConverter =milliliter * 0.001;
    return millilitersToLiterConverter +" " + "Liters";
}

console.log(millilitersToLiter(1000));