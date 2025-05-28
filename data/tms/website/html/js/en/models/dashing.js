// car-color
ScrollReveal().reveal(".counter1", {
    reset: true,
    beforeReveal: () => {
        anime({
            targets: ".counter1",
            innerHTML: [0, 1598],
            round: 1,
            easing: "linear",
        });
        anime({
            targets: ".active-line1",
            width: "80%",
            easing: "linear",
        });
    },
    beforeReset: function (domEl) {
        anime({
            targets: ".active-line1",
            width: "0",
        });
    },
});
ScrollReveal().reveal(".counter2", {
    reset: true,
    beforeReveal: () => {
        anime({
            targets: ".counter2",
            innerHTML: [0, 197],
            round: 1,
            easing: "linear",
        });
        anime({
            targets: ".active-line2",
            width: "75%",
            easing: "linear",
        });
    },
    beforeReset: function (domEl) {
        anime({
            targets: ".active-line2",
            width: "0",
        });
    },
});
ScrollReveal().reveal(".counter3", {
    reset: true,
    beforeReveal: () => {
        anime({
            targets: ".counter3",
            innerHTML: [0, 290],
            round: 10,
            easing: "linear",
        });
        anime({
            targets: ".active-line3",
            width: "60%",
            easing: "linear",
        });
    },
    beforeReset: function (domEl) {
        anime({
            targets: ".active-line3",
            width: "0",
        });
    },
});
var carIndex = 1
function changeCar(index){
    carIndex = index
    $('.bottom ul li').removeClass('active-li')
    $('.carModel-color-bottom ul li').removeClass('active-li')
    $('.carModel-color-bottom ul li div').css('display','none')
    $('.bottom ul li').eq(index-1).addClass('active-li')
    $('.carModel-color-bottom ul li').eq(index-1).addClass('active-li')
    $('.carModel-color-bottom ul li').eq(index-1).find('div').css('display','block')
    if(index==1){
        $('.car-img img').attr('src','/data/tms/website/html/images/carModel/dashing/car1.png')
        $('.car-description').html('Black')
        $('.bottom .title').html('Black')
        $('.car-pc-color .right').css('background','linear-gradient(-30deg, #757575, #111111)')
        $('.right-box .right').css('background','linear-gradient(-30deg, #757575, #111111)')
    }
    if(index == 2){
        $('.car-img img').attr('src','/data/tms/website/html/images/carModel/dashing/car4.png')
        $('.car-description').html('Dark Gray')
        $('.bottom .title').html('Dark Gray')
        $('.car-pc-color .right').css('background','linear-gradient(-30deg, #737d8d, #393f46)')
        $('.right-box .right').css('background','linear-gradient(-30deg, #737d8d, #393f46)')
    }
     <!----删掉红色20230803----->
    //if(index == 3){
        // $('.car-img img').attr('src','/data/tms/website/html/images/carModel/dashing/car3.png')
        // $('.car-description').html('Red')
        // $('.bottom .title').html('Red')
        // $('.car-pc-color .right').css('background','linear-gradient(-30deg, #d23e42, #5b070a)')
        // $('.right-box .right').css('background','linear-gradient(-30deg, #d23e42, #5b070a)')
   //      }
    if(index == 3){
         $('.car-img img').attr('src','/data/tms/website/html/images/carModel/dashing/car7.png')
        $('.car-description').html('Light Gray')
        $('.bottom .title').html('Light Gray')
        $('.car-pc-color .right').css('background','linear-gradient(-30deg, #63676d, #b2b9c1)')
        $('.right-box .right').css('background','linear-gradient(-30deg, #63676d, #b2b9c1)')
    }    
    if(index == 4){
        $('.car-img img').attr('src','/data/tms/website/html/images/carModel/dashing/car2.png')
        $('.car-description').html('Blue')
        $('.bottom .title').html('Blue')
        $('.car-pc-color .right').css('background','linear-gradient(-30deg, #9dc2ea, #4b6a8e)')
        $('.right-box .right').css('background','linear-gradient(-30deg, #9dc2ea, #4b6a8e)')
    }
    if(index == 5){
         $('.car-img img').attr('src','/data/tms/website/html/images/carModel/dashing/car5.png')
        $('.car-description').html('White')
        $('.bottom .title').html('White')
        $('.car-pc-color .right').css('background','linear-gradient(-30deg, #edecec, #bfbfbf)')
        $('.right-box .right').css('background','linear-gradient(-30deg, #edecec, #bfbfbf)')
    }
    if(index == 6){
         $('.car-img img').attr('src','/data/tms/website/html/images/carModel/dashing/car6.png')
        $('.car-description').html('Green')
        $('.bottom .title').html('Green')
        $('.car-pc-color .right').css('background','linear-gradient(-30deg, #163937, #5d7c7b)')
        $('.right-box .right').css('background','linear-gradient(-30deg, #163937, #5d7c7b)')
    }     
}
// car-video
ScrollReveal().reveal(".title1", {
    reset: true,
    duration: 1500,
    opacity: 0,
    scale: 1,
    distance: "30px", //动画的距离
    origin: "top",
    easing: "linear",
    beforeReveal: () => {},
});
ScrollReveal().reveal(".title2", {
    reset: true,
    duration: 1500,
    opacity: 0,
    scale: 1,
    distance: "40px", //动画的距离
    origin: "top",
    easing: "linear",
    beforeReveal: () => {},
});
ScrollReveal().reveal(".comfort", {
    reset: true,
    duration: 1500,
    opacity: 0,
    scale: 1,
    distance: "30px", //动画的距离
    origin: "top",
    easing: "linear",
    beforeReveal: () => {},
});
var player = new Aliplayer(
    {
        id: "car-pc-screen-video",
        autoplay: true,
        rePlay: true,
        useH5Prism: true,
        width: "100%",
        height: "100%",
        source: '/data/tms/website/html/videos/model/dashing.mp4', //播放地址，可以是第三方直播地址，或阿里云直播服务中的拉流地址。
        isLive: false, //是否为直播播放。
        controlBarVisibility: "never",
    },
    function (player) {
        player.mute();
    }
);
// smart
ScrollReveal().reveal(".smartLi0", {
    reset: true,
    duration: 1500,
    opacity: 0,
    scale: 1,
    distance: "70px", //动画的距离
    origin: "top",
    easing: "linear",
    beforeReveal: () => {},
});
ScrollReveal().reveal(".smartLi1", {
    reset: true,
    duration: 1500,
    opacity: 0,
    scale: 1,
    distance: "70px", //动画的距离
    origin: "bottom",
    easing: "linear",
    beforeReveal: () => {},
});
ScrollReveal().reveal(".smartLi2", {
    reset: true,
    duration: 1500,
    opacity: 0,
    scale: 1,
    distance: "70px", //动画的距离
    origin: "top",
    easing: "linear",
    beforeReveal: () => {},
});
ScrollReveal().reveal(".smart-text", {
    reset: true,
    duration: 1500,
    opacity: 0,
    scale: 1,
    distance: "70px", //动画的距离
    origin: "top",
    easing: "linear",
    beforeReveal: () => {},
});
// safe
ScrollReveal().reveal(".safety-pc-top", {
    reset: true,
    duration: 1000,
    opacity: 0,
    scale: 1,
    distance: "50px", //动画的距离
    origin: "bottom",
    easing: "linear",
    beforeReveal: () => {},
});
ScrollReveal().reveal(".safety-top-img", {
    reset: true,
    delay: 500,
    duration: 1500,
    opacity: 0,
    scale: 0.5,
    easing: "linear",
});
ScrollReveal().reveal("#safety-title1", {
    reset: true,
    delay: 1500,
    duration: 1000,
    opacity: 0,
    distance: "50px",
    origin: "top",
    scale: 1,
    easing: "linear",
});
ScrollReveal().reveal("#safety-title2", {
    reset: true,
    delay: 2000,
    duration: 1000,
    opacity: 0,
    distance: "50px",
    origin: "top",
    scale: 1,
    easing: "linear",
});
new Swiper(".safety-swiper", {
    loop: true,
    slidesPerView: "auto",
    speed: 1000,
    slideToClickedSlide: true,
    centeredSlides: true,
    spaceBetween: 26,
    pagination: ".swiper-pagination",
    paginationType : 'progress',
});

// enjoy
ScrollReveal().reveal("#enjoy-title", {
    reset: true,
    duration: 1500,
    opacity: 0,
    scale: 1,
    distance: "50px", //动画的距离
    origin: "top",
    easing: "linear",
    beforeReveal: () => {},
});

new Swiper(".enjoy-swiper", {
    loop: true,
    speed: 1000,
    slidesPerView: "auto",
    slideToClickedSlide: true,
    centeredSlides: true,
    spaceBetween: 26,
    pagination: ".swiper-pagination",
    paginationType : 'progress',
});
new Swiper('.car-model-swiper',{
    loop:true,
    speed:1000,
    autoplay:5000,
    pagination: '.car-swiper-pagination',
    paginationClickable: true
})
// power
$("#demo-3").fsBanner({ trigger: "mouse" });
$("#demo-2").fsBannerCol({ trigger: "click" });
ScrollReveal().reveal("#power-title", {
    reset: true,
    duration: 1500,
    opacity: 0,
    scale: 1,
    distance: "50px", //动画的距离
    origin: "top",
    easing: "linear",
    beforeReveal: () => {},
});
