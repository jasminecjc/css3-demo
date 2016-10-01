$(function () {
	var li = $('.icon li'),
		iconBack = $('#iconBack'),
		options = $('.options'),
		_this;

	li.click(function () {
		_this = $(this);
		$('#selected').removeAttr('id');
		$(this).attr('id', 'selected');
		$(this).siblings().each(function () {
			$(this).addClass('hidel');
		});
		options.addClass('show');
	});

	iconBack.click(function () {
		$('#selected').removeAttr('id');;
		_this.siblings().each(function () {
			$(this).removeClass('hidel');
		});
		options.removeClass('show');
	});
})