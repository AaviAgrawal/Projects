// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
var t1 = gsap.timeline();
t1.from(".loader h1,.loader h2",{
    y:120,
    stagger:0.2,
    duration:.7,
    delay:.5
})
t1.to(".loader",{
    opacity:0,
    delay:1.8,
    stagger:-.2
})
t1.to("#loadpage",{
    y:"-100%",
    duration:1, 
    ease: "power4.out",
})

var grow = 0
var loading = document.querySelector("#loading h5")
var int = setInterval(function(){
    if(grow<100){
        grow++
        loading.innerHTML = grow
    }
},35)
setTimeout(function(){
    clearInterval(int)
},3500)