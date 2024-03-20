const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");
const  increasebtn = document.getElementById("increase");
const countlable = document.getElementById('countlable');
let count =  0;
increasebtn.onclick = function(){
    count++;
    countlable.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countlable.textContent = count;
}
resetbtn.onclick = function(){
    count=0;
    countlable.textContent = count;
}