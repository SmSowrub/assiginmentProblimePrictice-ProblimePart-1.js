// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি  প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি  বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

// function isBestFriend(fastObject,secondObject){
//     if(fastObject.name ==secondObject.friend  && secondObject.name == fastObject.friend ){
//         return true;
//     }
//     else{
//         return false;
//     }
// }



function isBestFriend(fastObject,secondObject){
    if(fastObject.name == secondObject.friend && secondObject.name == fastObject.friend){
        return true;
    }
    else{
        return false;
    }
}

//  console.log(isBestFriend({ name: "abul", friend: "babul" },{ name: "babul", friend: "abul" })); "result -> true;"
// console.log(isBestFriend({ name: "doe", friend: "alex" },{ name: "john", friend: "doe" })); result -> false
// console.log(isBestFriend({ name: "abul", friend: "kabul" },{ name: "kabul", friend: "sabul" })); result -> false