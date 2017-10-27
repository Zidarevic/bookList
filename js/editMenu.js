/*find edit and open it*/
$(document).ready(function() {
	
	var faqTab = $('.col-bot .col-right'),
	faqTabContainer = $('.column-item');
	
	if(faqTab.length) {
		
		faqTab.off('click').on('click', function() {
			
			var faqRow = $(this).parent().parent();
			faqContent = $(this).parent().parent().find('.edit');
			
			faqTabContainer.find('.edit').not(faqContent).stop().slideUp('fast');
			faqTabContainer.find('.col-bot').not(faqRow).removeClass('open');
			faqRow.toggleClass('open');
			faqContent.stop().slideToggle('fast');
		});
	}
});

/*hide edit when it's clicked outside col-bot.open*/
$(document).mouseup(function(e) {
	
	var container = $(".col-bot.open");
	var containerContent = $(".col-bot.open .col-right");
	faqContent = container.find('.edit');
	
	if (!containerContent.is(e.target) && container.has(e.target).length === 0) {
		
		faqContent.slideUp('fast');
		container.toggleClass('open');
	}
});