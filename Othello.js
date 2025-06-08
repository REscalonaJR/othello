let oth = document.getElementById("oth");
let qoth = document.getElementById("qoth");
let mod = document.getElementById("mod");
let qmod = document.getElementById("qmod");
let body = document.getElementById("body");
let maskone = document.getElementById("maskone");
let masktwo = document.getElementById("masktwo");
let texxt = document.getElementById("textt");
let clicks = 0;
let iago = document.getElementById("iago");
let oth1 = document.getElementById("oth1");
let oth2 = document.getElementById("oth2");
let oth3 = document.getElementById("oth3");
let oth4 = document.getElementById("oth4");
let oth5 = document.getElementById("oth5");
let mod1 = document.getElementById("mod1");
let mod2 = document.getElementById("mod2");
let mod3 = document.getElementById("mod3");
let mod4 = document.getElementById("mod4");
let mod5 = document.getElementById("mod5");
maskone.addEventListener("click", reveal);
function reveal() {
    clicks++;
    if(clicks%2 != 0) {
        masktwo.classList.add("active");
        masktwo.classList.remove("deactive");
        setTimeout(dark, 1000);

    }
    else{
        masktwo.classList.add("deactive");
        masktwo.classList.remove("active");
        setTimeout(light, 1000);
    }
}
function dark(){
    body.style.backgroundColor = "black";
    maskone.innerHTML = '<img src="Assets/lightfrown.png" alt="drama mask">';
    masktwo.innerHTML = '<img src="Assets/lightsmile.png" alt="drama mask">';
    texxt.innerHTML = "VS REALITY";
    texxt.style.color = "white";
    iago.style.borderColor = "white";
    oth.style.color = "white";
    mod.style.color = "white";
    qmod.style.borderColor = "white";
    qoth.style.borderColor = "white";
    document.querySelectorAll('.quote').forEach(el => {
    el.style.border = '3px solid white';
    el.style.color = "white";
});
    oth1.innerHTML = '“i am not what i am”(I,I,69) 1603-1604';
    oth2.innerHTML = '"I will in Cassio’s lodging lose this napkin And let him find it. Trifles light as air Are to the jealous confirmations strong As proofs of holy writ."(III,III,363-366)1603-1604';
    oth3.innerHTML = '"Alas, what ignorant sin have I committed?"(IV,II,79)1603-1604';
    oth4.innerHTML = '"So will I turn her virtue into pitch And out of her own goodness make the net That shall enmesh them all."(II,III,363-365)1603-1604';
    oth5.innerHTML = '"I hate the Moor."(I,III,390-391)';
    mod1.innerHTML = '"I am <i>always</I> afraid"-Children of Blood and Bone 2018';
    mod2.innerHTML = '"Why? Why do i have to go through this?"- Hajime no ippo season 2 episode 18, 2009';
    mod3.innerHTML = '"You see, as i was testing honey across different stores, i was encountering a reoccuring issue. when i reachad the checkout page, honey would claim it'+" couldn't find me any coupon codes. Yet when i searched manually i found working codes manually with ease. And even when Honey did find me a code, I was often able to find another code of better value."+'"-MegaLag. youtube.com';
    mod4.innerHTML = '"I realized that my team, the Reardan Indians, was Goliath. I mean, jeez, all of the seniors on our team were going to college. All of the guys on our team had their own cars. All of the guys on our team had iPods and cell phones and PSPs and three pairs of blue jeans and ten shirts and mothers and fathers who went to church and had good jobs. Okay, so maybe my white teammates had problems, serious problems, but none of their problems was life threatening. But I looked over at the Wellpinit Redskins, at Rowdy. I knew that two or three of those Indians might not have eaten breakfast that morning. No food in the house. I knew that seven or eight of those Indians lived with drunken mothers and fathers. I knew that one of those Indians had a father who dealt crack and meth. I knew two of those Indians had fathers in prison. I knew that none of them was going to college. Not one of them"(189,Alexie)-Diary of a Part-Time Indian 2007';
}
function light(){
    body.style.backgroundColor = "white";
    maskone.innerHTML = '<img src="Assets/darkmaskfrown.png" alt="drama mask">';
    masktwo.innerHTML = '<img src="Assets/darkmasksmile.png" alt="drama mask">';
    texxt.innerHTML = "APPEARANCE";
    texxt.style.color = "black";
    iago.style.borderColor = "black";
    oth.style.color = "black";
    mod.style.color = "black";
    qmod.style.borderColor = "black";
    qoth.style.borderColor = "black";
    document.querySelectorAll('.quote').forEach(el => {
  el.style.border = '3px solid black';
        el.style.color = "black";
});
    mod4.innerHTML = '"We had defeated the enemy! We had defeated the cham-pions! We were David'+"who'd"+ ' thrown a stone into the brain of Goliath!"(189,Alexie)-Diary of a Part-Time Indian 2007';
    mod3.innerHTML = '“We search for coupons at 30,000+ sites to help you save money” joinhoney.com 2025';
    mod2.innerHTML = '“This is nothing! Watch me drop 20 kg like it’s easy!”- Hajime no ippo season 2 episode 18, 2009';
    mod1.innerHTML = '"They will not take me. They will not take me. I will force them to kill me where i stand."(66,Adeyemi)-Children of Blood and Bone 2018';
    oth5.innerHTML ='"My lord, you know I love you."(III,III,133) 1603-1604';
    oth4.innerHTML = '"Our general’s wife is now the general. I may say so in this respect, for that he hath devoted and given up himself to the contemplation, mark, and denotement of her parts and graces. Confess yourself freely to her, importune her help to put you in"(II,III,318-322)1603-1604';
    oth3.innerHTML = '"She’s gone, I am abused, and my relief Must be to loathe her."(III,III,301-302)1603-1604';
    oth2.innerHTML = '“My wayward husband hath a hundred times Wooed me to steal it, but she so loves the token (For he conjured her she should ever keep it) That she reserves it evermore about her'+ " To kiss and talk to. I’ll have the work ta'en out And give ’t Iago. What he will do with it Heaven knows, not I."+'I nothing but to please his fantasy.”(!II,III,331-338) 1603-1604'; 
    oth1.innerHTML = '"This fellow’s of exceeding honesty And knows all quantities, with a learnèd spirit, Of human dealings."(III,III,292+294)1603-1604';
}