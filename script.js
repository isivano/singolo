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

let navigationList = document.querySelectorAll("#navElement");
let anchorList = document.querySelectorAll(".anchor");
document.addEventListener('scroll',function(){    
    for (let i=0; i<anchorList.length; i++){
        if (window.pageYOffset>=anchorList[i].offsetTop){
            navigationList.forEach(element => element.classList.remove('currentNav'));
            navigationList[i].classList.add('currentNav');
        }
    }
});