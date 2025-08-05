/* global $ */
$(document).ready(function() {
    // Footer toggle functionality for mobile and desktop
    $('.footer-links-wrapper h3').click(function() {
        // Only apply toggle on mobile screens (768px and below)
        if ($(window).width() <= 768) {
            const $this = $(this);
            const $ul = $this.next('ul');
            const $wrapper = $this.closest('.footer-links-wrapper');
            
            // Toggle the current section
            $ul.slideToggle(300);
            
            // Toggle plus/minus icon
            $this.toggleClass('active');
            
            // Close other open sections
            $wrapper.siblings().find('h3').removeClass('active');
            $wrapper.siblings().find('ul').slideUp(300);
        }
    });

    // Add toggle icons for mobile view
    if ($(window).width() <= 768) {
        $('.footer-links-wrapper h3').each(function() {
            $(this).append('<span class="toggle-icon"></span>');
        });
    }

    // Handle window resize
    $(window).resize(function() {
        if ($(window).width() > 768) {
            // Reset all sections to visible on desktop
            $('.footer-links-wrapper ul').show();
            $('.footer-links-wrapper h3').removeClass('active');
            $('.toggle-icon').remove();
        } else {
            // Add toggle icons for mobile
            if ($('.toggle-icon').length === 0) {
                $('.footer-links-wrapper h3').each(function() {
                    $(this).append('<span class="toggle-icon"></span>');
                });
            }
        }
    });
});
