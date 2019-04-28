let staticTitle = document.querySelector('.staticTitle');
let dynamicTitle = document.querySelector('.dynamicTitle');
let delay = time => new Promise(resolve =>setTimeout(resolve, time));

window.onload = ()=>{
        staticTitle.style='transform: translate(-20%, -120%); opacity:1;';
        dynamicTitle.style='transform: translate(10%, -80%); opacity:1';
};