$(window).on('scroll',function(ev){
    if(document.body.scrollTop>240){
        $('#nav').addClass('sub');
    }else{
        $('#nav').removeClass('sub');
    }
})
