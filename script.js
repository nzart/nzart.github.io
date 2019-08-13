var nav = document.querySelector('.nav');
var logo = document.querySelector('.logo');
var first = document.querySelector('.first');
var second = document.querySelector('.second');
var third = document.querySelector('.third');
window.onscroll = function () { 
    "use strict";
    if (window.pageYOffset >= 200 ) {
        nav.style.backgroundColor = '#000';
        logo.style.color = '#fff';
        first.style.color = '#fff';
        second.style.color = '#fff';
        third.style.color = '#fff';
    } 
    else {
        nav.style.backgroundColor = '#fff';
        logo.style.color = '#6414c1';
        first.style.color = '#000';
        second.style.color = '#000';
        third.style.color = '#000';
    }
};

