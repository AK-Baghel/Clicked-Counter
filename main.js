let total=0;

document.querySelector('.positive').addEventListener('click',increase);
document.querySelector('.negative').addEventListener('click',decrease);
document.querySelector('.reset').addEventListener('click',reset);

function increase(){
    let input=document.getElementById('num').value;
    total+=Number(input);
    console.log(total)
    document.querySelector('.counter').innerText=total;
}

function decrease(){
    let input=document.getElementById('num').value;
    total-=Number(input);
    document.querySelector('.counter').innerText=total;
}

function reset(){
    document.querySelector('.counter').innerText=0;
    document.getElementById('num').value="";
    total=0;
}
