$(document).ready(function(){

	$(window).scroll(function(){
		var windowWidth = $(window).width();

		if(windowWidth > 800){
			var scroll = $(window).scrollTop();

			$('header .textos').css({
				'transform': 'translate(0px,' + scroll / 2 + '%)'
			});

			$('.acerca-de article').css({
				'transform': 'translate(0px, -' + scroll / 4 + '%)'
			});
		}
	});

	$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth < 800) {
			$('.acerca-de article').css({
				'transform': 'translate(0px, 0px)'
			});
		}
	});

});

$(document).ready(function(){

    // Efecto Menu
        $('.menu a').each(function(index, elemento){
            $(this).css({
                'top': '-200px'
            });
    
            $(this).animate({
                top: '0'
            }, 2000 + (index * 500));
        });
    

     
        
    
    });