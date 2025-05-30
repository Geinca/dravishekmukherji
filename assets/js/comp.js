document.addEventListener("DOMContentLoaded", function () {
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("components/top.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("top").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});


// nav section
document.addEventListener("DOMContentLoaded", function () {
    // Load navbar component dynamically
    fetch("components/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav").innerHTML = data;
            inithammenu();
        });
});

function inithammenu(){
             const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileSidebar = document.getElementById('mobileSidebar');
            const mobileOverlay = document.getElementById('mobileOverlay');
            const mobileSidebarClose = document.getElementById('mobileSidebarClose');
            const body = document.body;
            
            // Toggle mobile sidebar
            function toggleSidebar() {
                mobileSidebar.classList.toggle('active');
                mobileOverlay.classList.toggle('active');
                body.style.overflow = mobileSidebar.classList.contains('active') ? 'hidden' : '';
                
                // Change menu icon
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
            
            mobileMenuBtn.addEventListener('click', toggleSidebar);
            mobileSidebarClose.addEventListener('click', toggleSidebar);
            
            // Close sidebar when clicking overlay
            mobileOverlay.addEventListener('click', toggleSidebar);
            
            // Close sidebar when clicking on a link
            document.querySelectorAll('.mobile-nav-link, .mobile-cta-button').forEach(link => {
                link.addEventListener('click', toggleSidebar);
            });

            // Highlight current page
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            document.querySelectorAll('.nav-links a, .mobile-nav-link').forEach(link => {
                const linkPage = link.getAttribute('href');
                if (currentPage === linkPage) {
                    link.classList.add('active');
                }
            });

            // Close sidebar when window is resized
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && mobileSidebar.classList.contains('active')) {
                    toggleSidebar();
                }
            });
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("components/servicebox.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sbox").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});



document.addEventListener("DOMContentLoaded", function () {
    fetch("components/aviabout.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("aviabout").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});










document.addEventListener("DOMContentLoaded", function () {
    fetch("components/why.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("why").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});



document.addEventListener("DOMContentLoaded", function () {
    fetch("components/doctors.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("doctors").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});

// hero
document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/hero.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("hero").innerHTML = data;
            initheroc();  // Initialize carousel after loading hero section
        });
});

function initheroc() {
    const slidesContainer = document.querySelector('.carousel-slides');
            const slides = document.querySelectorAll('.carousel-slide');
            const dots = document.querySelectorAll('.carousel-dot');
            const prevBtn = document.querySelector('.arrow-left');
            const nextBtn = document.querySelector('.arrow-right');
            let currentIndex = 0;
            let slideInterval;
            
            // Initialize carousel
            function goToSlide(index) {
                slidesContainer.style.transform = `translateX(-${index * 100}%)`;
                currentIndex = index;
                
                // Update dots
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
            }
            
            // Next slide
            function nextSlide() {
                const newIndex = (currentIndex + 1) % slides.length;
                goToSlide(newIndex);
            }
            
            // Previous slide
            function prevSlide() {
                const newIndex = (currentIndex - 1 + slides.length) % slides.length;
                goToSlide(newIndex);
            }
            
            // Auto-rotation
            function startAutoSlide() {
                slideInterval = setInterval(nextSlide, 5000);
            }
            
            function stopAutoSlide() {
                clearInterval(slideInterval);
            }
            
            // Event listeners
            prevBtn.addEventListener('click', function() {
                prevSlide();
                stopAutoSlide();
                startAutoSlide();
            });
            
            nextBtn.addEventListener('click', function() {
                nextSlide();
                stopAutoSlide();
                startAutoSlide();
            });
            
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    goToSlide(index);
                    stopAutoSlide();
                    startAutoSlide();
                });
            });
            
            // Touch support for mobile
            let touchStartX = 0;
            let touchEndX = 0;
            
            slidesContainer.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].clientX;
                stopAutoSlide();
            }, { passive: true });
            
            slidesContainer.addEventListener('touchend', e => {
                touchEndX = e.changedTouches[0].clientX;
                handleSwipe();
                startAutoSlide();
            }, { passive: true });
            
            function handleSwipe() {
                const difference = touchStartX - touchEndX;
                if (difference > 50) nextSlide(); // Swipe left
                if (difference < -50) prevSlide(); // Swipe right
            }
            
            // Initialize
            goToSlide(0);
            startAutoSlide();
            
            // Pause on hover
            slidesContainer.addEventListener('mouseenter', stopAutoSlide);
            slidesContainer.addEventListener('mouseleave', startAutoSlide);
}




