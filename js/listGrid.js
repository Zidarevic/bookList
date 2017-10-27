$('.button').on('click',function() {
	
	if ($(this).hasClass('grid')) {
		
		$('section').removeClass('list').addClass('grid');
		$('header .list').show();
		$('header .grid').hide();
	}
	else if($(this).hasClass('list')) {
		
		$('section').removeClass('grid').addClass('list');
		$('header .list').hide();
		$('header .grid').show();
	}
});