// Close menu when clicking on links
document.querySelectorAll('.nav-links').forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
            body.style.overflow = '';
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});




        // Mobile Menu Toggle
        document.querySelector('.hamburger').addEventListener('click', () => {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            header.classList.toggle('header-scrolled', window.scrollY > 100);
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking
                document.querySelector('.nav-links').classList.remove('active');
            });
        });
   





        const slides = document.querySelectorAll('.slide');
        let current = 0;
      
        function showSlide(index) {
          slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
              slide.classList.add('active');
            }
          });
        }
      
        function nextSlide() {
          current = (current + 1) % slides.length;
          showSlide(current);
        }
      
        // Auto-slide every 5 seconds
        setInterval(nextSlide, 5000);



        let currentSlide = 0;
const slide = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dots span');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  // Update dot navigation
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(index);
}
        

const aboutImages = document.querySelectorAll('.about-img img');
  let currentIndex = 0;

  function showNextAboutImage() {
    aboutImages.forEach((img) => img.classList.remove('active'));
    aboutImages[currentIndex].classList.add('active');
    currentIndex = (currentIndex + 1) % aboutImages.length;
  }

  showNextAboutImage(); // Show the first image
  setInterval(showNextAboutImage, 3000); // Change every 3 seconds
