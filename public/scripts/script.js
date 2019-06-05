jQuery(document).ready(function(){
    jQuery(document).on('keypress', function(){
        jQuery('#search').focus();
    });
    jQuery('#segundo, #terceiro').hide();

    jQuery('#primeiro').on('click', function(){
        jQuery(this).fadeOut(function(){
            jQuery('#segundo').fadeIn();
        });
    });
    jQuery('#segundo').on('click', function(){
        jQuery(this).fadeOut(function(){
            jQuery('#terceiro').fadeIn();
        });
    });
    jQuery('#terceiro').on('click', function(){
        jQuery(this).fadeOut(function(){
            jQuery('#primeiro').fadeIn();
        });
    });
    
});