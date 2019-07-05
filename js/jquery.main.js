$(document).ready(function() {
	$("#first-main").click(function(){
		$("#header").slideUp();
	})


// if ($(window).width() < 700){
//         alert("mobile");
//     }
//     else {
//         alert("not mobile");
//     }
	$(".inpphone").mask("(999) 999-99-99 ");
	$("#topnav li a ").click(function(){
		var hrefone=$(this).attr("gotomob");
		$(".left-menu").removeClass("active");
		$("html,body").animate({scrollTop: $(`#${hrefone}`).offset().top});
	})
	$(".openmap").click(function(){
		$(".modalmapcont").addClass("active");
	})

	// $('.for-r').click(function() {
	// 	$(this).slickPrev();
	// });
// 	$('.emailinp').mask("A", {
// 	translation: {
// 		"A": { pattern: /[\w@\-.+]/, recursive: true }
// 	}
// });

	$(".holder").click(function() {
		if ($(this).find(".answer").is(':visible')) {
			$(this).find(".answer").slideUp();
		} else {
			$(".questions-block").find(".answer").slideUp();
			$(this).find(".answer").slideDown();
		}
	})
	$(".block-reasons .hold-choice input").click(function() {
		var nameofimg = $(this).val();
		$(this).parent().parent().parent().find("img").attr("src", `images/${nameofimg}`);
	})
	$(document).on('click', '.for-l', function() {
		$(this).parent().parent().parent().find('.artslide').slick('slickPrev');
		$(this).parent().parent().parent().find('.ekvalaizer-slider').slick('slickPrev');

		// $('.artslide').slick('slickPrev');
	});

	$(document).on('click', '.for-r', function() {
		$(this).parent().parent().parent().find('.artslide').slick('slickNext');
		$(this).parent().parent().parent().find('.ekvalaizer-slider').slick('slickNext');
		// $('.artslide').slick('slickNext');
	});
	$(".modulback").click(function() {
		$(this).parent().removeClass("active");
		 var leg=$('.modal-cont').find("iframe").attr("src");
    $('.modal-cont').find("iframe").attr("src",leg);
	})
	$(".calluseqv .button").click(function() {
		$(".modul2cont").addClass("active");
	})
	$(".modul2cont .button").click(function() {
		$(".modul2cont").removeClass("active");
		$(".modalhidethanks").addClass("active");
	})
	$(".block-visual .img-hold img").click(function() {
		$(".modul101cont").addClass("active");
	})
	$("header").find("a").click(function() {
		$("header").slideUp();
	})
	$(".partersslider").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1
	})
	$(".ekvalaizer-slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	})
	$(".artslide").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1
	})
	$(".toogle-menu").click(function() {
		$(".left-menu").addClass("active");
	})
	$(".close-menu, .overlay").click(function() {
		$(".left-menu").removeClass("active");
	})



	//methods
	// $('.goto').click(function(){
	// 	$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, {queue:false, duration: 700});
	// 	return false;
	// });

	initNav();
	// Объявляешь флаг
var isdrag = false;

// Вешаешь обработчик на отжатие мыши, и проверяешь дергаем ли мы слайдер
$(window).on('mouseup', function(){
setTimeout(function(){
if(isdrag){
  isdrag = false;
 }
}, 100)
 
})

// your-element поменяй на класс эдемента на котором инициируешь слик. Тут ты проверяешь и когда дергаем галерею ставишь флагу тру
$('.overlay-v').on('swipe', function(event, slick, direction){
  isdrag = true;
});

// Тут вместо modal-video ставишь класс модалок с видео которые должен открыть, и открываешь, я не помню как там у тебя, просто класс active, или ещё как-то
 			$(".overlay-v").on("click",function(){
 if(!isdrag){
 			var link = $(this).parent().find(".youtube").get(0).id;
		$(".modal-cont").html(`<iframe src="https://www.youtube.com/embed/${link}?autoplay=1&amp;autohide=1&amp;border=0&amp;wmode=opaque&amp;enablejsapi=1&amp;rel=0&amp;showinfo=0" allowfullscreen="" style="width: 100%;height: 100%;"></iframe>`);
		$(".modal-video").addClass("active");
  $(this).addClass('active')
 }
})
	// $(document).ready(function() {
	// 	$('form').validation();
	// 			$(".overlay-v").on("click",function(){
	// 	    if ( $(this).is('.ui-draggable-dragging') ) return false;
	// 	var link = $(this).parent().find(".youtube").get(0).id;
	// 	$(".modal-cont").html(`<iframe src="https://www.youtube.com/embed/${link}?autoplay=1&amp;autohide=1&amp;border=0&amp;wmode=opaque&amp;enablejsapi=1&amp;rel=0&amp;showinfo=0" allowfullscreen="" style="width: 100%;height: 100%;"></iframe>`);
	// 	$(".modal-video").addClass("active");

	// })
	// });
});

