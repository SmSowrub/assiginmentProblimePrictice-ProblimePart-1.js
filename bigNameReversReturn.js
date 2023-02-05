তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।
// not a goog parctice;
// let revers ="sowrub mojumder";
// function TowFriends(fastFriend,secondFriend){
//     let firstFriendLength =fastFriend.length;
//     let secondFriendLength =secondFriend.length;
//     let bigName="";
//     if(firstFriendLength > secondFriendLength){
//         bigName = firstFriendLength;
//         // console.log(bigName, fastFriend);
//        //  return bigName;
//     }
//     else{
//         bigName = secondFriendLength;
//         // console.log(bigName,secondFriend);
//         // return bigName;
//     }
   
//     let reverseName ="";
//     for (let i =0 ; i < revers.length; i++){
//         const temp =revers[i];
//         reverseName =reverseName + temp;
//         // console.log(reverseName);
//     }
//     return reverseName;
// }
// let fastFriend="Nazmul hasan";
// let lastFriend="Sowrub mojumder";
// console.log(TowFriends(fastFriend,lastFriend));

// good practice
// function largestString(strings) {
//     let largest = strings[0];
//     for (let i = 0; i < strings.length; i++) {
//         const string = strings[i];
//         if (string.length < largest.length) {
//             largest = string;
//         }
//     }
//     return largest;
// }

// console.log(largestString(['salam', 'hello', 'hi', 'how are you']));

// evrything ok revers not a done
function TowFriends (reversName){
    let reversBigName =reversName[0];
    for (let i = reversName.length-1; i >= 0; i--){
        let element = reversName[i];
        if(element.length > reversBigName.length){
            reversBigName = element;
        } 
    }
    return reversBigName;
}
let friends = ["Sowrub mojumder","Nazmul hasan"];
console.log(TowFriends(friends));