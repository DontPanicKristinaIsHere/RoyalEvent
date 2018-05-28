$('.burger').on('focus', function(){
	$('.menu').css('display', 'flex');
});

$('.burger').on('blur', function(){
	$('.menu').css('display', 'none');
});