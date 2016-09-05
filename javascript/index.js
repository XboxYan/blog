$(window).on('scroll',function(ev){
    if(document.body.scrollTop>250){
        $('#nav').addClass('sub');
    }else{
        $('#nav').removeClass('sub');
    }
})
