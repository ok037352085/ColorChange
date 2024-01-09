const seciton = document.querySelector('.sec');
const button = document.querySelector('.btn');
const bgText = document.querySelector('.bg-text');
const circle = document.querySelector('.clipPath-circle');
const inputFocus = document.querySelector('.newColor-input');



let newColor;
let clear = ''

function colorful()
{
    newColor = document.querySelector('.newColor-input').value;
    seciton.style.background = newColor;
    circle.style.background = newColor;
    circle.classList.add('active');
    bgText.classList.add('fade');
    inputFocus.value = clear;
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    colorful();
});

inputFocus.addEventListener('keydown', (e) => {
    if(event.key === 'Enter'){
        e.preventDefault();
        colorful();
    }
});

inputFocus.addEventListener('focus', () => {
    circle.classList.remove('active');
    bgText.classList.remove('fade');
})