document.addEventListener("DOMContentLoaded", function () {
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});



// infodr
document.addEventListener("DOMContentLoaded", function () {
    fetch("components/infodr.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("info").innerHTML = data;
             document.querySelector('.dm-know-more-btn').addEventListener('click', function() {
        const icon = this.querySelector('i');
        const content = document.querySelector('.dm-collapsible-content');
        
        icon.classList.toggle('fa-chevron-up');
        icon.classList.toggle('fa-chevron-down');
        content.classList.toggle('dm-active');
        
        // Smooth scroll to keep button in view when opening
        if (content.classList.contains('dm-active')) {
            this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
        })
        .catch(error => console.error("Error loading the header:", error));
});


       











document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/service.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("service").innerHTML = data;
            // Initialize carousel after loading hero section
        });
});

document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/blog.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("blog").innerHTML = data;
            initblog();// Initialize carousel after loading hero section
        });
});

function initblog() {
    const slider = document.querySelector('.hs-slider-container');
        const prevBtn = document.querySelector('.hs-prev-btn');
        const nextBtn = document.querySelector('.hs-next-btn');
        const blogCards = document.querySelectorAll('.hs-blog-card');

        let currentIndex = 0;
        let cardsToShow = 1;
        let interval;

        function updateCardsToShow() {
            if (window.innerWidth >= 992) {
                cardsToShow = 3;
            } else if (window.innerWidth >= 768) {
                cardsToShow = 2;
            } else {
                cardsToShow = 1;
            }

            currentIndex = 0;
            updateSlider();
        }

        function updateSlider() {
            const cardWidth = blogCards[0].offsetWidth + 20;
            const translateX = -currentIndex * cardWidth;
            slider.style.transform = `translateX(${translateX}px)`;

            // Optional: hide buttons instead of disabling
            prevBtn.disabled = blogCards.length <= cardsToShow;
            nextBtn.disabled = blogCards.length <= cardsToShow;
        }

        function goToNext() {
            currentIndex++;
            if (currentIndex > blogCards.length - cardsToShow) {
                currentIndex = 0; // Loop back to start
            }
            updateSlider();
        }

        function goToPrev() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = blogCards.length - cardsToShow; // Go to end
            }
            updateSlider();
        }

        nextBtn.addEventListener('click', function() {
            clearInterval(interval);
            goToNext();
            startAutoSlide();
        });

        prevBtn.addEventListener('click', function() {
            clearInterval(interval);
            goToPrev();
            startAutoSlide();
        });

        function startAutoSlide() {
            interval = setInterval(goToNext, 4000); // Change every 4 seconds
        }

        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        startAutoSlide(); // Begin auto sliding on load
}














document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/video.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("video").innerHTML = data;
            initvideo()// Initialize carousel after loading hero section
        });
});

