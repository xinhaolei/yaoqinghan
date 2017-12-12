/* Initialize Swiper */
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
    },
    loop:true,
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }

});

/*音乐*/
var music=document.getElementById("music");
var music_tu=document.querySelectorAll(".music_tu")[0];
var audio=document.querySelector("audio");
var flag=1;
music.onclick=function(){
    if(flag==1){
        music_tu.style.animation="none";
        audio.pause();
        flag=0;
    }else {
        music_tu.style.animation=" run 2s 0s linear infinite";
        audio.play();
        flag=1;
    }
};