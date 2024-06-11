    document.addEventListener('DOMContentLoaded', () => {
        const wishlistIcons = document.querySelectorAll('.wishlist-icon');
        const cartIcons = document.querySelectorAll('.cart-icon');
        const wishlistLink = document.getElementById('wishlist-link');
        const cartLink = document.getElementById('cart-link');
        let wishlistCount = 0;
        let cartCount = 0;

        wishlistIcons.forEach(icon => {
            icon.addEventListener('click', (e) => {
                e.preventDefault();
                const heartIcon = icon.querySelector('ion-icon');
                if (heartIcon.name === 'heart-outline') {
                    heartIcon.name = 'heart';
                    heartIcon.style.color = 'red';
                    wishlistCount++;
                } else {
                    heartIcon.name = 'heart-outline';
                    heartIcon.style.color = '';
                    wishlistCount--;
                }
                updateWishlistCount();
            });
        });

        cartIcons.forEach(icon => {
            icon.addEventListener('click', (e) => {
                e.preventDefault();
                const cartIcon = icon.querySelector('ion-icon');
                if (cartIcon.style.color === 'orange') {
                    cartIcon.style.color = '';
                    cartCount--;
                } else {
                    cartIcon.style.color = 'orange';
                    cartCount++;
                }
                updateCartCount();
            });
        });

        function updateWishlistCount() {
            wishlistLink.innerHTML = `<i class="fa fa-heart"></i> Wishlist (${wishlistCount})`;
        }

        function updateCartCount() {
            cartLink.innerHTML = `<i class="fa fa-shopping-cart"></i> Cart (${cartCount})`;
        }
    });

        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
        //owl//
        
        
    ///// Section-1 CSS-Slider /////    
    // Auto Switching Images for CSS-Slider
///// Section-1 CSS-Slider /////    
  // Auto Switching Images for CSS-Slider
  function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }

  var bannerTimer = setInterval(bannerSwitcher, 5000);

  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });


///// Anchor Smooth Scroll /////
//   $('.main-menu a, .learn-more-button a').click(function(e){
    
//     e.preventDefault();
        
//     var target = $(this).attr('href');
        
//     $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
//     return false;
//   });
    
    


    ///// Anchor Smooth Scroll /////
    //   $('.main-menu a, .learn-more-button a').click(function(e){
        
    //     e.preventDefault();
            
    //     var target = $(this).attr('href');
            
    //     $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
    //     return false;
    //   });
    //dq//