// video Slider functionality
function initvideo(){

    const slider = document.querySelector('.vs-slider-track');
    const prevBtn = document.querySelector('.vs-prev-btn');
    const nextBtn = document.querySelector('.vs-next-btn');
    const videoCards = document.querySelectorAll('.vs-slide-card');
    const iframes = document.querySelectorAll('.vs-slide-card iframe');

    let currentIndex = 0;
    let cardsToShow = 1;
    let interval;

    // Setup YouTube IFrame Player API
    let players = [];

    function createYouTubePlayers() {
      iframes.forEach((iframe, index) => {
        const player = new YT.Player(iframe, {
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
        players[index] = player;
      });
    }

    function onPlayerStateChange(event) {
      if (event.data === YT.PlayerState.PLAYING) {
        clearInterval(interval); // Stop auto-slide
        pauseOtherVideos(event.target); // Pause other videos
      } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
        const anyPlaying = players.some(p => p.getPlayerState() === YT.PlayerState.PLAYING);
        if (!anyPlaying) startAutoSlide(); // Resume auto-slide if no video is playing
      }
    }

    function pauseOtherVideos(currentPlayer) {
      players.forEach(player => {
        if (player !== currentPlayer && player.getPlayerState() === YT.PlayerState.PLAYING) {
          player.pauseVideo();
        }
      });
    }

    function updateCardsToShow() {
      if (window.innerWidth >= 992) {
        cardsToShow = 3;
      } else if (window.innerWidth >= 768) {
        cardsToShow = 2;
      } else {
        cardsToShow = 1;
      }

      if (currentIndex > videoCards.length - cardsToShow) {
        currentIndex = 0;
      }
      updateSlider();
    }

    function updateSlider() {
      const cardWidth = videoCards[0].offsetWidth + 20;
      const translateX = -currentIndex * cardWidth;
      slider.style.transform = `translateX(${translateX}px)`;

      prevBtn.disabled = videoCards.length <= cardsToShow;
      nextBtn.disabled = videoCards.length <= cardsToShow;
    }

    function goToNext() {
      currentIndex++;
      if (currentIndex > videoCards.length - cardsToShow) {
        currentIndex = 0;
      }
      updateSlider();
    }

    function goToPrev() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = videoCards.length - cardsToShow;
      }
      updateSlider();
    }

    nextBtn.addEventListener('click', function () {
      clearInterval(interval);
      goToNext();
      startAutoSlide();
    });

    prevBtn.addEventListener('click', function () {
      clearInterval(interval);
      goToPrev();
      startAutoSlide();
    });

    // function startAutoSlide() {
    //   clearInterval(interval);
    //   interval = setInterval(goToNext, 4000);
    // }

    const sliderWrapper = document.querySelector('.vs-slider-shell');
    sliderWrapper.addEventListener('mouseenter', () => clearInterval(interval));
    sliderWrapper.addEventListener('mouseleave', startAutoSlide);

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // When API is ready, init players
    window.onYouTubeIframeAPIReady = createYouTubePlayers;

    // startAutoSlide();
}







document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/testimonial.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("test").innerHTML = data;
            inittest();  // Initialize carousel after loading hero section
        });
});


function inittest(){
const carousel = document.querySelector('.tm-carousel');
const slides = document.querySelectorAll('.tm-slide');
const prevBtn = document.getElementById('tm-prev-btn');
const nextBtn = document.getElementById('tm-next-btn');
const dotsContainer = document.getElementById('tm-dots-container');

let currentSlide = 0;
const totalSlides = slides.length;

// Create dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('tm-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.tm-dot');

// Update carousel position
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

// Previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Go to specific slide
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-advance (optional)
let autoSlideInterval = setInterval(nextSlide, 5000);

// Pause on hover
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

carousel.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(nextSlide, 5000);
});

// Touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, {passive: true});

carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, {passive: true});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        nextSlide();
    }
    if (touchEndX > touchStartX + 50) {
        prevSlide();
    }
}
}









document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/aboutdr.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("aboutdr").innerHTML = data;
            initaboutdr(); // Initialize carousel after loading hero section
        });
});



 function initaboutdr() {
    const aboutContainer = document.getElementById('aboutContainer');
    
    // Trigger animation when element comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(aboutContainer);
    
    // Add hover effect to qualifications
    const qualItems = document.querySelectorAll('.qualification-item');
    qualItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 10px 20px rgba(37, 99, 235, 0.3)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
            item.style.boxShadow = '0 4px 6px rgba(37, 99, 235, 0.2)';
        });
    });
}














document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/whatsapp.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("whatsapp").innerHTML = data; 
            initwhatsapp(); // Initialize carousel after loading hero section
        });
});



function initwhatsapp(){
    const widget = document.getElementById('socialWidget');
    const toggle = document.getElementById('socialWidgetToggle');
    const icons = document.getElementById('socialWidgetIcons');
    
    // Toggle social icons on click
    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        widget.classList.toggle('social-widget-active');
    });
    
    // Close when clicking outside
    document.addEventListener('click', function() {
        widget.classList.remove('social-widget-active');
    });
    
    // Prevent closing when clicking inside the widget
    icons.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Add slight delay to animation for each icon
    const socialButtons = document.querySelectorAll('.social-widget-btn');
    socialButtons.forEach((btn, index) => {
        btn.style.transitionDelay = `${index * 0.05}s`;
    });
}




















