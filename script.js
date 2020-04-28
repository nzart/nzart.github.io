let nav = document.querySelector('.nav');
let logo = document.querySelector('.logo');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');


window.onscroll = () => { 
    "use strict";
    if (window.pageYOffset >= 200 ) {
        nav.style.backgroundColor = '#050505';
        logo.style.color = '#fcfcfc';
        first.style.color = '#fcfcfc';
        second.style.color = '#fcfcfc';
        third.style.color = '#fcfcfc';
    } 
    else {
//        nav.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        nav.style.backgroundColor = '#fcfcfc';
        logo.style.color = '#6414c1';
        first.style.color = '#050505';
        second.style.color = '#050505';
        third.style.color = '#050505';
    }
    
    let rotate = document.getElementById('rotate');
  
    let scroll = ((window.pageYOffset) / 4);
  
    let nev = -Math.abs(scroll);
  
    rotate.style.transform = `rotate(${nev}deg)`;
};




ScrollReveal().reveal('h1', {
    delay: 500
});

ScrollReveal().reveal('p', {
    delay: 500
});

ScrollReveal().reveal('img', {
    delay: 500
})

