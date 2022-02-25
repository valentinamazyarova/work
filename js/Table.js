let showRow = document.querySelectorAll('.dop');
let buttonMore = document.querySelector('.more');
let up = document.querySelector('.up');
let showRow1 = document.querySelector('.dop1');
let buttonMore1 = document.querySelector('.more1');
let up1 = document.querySelector('.up1');
let showRow2 = document.querySelector('.dop2');
let buttonMore2 = document.querySelector('.more2');
let up2 = document.querySelector('.up2');
let showRow3 = document.querySelectorAll('.dop3');
let buttonMore3 = document.querySelector('.more3');
let up3 = document.querySelector('.up3');
let showRow4 = document.querySelectorAll('.dop4');
let buttonMore4 = document.querySelector('.more4');
let up4 = document.querySelector('.up4');
let showRow5 = document.querySelector('.dop5');
let buttonMore5 = document.querySelector('.more5');
let up5 = document.querySelector('.up5');

buttonMore.addEventListener('click',() => {
    for(let i = 0, length = showRow.length; i < length; i++){
       showRow[i].classList.toggle('dop');
    } 
    up.classList.toggle('up') 
})
buttonMore1.addEventListener('click',() => {
    showRow1.classList.toggle('dop1')
    up1.classList.toggle('up1')
})
buttonMore2.addEventListener('click',() => {
    showRow2.classList.toggle('dop2')
    up2.classList.toggle('up2')
})
buttonMore3.addEventListener('click',() => {
    for(let i = 0, length = showRow3.length; i < length; i++){
       showRow3[i].classList.toggle('dop3');
    } 
    up3.classList.toggle('up3') 
})
buttonMore4.addEventListener('click',() => {
    for(let i = 0, length = showRow4.length; i < length; i++){
       showRow4[i].classList.toggle('dop4');
    } 
    up4.classList.toggle('up4') 
})
buttonMore5.addEventListener('click',() => {
    showRow5.classList.toggle('dop5')
    up5.classList.toggle('up5')
})





