// 01_cineplex_main.html, 02_cineplex_cinema.html > sort by 셀렉트 박스
$(document).ready(function () {
var selectTarget = $('.select_wrap select');
selectTarget.on('blur', function () {
    $(this).parent().removeClass('focus');
});
selectTarget.change(function () {
    var select_name = $(this).children('option:selected').text();
    $(this).siblings('label').text(select_name);
});

// 02_cineplex_cinema.html > bookmark 표시
$('.cinema_list .bookmark .link').on('click', function(e){
	e.preventDefault();
	$(this).parent().parent().toggleClass('on');
});

// 02_cineplex_cinema.html > 아코디언 메뉴
$('.cinema_system .link.menu').on('click', function(e){
	e.preventDefault();
	if($(this).hasClass('on')){
		$(this).removeClass('on');
		$(this).next().hide();
		$(this).next().next().hide();
	}else {
		$(this).addClass('on');
		$(this).next().show();
		$(this).next().next().show();
	};
});

//07_cineplex_movie_details.html > more 버튼
$('.more_wrap .link').on('click', function(e){
	e.preventDefault();
	$('.detail_info_wrap').toggleClass('open');
	if($(this).hasClass('more')){
		$(this).hide();
		$('.more_wrap .link.close').show();
	}else {
		$(this).hide();
		$('.more_wrap .link.more').show();
	};
});

//07_cineplex_movie_details.html > 레이어 팝업 감추기
$('.layer_pop_type.detail .link.close').on('click', function(e){
	e.preventDefault();
	$('.layer_pop_type.detail').hide();
	$('body').css({overflow:'visible'}).unbind('touchmove');
});

//08_cineplex_myticket.html > 레이어 팝업 노출
$('.ticket_list_wrap .link').on('click', function(e){
	e.preventDefault();
	$('.layer_pop_type.myticket').show();
	$('body').css({overflow:'hidden'}).bind('touchmove', function(e){e.preventDefault()});
});

//08_cineplex_myticket.html > 레이어 팝업 닫기
$('.layer_pop_type.myticket .link.close').on('click', function(e){
	e.preventDefault();
	$('.layer_pop_type.myticket').hide();
	$('body').css({overflow:'visible'}).unbind('touchmove');
});

//04_cineplex_seat_selection.html > 가로 스크롤 제어
var actualClientWidth = $('.screen_area_wrap').prop("clientWidth");
var actualScrollWidth = $('.screen_area_wrap').prop("scrollWidth");
$('.screen_area_wrap').scrollLeft((actualScrollWidth-actualClientWidth)*0.5);

});

