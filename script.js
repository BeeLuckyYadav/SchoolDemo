document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. MOBILE MENU TOGGLE
    // ==========================================
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            // Toggle the 'active' class to show/hide the menu
            navLinks.classList.toggle('active');
            
            // Change icon from hamburger to cross when open
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when a link is clicked
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // ==========================================
    // 2. STICKY HEADER ON SCROLL
    // ==========================================
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            header.style.padding = '0'; // Makes it look a bit tighter on scroll
        } else {
            header.style.boxShadow = '0 3px 10px rgba(0,0,0,0.05)';
        }
    });

    // ==========================================
    // 3. FORM SUBMISSION (DEMO)
    // ==========================================
    const admissionForm = document.querySelector('.admission-container form');
    if (admissionForm) {
        admissionForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            alert('Thank you! Your admission enquiry has been submitted. We will contact you shortly.');
            admissionForm.reset(); // Clear the form
        });
    }
});