function initNav() {
	$('#header:has(#nav)').each(function() {
		var hold = $(this);
		var link = hold.find('.toogle-menu');
		var box = hold.find('.nav-holder');
		var wrap = $('#wrapper');
		var links = hold.find('.goto')

		link.click(function() {
			if (!hold.hasClass('open')) {
				setTimeout(function() {
					hold.addClass('open');
				}, 50);
				box.slideDown(500, function() {
					//wrap.css({height: hold.outerHeight()+box.outerHeight()});
					$('body').css({
						overflow: 'hidden'
					});
				});
			} else {
				box.slideUp(500, function() {
					hold.removeClass('open');
					//wrap.css({height: 'auto'});
				});
				$('body').css({
					overflow: 'visible'
				});
			}

			return false;
		});

		links.on('click', function() {
			$(window).trigger('closeNav')
		})

		$(window).bind('closeNav', function() {
			if (hold.hasClass('open')) {
				box.slideUp(500, function() {
					hold.removeClass('open');
				});
				$('body').css({
					overflow: 'visible'
				});
			}
		});


		$(window).bind('resize', function() {
			if (hold.hasClass('open')) {
				//wrap.css({height: hold.outerHeight()+box.outerHeight()});
			}
		});
	});
}


/**
 * jQuery validation v1.0.0
 * Copyright (c) 2015 JetCoders
 * email: yuriy.shpak@jetcoders.com
 * www: JetCoders.com
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 **/

;
(function($) {

	/**
	 * Private methods 
	 */
	var _checkFields = function(data, withClass) {
			data.valid = true;
			if (withClass) data.form.find('.' + data.errorClass + ', .' + data.validClass).removeClass(data.errorClass + ' ' + data.validClass);
			data.form.find('[data-required]').filter(':visible').not(':disabled').each(function() {
				if (data.reg[$(this).data('required')] == undefined && data.func[$(this).data('required')] == undefined) {
					$.error('Validate for data-required="' + $(this).data('required') + '" does not exist on jQuery.validation');
				} else {
					if (data.reg[$(this).data('required')] != undefined) {
						if (!data.reg[$(this).data('required')].test($(this).val()) || $(this).val() == $(this).attr('placeholder')) _addError($(this), data, withClass);
						else _addValid($(this), data, withClass);
					}
					if (data.func[$(this).data('required')] != undefined) {
						if (!data.func[$(this).data('required')](data, $(this))) _addError($(this), data, withClass);
						else _addValid($(this), data, withClass);
					}
				}
			});
			return !data.valid;
		},

		_addError = function(el, data, withClass) {
			data.valid = false;
			if (withClass) {
				el.addClass(data.errorClass);
				data.onAddClass(el, data.errorClass);
			}
		},

		_addValid = function(el, data, withClass) {
			if (withClass) {
				el.addClass(data.validClass);
				data.onAddClass(el, data.validClass);
			}
		},

		/**
		 * Public methods 
		 */

		methods = {
			init: function(options) {
				return this.each(function() {
					var $this = $(this);
					$this.data('validation', jQuery.extend(true, {}, defaults, options));
					var data = $this.data('validation');
					data.reg = data.reg;
					data.form = $this;
					data.submit = data.form.find(data.submitBtn);

					data.submit.click(function() {
						if (_checkFields(data, true)) {
							return data.onError(data);
						}
						return data.onValid(data);
					});
				});
			},
			option: function(name, element) {
				if (typeof element != 'object') element = this.eq(0);
				var $this = this.filter(element),
					data = $this.data('validation');
				if (!data) return this;

				return data[name];
			},
			destroy: function() {
				return this.each(function() {
					var $this = $(this),
						data = $this.data('validation');

					data.form.find('*').unbind('.validation');
					data.validation.remove();
					$this.removeData('validation');
				});
			}
		},

		/**
		 * Default params
		 */

		defaults = {
			errorClass: 'error',
			validClass: 'valid',
			dasableClass: 'disabled',
			submitBtn: 'input[type=submit], button[type=submit]',
			reg: {
				empty: /\S/,
				email: /^[_.0-9a-z-]+@([0-9a-z][0-9a-z-]+.)+[a-z]{2,4}$/,
				phone: /^([0-9][\-\.\s]{0,1}){7,}$/,
				number: /^[0-9]+$/,
				select: /([^\-]{1})$/,
				card: /^[0-9]{4}[\-\.\s]{0,1}[0-9]{4}[\-\.\s]{0,1}[0-9]{4}[\-\.\s]{0,1}[0-9]{4}$/
			},
			func: {
				checkbox: function(data, el) {
					return el.is(':checked');
				},
				radio: function(data, el) {
					return $('input:radio[name=' + el.attr('name') + ']').filter(':checked').length > 0;
				},
				equal: function(data, el) {
					return !data.reg.empty.test(el.val()) || !data.reg.empty.test($($(this).data('equal')).val()) || $this.val() != $($(this).data('equal')).val();
				}
			},
			onAddClass: function(el, className) {
				$(el).parent().addClass(className);
			},
			onValid: function() {},
			onError: function() {
				return false;
			}
		};

	$.fn.validation = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else {
			if (typeof method === 'object' || !method) {
				return methods.init.apply(this, arguments);
			} else {
				$.error('Method ' + method + ' does not exist on jQuery.validation');
			}
		}
	};

})(jQuery);