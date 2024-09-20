$(document).ready(function() {
    
    const texts = ["Frontend Developer.", "Software Developer.", "UI/UX Designer."];
    const speed = 80;
    let index = 0, textIndex = 0, isDeleting = false;

    function typeWriter() {
        const currentText = texts[textIndex];
        if (!isDeleting && index < currentText.length) {
            $("#typewriter").append(currentText.charAt(index));
            index++;
            setTimeout(typeWriter, speed);
        } else if (isDeleting && index > 0) {
            $("#typewriter").text(currentText.substring(0, index - 1));
            index--;
            setTimeout(typeWriter, speed);
        } else if (index === 0 && isDeleting) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; 
            setTimeout(typeWriter, speed);
        } else {
            isDeleting = true;
            setTimeout(typeWriter, 1000); 
        }
    }
    typeWriter();

    // Dropdown Menü
    let menuOpen = false;
    $(".dropdown-toggle").click(function(e) {
        e.stopPropagation();
        if (!menuOpen) {
            $(".dropdown-menu").slideDown(300);
            $(".footer").animate({ top: "+=150px" }, 300);
            menuOpen = true;
        }
    });

    $(document).click(function() {
        if (menuOpen) {
            $(".dropdown-menu").slideUp(300);
            $(".footer").animate({ top: "-=150px" }, 300);
            menuOpen = false;
        }
    });

    $(".dropdown-menu").click(function(e) {
        e.stopPropagation();
    });

    // Modal
    const $modal = $('#myModal'), $btn = $('.contact-btn'), $span = $('.close'), $form = $('#contactForm');

    $btn.on('click', function() {
        $modal.fadeIn();
    });

    $span.on('click', function() {
        $modal.fadeOut();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is($modal)) {
            $modal.fadeOut();
        }
    });

    $form.on('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
        $modal.fadeOut();
    });

    // Intersection Observer
    var options = { threshold: 0.9 };
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                $(entry.target).addClass('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    $('.hidden').each(function() {
        observer.observe(this);
    });

    // Hamburger Menü
    const $hamburgerBtn = $('#hamburger-btn'), $navLinks = $('.nav-links'), $navItems = $('.nav-links li a');

    $hamburgerBtn.on('click', function() {
        $navLinks.toggleClass('active');
        $(this).toggleClass('active');
    });

    $navItems.on('click', function() {
        $navLinks.removeClass('active');
        $hamburgerBtn.removeClass('active');
    });

    $(document).on('click', function(event) {
        const isClickInside = $hamburgerBtn.is(event.target) || 
                              $hamburgerBtn.has(event.target).length !== 0 || 
                              $navLinks.is(event.target) || 
                              $navLinks.has(event.target).length !== 0;

        if (!isClickInside) {
            $navLinks.removeClass('active');
            $hamburgerBtn.removeClass('active');
        }
    });
});



