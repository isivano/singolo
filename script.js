/*////////////HEADER////////////*/

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


/*////////////PORTFOLIO////////////*/

let defaultGallery = document.querySelector("#portfolioGallery").innerHTML;
let portfolioButtons = document.querySelector("#portfolioNavigation").querySelectorAll('button');

document.querySelector("#portfolioButoonAll").addEventListener('click',function(){
    let galleryItems = document.querySelectorAll("#portfolioImage");
    let current = galleryItems.length-1;
    while (current >= 0){
        let randomFirst = Math.floor(Math.random() * current);
        let buffer = galleryItems[randomFirst].innerHTML;
        galleryItems[randomFirst].innerHTML = galleryItems[current].innerHTML;
        galleryItems[current].innerHTML = buffer;
        current--;
    }
    portfolioButtons.forEach(element => element.classList.remove('currentTab'));
    document.querySelector("#portfolioButoonAll").classList.add('currentTab');
});

document.querySelector("#portfolioButoonWebDesign").addEventListener('click',function(){
    let galleryItems = document.querySelectorAll("#portfolioImage");
    let prevImg = galleryItems[0].innerHTML;
    for (let i=galleryItems.length-1; i>=0; i--){
        let currentImg = galleryItems[i].innerHTML;
        galleryItems[i].innerHTML = prevImg;
        prevImg = currentImg;
    }
    portfolioButtons.forEach(element => element.classList.remove('currentTab'));
    document.querySelector("#portfolioButoonWebDesign").classList.add('currentTab');
});

document.querySelector("#portfolioButoonGraphicDesign").addEventListener('click',function(){
    let galleryItems = document.querySelectorAll("#portfolioImage");
    let nextImg = galleryItems[galleryItems.length-1].innerHTML;
    for (let i=0; i<galleryItems.length; i++){
        let currentImg = galleryItems[i].innerHTML;
        galleryItems[i].innerHTML = nextImg;
        nextImg = currentImg;
    }
    portfolioButtons.forEach(element => element.classList.remove('currentTab'));
    document.querySelector("#portfolioButoonGraphicDesign").classList.add('currentTab');
});

document.querySelector("#portfolioButoonArtWork").addEventListener('click',function(){
    document.querySelector("#portfolioGallery").innerHTML=defaultGallery;
    portfolioButtons.forEach(element => element.classList.remove('currentTab'));
    document.querySelector("#portfolioButoonArtWork").classList.add('currentTab');
});

document.querySelector("#portfolioGallery").addEventListener('click',function(){
    if (event.target.id!=="portfolioGallery"){
        document.querySelectorAll("#portfolioGallery img").forEach(element => element.classList.remove('activeImg'));
        event.target.classList.add('activeImg');
    }
});

document.querySelector("#contactFormSubmit").addEventListener('click',function(){
    console.log(document.contactForm.contactFormName.value);
});