const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","F"];

const btn = document.getElementById('btn');
const code = document.querySelector(".code");

btn.addEventListener('click',function(){
let hexCode = "#";
for ( let i = 0; i<6; i++){
hexCode += hex [getRandomNumber ()];


}

code.textContent = hexCode ;
document.body.style.backgroundColor =  hexCode ; 

});
function getRandomNumber (){
    return Math.floor(Math.random() * hex.length);
}
