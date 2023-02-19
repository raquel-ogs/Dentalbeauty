$(document).ready(function(){
    $('#menu').click(function(){
        //Abrir ou Fechar menu
        $("ul").toggleClass('slow')
    })
    
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
        
        //Animação para rolagem
        $('html, body').animate({ 
        scrollTop: targetOffset - 100
        }, 900);

        // Fechar menu
        $("ul").toggleClass('slow');

    });
    
})


