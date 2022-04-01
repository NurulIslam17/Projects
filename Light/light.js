
const on = document.querySelector('#on');
const off = document.querySelector('#off');
const stat = document.querySelector('#status');

const main = document.getElementById('main');

const res = document.querySelector('#res');

on.addEventListener('click',() => {
    res.src='images/lOn.jpg';
    stat.innerHTML ="Light ON";
    main.style.background="rgb(240, 255, 36)";
})
off.addEventListener('click',() => {
  res.src='images/offf.png';
  stat.innerHTML ="Light OFF";
  main.style.background="white";
})