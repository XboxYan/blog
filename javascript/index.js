$(window).on('scroll',function(ev){
    if(document.body.scrollTop>230){
        $('#nav').addClass('sub');
    }else{
        $('#nav').removeClass('sub');
    }
})
