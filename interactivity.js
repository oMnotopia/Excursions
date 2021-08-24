let titleHeader = document.querySelector('h1');
let subhead = document.querySelector('h2');
let video = document.querySelector('video');
let html = document.querySelector('html');


const changeFont = () => {
    titleHeader.style.fontFamily = 'Times-New-Roman';
    titleHeader.style.color = '#A43A29';
}

const changeBackground = () => {
    html.style.backgroundColor = '#1F1F66';
}

titleHeader.addEventListener('click', changeFont);
video.addEventListener('click', changeBackground);