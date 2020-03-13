document.querySelector("#horizPhoneButton").addEventListener('click',function(){
    let screen = document.querySelector("#horizPhoneScreen");
    if (screen.classList.value.indexOf('turnOff')<0) screen.classList.add('turnOff');
    else screen.classList.remove('turnOff');
});

document.querySelector("#vertPhoneButton").addEventListener('click',function(){
    let screen = document.querySelector("#vertPhoneScreen");
    if (screen.classList.value.indexOf('turnOff')<0) screen.classList.add('turnOff');
    else screen.classList.remove('turnOff');
});

