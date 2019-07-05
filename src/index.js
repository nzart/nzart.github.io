// import data from './data.js';
const data = [{
        id: 1,
        loc: './sugarapp.html',
        pic: './img/sugarComp.jpg',
        text: 'Sugar Tracker',
        ike: './img/code.svg'
    },
    {
        id: 2,
        loc: './research.html',
        pic: './img/researchComp.jpg',
        text: 'Research',
        ike: './img/pencil.svg'
    },
    {
        id: 3,
        loc: './travlr.html',
        pic: './img/travlrComp.jpg',
        text: 'TRAVLR',
        ike: './img/pencil.svg'
    },
    {
        id: 4,
        loc: 'https://nzart.github.io/runr/',
        pic: './img/runrComp.jpg',
        text: 'RUNR',
        ike: './img/code.svg'
    },
    {
        id: 5,
        loc: './todo.html',
        pic: './img/todoComp.png',
        text: 'To Do',
        ike: './img/code.svg'
    },
    {
        id: 6,
        loc: './t_shirt.html',
        pic: './img/tshirtComp.png',
        text: 'Branding',
        ike: './img/pencil.svg'
    },
    {
        id: 7,
        loc: './twitu.html',
        pic: './img/twituComp.png',
        text: 'TigerVision',
        ike: './img/pencil.svg'
    }    
]

addWork = data => {
    const link = document.createElement('a');

    const newDiv = document.createElement('div');
    newDiv.classList.add('newComp');

    const headImg = document.createElement('img');
    headImg.classList.add('compImg');

    const subContent = document.createElement('div');
    subContent.classList.add('subContent');

    const words = document.createElement('div');
    words.classList.add('text');

    const devDes = document.createElement('img');
    devDes.classList.add('subText');

    const wrapper = document.getElementById('workWrap');
    wrapper.appendChild(link);

    link.appendChild(newDiv);
    newDiv.appendChild(headImg);
    
    newDiv.appendChild(subContent);
    subContent.append(words);
    subContent.append(devDes);

    link.setAttribute ('href', data.loc);
    headImg.setAttribute('src', data.pic);
    words.innerHTML = data.text;
    devDes.setAttribute('src', data.ike); 
}
data.forEach(port => addWork(port));

