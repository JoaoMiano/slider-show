let totalSlides = document.querySelectorAll('.slide--item').length

document.querySelector('.slide--width').style.width = `calc(100vw * ${totalSlides})`
document.querySelector('.slider--controls').style.height  = `${document.querySelector('.slider--area').clientHeight}px`

console.log()