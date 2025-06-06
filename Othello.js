let oth = document.getElementById("oth")
let mod = document.getElementById("mod")
let body = document.getElementById("body");
let maskone = document.getElementById("maskone");
let masktwo = document.getElementById("masktwo");
let texxt = document.getElementById("textt")
let clicks = 0;
let iago = document.getElementById("iago")
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
}