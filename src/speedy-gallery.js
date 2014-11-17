/*! Speedy-gallery - Super light-weight responsive photo gallery with thumbnails slider, touch support mobile optimized
 *  Authors: Piotr Skowron, Anna Kłosińska, Friscom s.c., 2014
 *  License: MIT/GPLv2
 */

(function ($) {
    $.speedygallery = function(el, options) {
	var gallery = $(el);
	gallery.options = $.extend({}, $.speedygallery.defaults, options);	
	
    }

    // plugin default settings
    $.speedygallery.defaults = {
	'container-class' : '.speedy-gallery',
	'nav-class' : '.nav',
	'nav-prev-class' : '.prev',
	'nav-prev-html' : '<',
	'nav-next-class' : '.next',
	'nav-next-html' : '>',

	'thumbnails-container-class' : '.speedy-gallery-thumbnails',
	'thumbnails-list-class' : '.speedy-gallery-thumbnails-list',
	'thumbnails-class' : '.thumbnails-nav',
	'thumbnails-prev-class' : '.thumbnails-prev',
	'thumbnails-prev-html' : '<<',
	'thumbnails-next-class' : '.thumbnails-next',
	'thumbnails-next-html' : '>>',
	
	'slider-activating-media-query' : '(min-width: 600px)',
	'slider-url' : 'slider-loader.php'
    };

    // init plugin
    $.fn.speedygallery = function (options) {
	options = options || {};
	if (typeof options === "object") {
	    new $.speedygallery(this, options);
	} else {
	    throw 'Options should be an object';
	}
    };
})(jQuery);