$(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        navText:['<img src="../img/left.svg" alt="arrow">', '<img src="../img/right.svg" alt="arrow">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1.5
            },
            1000:{
                items:1.5
            }
        }
    });

});