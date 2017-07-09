$(document).ready(function() {

//	alert(jQuery().jQuery);

// bootstrap tooltips
    jQuery('[data-toggle="tooltip"]').tooltip(); 


// scroll back to top
    var offset = 0;
    var duration = 800;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    }) 


// current year in footer
    var currentYear = (new Date).getFullYear();
    jQuery(".current-year").text( (new Date).getFullYear() );

});