// Your code goes here
const navHoverEffect = document.querySelector("nav")
// navHoverEffect.addEventListener('mouseover', function(event){
//     for(let i=0; i<event.length; i++){
//         event.target.style.color = 'red'
//     }
// })

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

const zoomImage = document.querySelector('.img-content img')
zoomImage.addEventListener('wheel', (event) => {
    let scale = 1;
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 2);
    zoomImage.style.transform = 'scale($[scale])'
})

// const entirePage = document.querySelector('body')
// entirePage.addEventListener('keydown', function(){
//     entirePage.alert = "Do you want to leave page"
// })

console.log(zoomImage)