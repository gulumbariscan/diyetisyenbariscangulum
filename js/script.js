        var carousel = {
            slides: document.querySelectorAll('.carousel__slide'),
            currentSlide: 0,
            pressContainer: document.querySelector('.carousel'),
            next: null, // null until selected below
            prev: null
        };
        carousel.next = carousel.pressContainer.querySelector('.button--next');
        carousel.prev = carousel.pressContainer.querySelector('.button--prev');

        carousel.next.addEventListener('click', function(e) {
            nextSlide(carousel);
        });
        carousel.prev.addEventListener('click', function(e) {
            previousSlide(carousel);
        });

        function nextSlide(carousel) {
            carousel.slides[carousel.currentSlide].className = 'carousel__slide';
            carousel.currentSlide = (carousel.currentSlide + 1) % carousel.slides.length;
            carousel.slides[carousel.currentSlide].className = 'carousel__slide active';
        }

        function previousSlide(carousel) {
            carousel.slides[carousel.currentSlide].className = 'carousel__slide';

            if (carousel.currentSlide === 0)
                carousel.currentSlide = carousel.slides.length - 1;
            else
                carousel.currentSlide--;

            carousel.slides[carousel.currentSlide].className = 'carousel__slide active';
        }

        $(document).ready(function() {

            'use strict';

            var c, currentScrollTop = 0,
                navbar = $('nav');

            $(window).scroll(function() {
                var a = $(window).scrollTop();
                var b = navbar.height();

                currentScrollTop = a;

                if (c < currentScrollTop && a > b + b) {
                    navbar.addClass("scrollUp");
                } else if (c > currentScrollTop && !(a <= b)) {
                    navbar.removeClass("scrollUp");
                }
                c = currentScrollTop;
            });

        });