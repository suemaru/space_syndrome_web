// Scroll Effects
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.borderBottomColor = 'rgba(13, 35, 63, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.borderBottomColor = 'rgba(13, 35, 63, 0.1)';
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
    // Show video immediately if loaded
    if (heroVideo.readyState >= 2) {
        heroVideo.style.opacity = '1';
    }
    
    heroVideo.addEventListener('loadeddata', () => {
        heroVideo.style.opacity = '1';
    });
    
    heroVideo.addEventListener('canplaythrough', () => {
        heroVideo.style.opacity = '1';
    });
    
    // Try to play the video
    heroVideo.play().catch(e => {
        console.log('Video autoplay prevented:', e);
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
        .hamburger {
            display: flex;
        }
        
        .nav-links {
            position: fixed;
            top: 70px;
            right: -100%;
            width: 280px;
            height: calc(100vh - 70px);
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            border-left: 1px solid rgba(13, 35, 63, 0.1);
            box-shadow: -4px 0 20px rgba(13, 35, 63, 0.1);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            transition: right 0.3s ease;
            align-items: flex-start;
        }
        
        .nav-links.active {
            right: 0;
            display: flex;
        }
        
        .nav-links a {
            font-size: 1.1rem;
            padding: 0.75rem 0;
            border-bottom: 1px solid rgba(13, 35, 63, 0.1);
            width: 100%;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
            background: var(--color-blue-primary);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
            background: var(--color-blue-primary);
        }
        
        .hamburger:hover span {
            background: var(--color-blue-primary);
        }
    }
`;
document.head.appendChild(style);

// Hero Logo Interaction Enhancement
const heroLogo = document.querySelector('.hero-logo');
if (heroLogo) {
    heroLogo.addEventListener('mouseenter', () => {
        heroLogo.style.transform = 'translateY(-6px) scale(1.03)';
        heroLogo.style.filter = 'drop-shadow(0 12px 24px rgba(13, 35, 63, 0.25))';
    });

    heroLogo.addEventListener('mouseleave', () => {
        heroLogo.style.transform = '';
        heroLogo.style.filter = '';
    });
}

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});

// Enhanced Card Hover Effects for White Design
document.querySelectorAll('.feature-card, .game-card, .video-card, .impact-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        // 上品な浮遊効果
        this.style.transform = 'translateY(-8px)';
        this.style.transition = 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
        
        // アイコンの微細なアニメーション
        const icon = this.querySelector('.icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            icon.style.transition = 'transform 0.3s ease';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
        
        const icon = this.querySelector('.icon');
        if (icon) {
            icon.style.transform = '';
        }
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