document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/contactbox.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("contactbox").innerHTML = data;
            initcontactbox();  // Initialize carousel after loading hero section
        });
});


    // Enhanced animations with staggered delays
    function initcontactbox() {
        const cards = document.querySelectorAll('.info-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 150);
                }
            });
        }, { threshold: 0.1 });
        
        cards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // Add hover effect to highlight text
        const highlights = document.querySelectorAll('.highlight');
        highlights.forEach(highlight => {
            highlight.addEventListener('mouseenter', () => {
                highlight.style.background = 'linear-gradient(120deg, rgba(79, 70, 229, 0.2), rgba(245, 158, 11, 0.2))';
            });
            highlight.addEventListener('mouseleave', () => {
                highlight.style.background = 'linear-gradient(120deg, rgba(79, 70, 229, 0.1), rgba(245, 158, 11, 0.1))';
            });
        });
    }








document.addEventListener("DOMContentLoaded", function () {
    // Load hero section dynamically
    fetch("components/members.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("members").innerHTML = data;  // Initialize carousel after loading hero section
        });
});







document.addEventListener("DOMContentLoaded", function () {
    fetch("components/stats.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("stats").innerHTML = data;
  
        // Counter logic after stats.html is loaded
        let hasAnimated = false;
  
        function animateCounters() {
          const counters = document.querySelectorAll(".counter");
          counters.forEach(counter => {
            const updateCount = () => {
              const target = +counter.getAttribute("data-target");
              const count = +counter.innerText;
              const increment = target / 200;
  
              if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
              } else {
                counter.innerText = target.toLocaleString(); // Add comma formatting
              }
            };
            updateCount();
          });
        }
  
        function handleScroll() {
          const statsSection = document.getElementById("stats");
          const sectionTop = statsSection.getBoundingClientRect().top;
          const triggerPoint = window.innerHeight * 0.8;
  
          if (!hasAnimated && sectionTop < triggerPoint) {
            animateCounters();
            hasAnimated = true;
          }
        }
  
        window.addEventListener("scroll", handleScroll);
      });
  });







  document.addEventListener("DOMContentLoaded", function () {
    fetch("components/app.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("app").innerHTML = data;
              const appointmentForm = document.querySelector('.appointment-form-box');
    
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const firstName = document.querySelector('input[type="text"]:nth-of-type(1)').value;
        const lastName = document.querySelector('input[type="text"]:nth-of-type(2)').value;
        const email = document.querySelector('input[type="email"]').value;
        const phone = document.querySelector('input[type="tel"]').value;
        const gender = document.querySelector('select').value;
        const date = document.querySelector('input[type="date"]').value;
        const timeSlot = document.querySelector('input[name="time-slot"]:checked').value;
        const message = document.querySelector('textarea').value;
        
        // Format the message for WhatsApp
        const whatsappMessage = 
            `*New Appointment Request*%0A%0A` +
            `*Name:* ${firstName} ${lastName}%0A` +
            `*Email:* ${email}%0A` +
            `*Phone:* ${phone}%0A` +
            `*Gender:* ${gender}%0A` +
            `*Appointment Date:* ${date}%0A` +
            `*Preferred Time:* ${timeSlot}%0A` +
            `*Message:* ${message}`;
        
        // Replace with your WhatsApp number (include country code, remove any +, 0, or -)
        const whatsappNumber = '08420017061'; // Example: India 9876543210
        
        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
        
        // Optional: Reset the form after submission
        appointmentForm.reset();
        
        // Optional: Show confirmation message
        alert('Thank you! Your appointment details have been shared via WhatsApp.');
    });  
        })
        .catch(error => console.error("Error loading the header:", error));
});


document.addEventListener("DOMContentLoaded", function () {
    fetch("components/gallery.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("gallery").innerHTML = data;
            initgallery();
        })
        .catch(error => console.error("Error loading the header:", error));
});








function initgallery() {
    const track = document.querySelector('.nkpc-slider-track');
    const slides = document.querySelectorAll('.nkpc-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('dotsContainer');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('nkpc-dot');
        if(index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.nkpc-dot');
    
    // Update slider position
    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }
    
    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-advance (optional)
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    const slider = document.querySelector('.nkpc-slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(slideInterval);
    }, {passive: true});
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        slideInterval = setInterval(nextSlide, 5000);
    }, {passive: true});
    
    function handleSwipe() {
        const difference = touchStartX - touchEndX;
        if (difference > 50) nextSlide(); // Swipe left
        if (difference < -50) prevSlide(); // Swipe right
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });
}





document.addEventListener("DOMContentLoaded", function () {
    fetch("components/map.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("map").innerHTML = data;
        })
        .catch(error => console.error("Error loading the header:", error));
});