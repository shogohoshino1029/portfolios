$(window).on('scroll', function(){
    var head = $('.header-wrapper').height();
    var top = $(window).scrollTop();

    if (head < top) {
        $('.header-wrapper').addClass('change-color');

    } else {
        $('.header-wrapper').removeClass('change-color');
    }
});

$(function(){
    $('a[href^="#"]').click(function() {
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, 1000, 'swing');
        return false;
    });
});

$(function(){
    // 設定
    var $interval = 5000; // 切り替わりの間隔（ミリ秒）
    var $fade_speed = 5000; // フェード処理の早さ（ミリ秒）
    $(".img-wrapper img").hide().css({"position":"absolute","top":0,"left":0});
    $(".img-wrapper img:first").addClass("active").show();
    setInterval(function(){
    var $active = $(".img-wrapper img.active");
    var $next = $active.next("img").length?$active.next("img"):$(".img-wrapper img:first");
    $active.fadeOut($fade_speed).removeClass("active");
    $next.fadeIn(3000).addClass("active");
    },$interval);
});

$(function(){
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 1000);
        return false;
    });
});

$(function(){
    ScrollReveal().reveal('.top h1', {
        duration: 4000,
        origin: 'bottom',
        distance: '80px',
        reset: false
    });

    ScrollReveal().reveal('.concept1', {
        duration: 4000,
        origin: 'bottom',
        distance: '80px',
        reset: false
    });
    ScrollReveal().reveal('.concept2', {
        duration: 4000,
        origin: 'bottom',
        distance: '80px',
        reset: false
    });
    ScrollReveal().reveal('.concept3', {
        duration: 4000,
        origin: 'bottom',
        distance: '80px',
        reset: false
    });

    ScrollReveal().reveal('.service-item1', {
        duration: 4000,
        origin: 'bottom',
        distance: '80px',
        reset: false
    });
    ScrollReveal().reveal('.service-item2', {
        duration: 4000,
        origin: 'bottom',
        distance: '80px',
        reset: false
    });
    ScrollReveal().reveal('.service-item3', {
        duration: 4000,
        origin: 'bottom',
        distance: '80px',
        reset: false
    });
});

$(function(){
    let mySwiper = new Swiper ('.swiper-container', {
        // 以下にオプションを設定
        loop: true, //最後に達したら先頭に戻る

        //ページネーション表示の設定
        pagination: {
          el: '.swiper-pagination', //ページネーションの要素
          type: 'bullets', //ページネーションの種類
          clickable: true, //クリックに反応させる
        },

        //ナビゲーションボタン（矢印）表示の設定
        navigation: {
          nextEl: '.swiper-button-next', //「次へボタン」要素の指定
          prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
        },
    });
});

$(function(){
    $('.menu-trigger').on('click',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('nav').removeClass('open');
            $('.overlay').removeClass('open');
        } else {
            $(this).addClass('active');
            $('nav').addClass('open');
            $('.overlay').addClass('open');
        }
    });
    $('.overlay').on('click',function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $('.menu-trigger').removeClass('active');
            $('nav').removeClass('open');
        }
    });
    $('header nav ul li a').on('click', function(){
        if($('.overlay').hasClass('open')){
            $(this).removeClass('open');
            $('.menu-trigger').removeClass('active');
            $('nav').removeClass('open');
        }
    });
});
