const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const colors = ['yellow','red','green','#3b5998'];

colorBtn.addEventListener('click',changeColor);
function changeColor(){
    // bodyBcg.style.backgroundColor = colors[2];
    let random = Math.floor(Math.random()*colors.length);// max is 3.6 which will then be rounded down to 3
    bodyBcg.style.backgroundColor = colors[random];
}


