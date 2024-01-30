function loadingAnimation() {
    var t1 = gsap.timeline();
    t1.from(".loader h1,.loader h2", {
        y: 120,
        stagger: 0.2,
        duration: .7,
        delay: .5
    })
    t1.to(".loader", {
        opacity: 0,
        delay: 1.8,
        stagger: -.2
    })
    t1.to("#loadpage", {
        y: "-100%",
        duration: 1,
        ease: "power4.out",
    })
    t1.from(".text h1", {
        y: 200,
        opacity: 0,
        stagger: {
            amount: 0.5
        }
    })
    t1.from("#nav", {
        opacity: 0,
        delay: -0.5
    })

    var grow = 0
    var loading = document.querySelector("#loading h5")
    var int = setInterval(function () {
        if (grow < 100) {
            grow++
            loading.innerHTML = grow
        }
    }, 35)
    setTimeout(function () {
        clearInterval(int)
    }, 3500)

}
loadingAnimation()

function page2Animation() {
    var videoC = document.querySelector("#video-container")
    videoC.addEventListener("mouseenter", function () {
        gsap.to(".mousefollower", {
            opacity: 0,
        })
    })
    videoC.addEventListener("mouseleave", function () {
        gsap.to(".mousefollower", {
            opacity: 1,
        })
        gsap.to("#play-btn", {
            left: "68%",
            top: "-7%",
        })
    })
    var videoVideo = document.querySelector("#video-container video")
    var flag = 0
    videoC.addEventListener("click", function () {
        if (flag == 0) {
            gsap.to(videoVideo, {
                opacity: 1
            })
            videoVideo.play();
            document.querySelector("#play-btn").innerHTML = `<i class="ri-pause-line"></i>`
            gsap.to("#play-btn", {
                scale: 0.7
            })
            flag = 1
        }
        else {
            gsap.to(videoVideo, {
                opacity: 0
            })
            videoVideo.pause();
            document.querySelector("#play-btn").innerHTML = `<i class="ri-play-fill"></i>`
            gsap.to("#play-btn", {
                scale: 1
            })
            flag = 0
        }

    })
    videoC.addEventListener("mousemove", function (dets) {
        gsap.to("#play-btn", {
            left: dets.x - 450,
            top: dets.y - 200
        })
    })
}
page2Animation()


Shery.mouseFollower();


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});