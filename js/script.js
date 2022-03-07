// event pada saat link di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen tersebut
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('body').animate({
        scrolltop: elemenTujuan.offset().top - 50
    }, 1500, 'easeInOutExpo');

    e.preventDefault();
});






// paralaxx
$(window).scroll(function() {
    var wScroll = $(this).scrolltop();
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

});