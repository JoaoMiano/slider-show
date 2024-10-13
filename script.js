let totalSlides = document.querySelectorAll('.slide--item').length
let currentSlide = 0
let slideInterval;

document.querySelector('.slide--width').style.width = `calc(100vw * ${totalSlides})`
document.querySelector('.slider--controls').style.height  = `${document.querySelector('.slider--area').clientHeight}px`

function goPrev(){
    currentSlide--
    if(currentSlide < 0){
        currentSlide = totalSlides - 1
    }
    updateMargin()
    resetSlideInterval()
}

function goNext(){
    currentSlide++
    if(currentSlide > (totalSlides-1)){
        currentSlide = 0;
    }
    updateMargin()
    resetSlideInterval()
}

function updateMargin(){
    let slideItemWidth = document.querySelector('.slide--item').clientWidth;
    let newMargin = (currentSlide * slideItemWidth)
    document.querySelector('.slide--width').style.marginLeft = `-${newMargin}px`;
}

slideInterval = setInterval(goNext, 4000)

function resetSlideInterval() {
    clearInterval(slideInterval); 
    slideInterval = setInterval(goNext, 4000); 
}