// Your code goes here
const navHoverEffect = document.querySelector("nav");

navHoverEffect.addEventListener("mouseover", function(event){
    event.target.style.color = "red"
})

navHoverEffect.addEventListener("mouseout", function(event){
    event.target.style.color = "black"
})

const wholePage = document.querySelector('body')

document.addEventListener('keydown', function(e){
    wholePage.textContent += e.code
})

const clickTagH2 = document.querySelector('.intro h2')

clickTagH2.addEventListener('click', () => {
    clickTagH2.textContent = 'Hop on to the fun bus!'
})

const focusButton = document.querySelector(".btn")
focusButton.addEventListener('focus', (event) => {
    event.target.style.color = "pink"
})
focusButton.addEventListener('blur', (event) => {
    event.target.style.color = ""
})
focusButton.addEventListener('submit', (event) => {
    focusButton.innerHTML = "Submitted";
    event.preventDefault()
})

const doubleTrouble = document.querySelector('.text-content h2')
doubleTrouble.addEventListener('dblclick', () => {
    doubleTrouble.textContent = 'We are leaving!'
})

// window.addEventListener('resize', function(){
//     setTimeout(function(){
//         alert ('You are about to resize');
//     }, 3000)
// })




console.log(doubleTrouble)