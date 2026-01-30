document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu a');

    function openMenu() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', openMenu);
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMenu);
    }

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            closeMenu();
        }
    });

    // Booking Form Logic
    const form = document.getElementById('bookingForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const service = document.getElementById('service').value;
            const address = document.getElementById('address').value;
            const date = document.getElementById('date').value;
            
            // Format date to Brazilian format (DD/MM/YYYY)
            const dateObj = new Date(date);
            const formattedDate = dateObj.toLocaleDateString('pt-BR');

            // Construct WhatsApp Message
            const phoneNumber = '554588217212';
            const message = `*Olá! Gostaria de agendar um serviço com a JefLi Clear.*%0A%0A` +
                            `👤 *Nome:* ${name}%0A` +
                            `🧹 *Serviço:* ${service}%0A` +
                            `📍 *Endereço:* ${address}%0A` +
                            `📅 *Data Preferida:* ${formattedDate}%0A%0A` +
                            `Aguardo confirmação!`;

            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

            // Open in new tab
            window.open(whatsappUrl, '_blank');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero Carousel Logic
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const slideInterval = 3000; // Troca a cada 3 segundos

    function nextSlide() {
        if (slides.length === 0) return;
        
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Calculate next slide index
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to next slide
        slides[currentSlide].classList.add('active');
    }

    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }
});
