$(function(){
	$('header').append('<ul id="nav"></ul>');
	var triggerHeight = $(window).height() / 2;
    var sections = $('section h1').map(function(i, element){
    	var id = element.id,
    		title = $(element).text();
    	$('#nav').append('<li><a href="#'+id+'">'+title+'</a></li>');
    	return {
      		top: $(element).offset().top,
      		id: id
    	}
  	});

    // scroll highlight
    $(document).scroll(function(){
        var pos   = $(this).scrollTop();

        for ( i = 0; i < sections.length; i++){
        	if(sections[i].top > pos && sections[i].top < pos + triggerHeight){
        		console.log('ytue');
                $('#nav a').removeClass('current');
                $('#nav a[href="#'+sections[i].id+'"').addClass('current');
            }
    	}
            
    });

    // nav click
    $('#nav a').click(function(e){
    	e.preventDefault();
    	var target = $(this).attr('href');
    	$('html,body').animate({scrollTop: $(target).offset().top - 50}, 300);
    })

    // section fade
    var blocks = $('section');
	blocks.hover(function(){
		blocks.not(this).stop().animate({opacity:'.3'},300);
	},function(){
		blocks.stop().animate({opacity:1},300);
	});

})