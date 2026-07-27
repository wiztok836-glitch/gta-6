// Scroll effect on navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal animations on scroll
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Countdown timer
function updateCountdown() {
    // Set countdown end time (5 days from now)
    const endTime = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).getTime();
    
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
        document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('cd-minutes').textContent = String(minutes).padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = '<span style="color: var(--luxury-pink);">EVENT ENDED</span>';
        }
    }, 1000);
}

updateCountdown();

// Verify access code
function verifyAccess() {
    const accessCode = document.getElementById('access-code').value.trim();
    const correctCode = 'GTA6-LAUNCH';
    
    if (accessCode === correctCode) {
        document.getElementById('access-form').style.display = 'none';
        document.getElementById('access-success').classList.add('active');
        
        // Redirect after 3 seconds
        setTimeout(() => {
            window.location.href = '#notice';
        }, 3000);
    } else {
        alert('Invalid access code. Try again!');
    }
}

// Open hint popup
function openHint() {
    document.getElementById('hint-popup').classList.add('active');
}

// Close hint popup
function closeHint() {
    document.getElementById('hint-popup').classList.remove('active');
}

// Close hint on background click
function closeHintOnBackground(event) {
    if (event.target.id === 'hint-popup') {
        closeHint();
    }
}

// Continue to partner
function continueToPartner() {
    alert('Redirecting to partner page...');
    // window.location.href = 'https://example.com/partner';
}

// Play overlay click to play video
document.addEventListener('DOMContentLoaded', () => {
    const playOverlay = document.querySelector('.play-overlay');
    const video = document.getElementById('gtaVideo');
    
    if (playOverlay && video) {
        playOverlay.addEventListener('click', () => {
            video.play();
            playOverlay.style.opacity = '0';
            playOverlay.style.pointerEvents = 'none';
        });
        
        video.addEventListener('play', () => {
            playOverlay.style.opacity = '0';
            playOverlay.style.pointerEvents = 'none';
        });
        
        video.addEventListener('pause', () => {
            playOverlay.style.opacity = '1';
            playOverlay.style.pointerEvents = 'auto';
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
