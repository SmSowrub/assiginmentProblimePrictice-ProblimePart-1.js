// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।



// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// প্রতি লিটার অকটেনের এর দাম – 135 টাকা
// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা


// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে।

// .

function oilPrice(degel,octine,petrol){
    let degelPrice =degel * 114;
    let octinePrice = octine * 135;
    let petrolPrice = petrol * 130;   
    let totalOilPrice = degelPrice + octinePrice + petrolPrice;
    return totalOilPrice;
}

console.log(oilPrice(2,10,1));