// Scroll Effects
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 5, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
    }
});

// Smooth Scrolling
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

// CTA Button Click
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#world').scrollIntoView({
        behavior: 'smooth'
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Apply observer to elements
document.querySelectorAll('.timeline-item, .concept-card, .feature-card, .game-card, .video-card, .impact-card, .revenue-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Video Loading Optimization
const heroVideo = document.querySelector('.video-background video');
if (heroVideo) {
    heroVideo.addEventListener('loadeddata', () => {
        heroVideo.style.opacity = '1';
    });
    
    // Fallback for video loading issues
    heroVideo.addEventListener('error', () => {
        const videoContainer = document.querySelector('.video-background');
        videoContainer.innerHTML = `
            <div class="video-fallback">
                <div class="particles"></div>
            </div>
        `;
        
        // Add fallback styles
        const fallbackStyle = document.createElement('style');
        fallbackStyle.textContent = `
            .video-fallback {
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
                position: relative;
            }
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }
        `;
        document.head.appendChild(fallbackStyle);
    });
}

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Mobile Navigation
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 70px;
            right: -100%;
            width: 250px;
            height: calc(100vh - 70px);
            background: rgba(10, 10, 10, 0.95);
            flex-direction: column;
            padding: 2rem;
            transition: right 0.3s ease;
        }
        
        .nav-links.active {
            right: 0;
            display: flex;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
`;
document.head.appendChild(style);

// Glitch Effect Enhancement
const glitchElement = document.querySelector('.glitch');
let glitchInterval;

glitchElement.addEventListener('mouseenter', () => {
    glitchInterval = setInterval(() => {
        glitchElement.style.textShadow = `
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #00ffcc,
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff006e
        `;
    }, 50);
});

glitchElement.addEventListener('mouseleave', () => {
    clearInterval(glitchInterval);
    glitchElement.style.textShadow = '';
});

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});

// Card Hover Effects
document.querySelectorAll('.concept-card, .feature-card, .game-card, .video-card, .impact-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add loading styles
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 1s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);

// Mobile Horizontal Scroll Prevention
function preventHorizontalScroll() {
    // モバイルデバイスの判定
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    if (isMobile) {
        // 横スクロールを完全に防止
        document.body.style.overflowX = 'hidden';
        document.documentElement.style.overflowX = 'hidden';
        
        // タッチイベントでの横スワイプを制御
        let startX, startY, isScrolling;
        
        document.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isScrolling = null;
        }, { passive: true });
        
        document.addEventListener('touchmove', function(e) {
            if (!startX || !startY) return;
            
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            const diffX = Math.abs(currentX - startX);
            const diffY = Math.abs(currentY - startY);
            
            // 初回の移動方向を判定
            if (isScrolling === null) {
                isScrolling = diffX > diffY ? 'horizontal' : 'vertical';
            }
            
            // 横方向のスクロールを防止
            if (isScrolling === 'horizontal') {
                e.preventDefault();
            }
        }, { passive: false });
        
        document.addEventListener('touchend', function() {
            startX = null;
            startY = null;
            isScrolling = null;
        }, { passive: true });
        
        // 追加のCSS適用
        const mobileStyle = document.createElement('style');
        mobileStyle.textContent = `
            @media (max-width: 768px) {
                html, body {
                    overflow-x: hidden !important;
                    width: 100% !important;
                    max-width: 100vw !important;
                    touch-action: pan-y !important;
                }
                
                * {
                    max-width: 100vw !important;
                }
            }
        `;
        document.head.appendChild(mobileStyle);
    }
}

// ページ読み込み時とリサイズ時に実行
preventHorizontalScroll();
window.addEventListener('resize', preventHorizontalScroll); 