// function radians_to_degrees(radians)
// {
//   var pi = Math.PI;
//   return radians * (180/pi);
// }
// console.log(radians_to_degrees(12));

// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
function radianToDegree(radians){
    let radiansValue =Math.PI;
    return radians * (180/radiansValue);
}
console.log(radianToDegree(12));