const h1 = document.querySelector('h1');
const btn = document.querySelector('#add-btn');
const minus = document.querySelector('#minus-btn');
const reset = document.querySelector('#reset');

h1.textContent = 0;

btn.addEventListener('click', ()=>{
    h1.textContent++;
});

minus.addEventListener('click', ()=>{
    h1.textContent--;
});

reset.addEventListener('click', ()=>{
    h1.textContent = 0;
});