$(document).ready(function() {

    $('#btn-text').mouseover(function(){
        $('#button').animate({top:'-=3px'},200);
        $('#button').css('box-shadow','0 0 2px 2px #fff');
    });
    
    $('#btn-text').mouseout(function(){
        $('#button').animate({top:'+=3px'},100);
        $('#button').css('box-shadow','none');
    });
    
    $('#btn-text').click(function(){
        if($(this).hasClass('hidden')){
            $('#content').fadeIn('fast');
            $('#btn-text').removeClass('hidden');
        }else{
            $('#content').fadeOut('fast');
            $('#btn-text').addClass('hidden');
        }
    });
    
});