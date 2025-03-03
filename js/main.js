// EMIT Mühendislik Web Sitesi JavaScript Kodları

$(document).ready(function() {
    // Owl Carousel (Müşteri Yorumları için)
    $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        navContainer: '.testimonial-nav',
        dotsContainer: '.testimonial-dots',
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    
    // Owl Carousel (Referanslar için)
    $(".referans-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // Smooth Scroll İşlemi
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-bs-toggle="carousel"]').not('[data-bs-toggle="collapse"]').not('[data-bs-toggle="dropdown"]').click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 800);
            }
        }
    });

    // Navbar'ın Scroll Durumunda Arkaplanının Değiştirilmesi
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });

    // Form Gönderme İşlemi
    $('form').submit(function(event) {
        event.preventDefault();
        
        // Form verilerini al
        let formData = {
            name: $(this).find('input[type="text"]').first().val(),
            email: $(this).find('input[type="email"]').val(),
            company: $(this).find('input[type="text"]').eq(1).val(),
            service: $(this).find('select').val(),
            message: $(this).find('textarea').val()
        };
        
        // Burada AJAX ile form gönderme işlemi yapılabilir
        console.log('Form verileri:', formData);
        
        // Form gönderildi mesajı
        let formParent = $(this).parent();
        $(this).fadeOut(function() {
            formParent.html(`
                <div class="text-center p-5">
                    <i class="fas fa-check-circle text-success fa-4x mb-4"></i>
                    <h4>Mesajınız İletildi!</h4>
                    <p class="mb-4">En kısa sürede sizinle iletişime geçeceğiz.</p>
                    <button class="btn btn-danger" onclick="location.reload()">Yeni Mesaj Gönder</button>
                </div>
            `);
        });
    });

    // Aktif Menü Öğesinin Belirlenmesi
    function setActiveMenuItem() {
        let scrollPosition = $(window).scrollTop() + 100;
        
        $('section').each(function() {
            let target = $(this).attr('id');
            let offset = $(this).offset().top;
            let height = $(this).height();
            
            if(scrollPosition >= offset && scrollPosition < offset + height) {
                $('.navbar .nav-link').removeClass('active');
                $('.navbar .nav-link[href="#' + target + '"]').addClass('active');
                
                // Dropdown içindeki linkler için kontrol
                if($('.navbar .dropdown-item[href="#' + target + '"]').length) {
                    $('.navbar .nav-link.dropdown-toggle').addClass('active');
                }
            }
        });
    }
    
    // Sayfa yüklendiğinde ve scroll edildiğinde aktif menü öğesini belirle
    $(window).on('load scroll', setActiveMenuItem);

    // Counter animasyonu
    $('.counter').each(function() {
        var $this = $(this);
        var countTo = parseInt($this.text());
        
        $({ countNum: 0 }).animate({
            countNum: countTo
        }, {
            duration: 2000,
            easing: 'swing',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                // Eğer yüzde işareti varsa tekrar ekle
                if ($this.next().is('span') && $this.next().text() === '%') {
                    // Yüzde işareti zaten var
                } else if ($this.siblings('.percent').length) {
                    // Yüzde zaten var
                }
            }
        });
    });
}); 