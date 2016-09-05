$(window).on('scroll',function(ev){
    if(document.body.scrollTop>240){
        $('#nav').addClass('sub');
        console.log(33)
    }else{
        $('#nav').removeClass('sub');
    }
})
