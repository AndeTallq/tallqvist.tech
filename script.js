// Andreas Tallqvist - CV interactions (compact version)

document.addEventListener('DOMContentLoaded', () => {
  // Dark mode
  const themeBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.classList.add('dark');
  }

  themeBtn?.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Tab system for About
  const tabButtons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      // Deactivate all
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => p.classList.remove('active'));

      // Activate chosen
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      document.getElementById(target)?.classList.add('active');
    });
  });

  // Subtle hero entrance animation (stagger)
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(12px)';

    requestAnimationFrame(() => {
      heroContent.style.transition = 'opacity 420ms cubic-bezier(.2,.0,.2,1), transform 520ms cubic-bezier(.2,.0,.2,1)';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    });
  }

  // Typewriter effect for subtitle
  function initTypewriter() {
    const textElement = document.querySelector('.typewriter-text');
    if (!textElement) return;

    const phrases = [
      "Web Developer",
      "Technical Specialist",
      "Lead Developer",
      "WordPress Savant",
      "AI Whisperer",
      "Accessibility Advocate",
      "Absolute Unit"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function getRandomDelay(base, variance) {
      return base + Math.random() * variance;
    }

    function tick() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        // Deleting characters
        charIndex--;
        textElement.textContent = currentPhrase.substring(0, charIndex);

        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          // Pause before starting to type the next phrase
          setTimeout(tick, getRandomDelay(450, 350));
        } else {
          // Faster when deleting, with randomness
          setTimeout(tick, getRandomDelay(35, 45));
        }
      } else {
        // Typing characters
        charIndex++;
        textElement.textContent = currentPhrase.substring(0, charIndex);

        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          // Longer pause when finished typing a phrase
          setTimeout(tick, getRandomDelay(1600, 900));
        } else {
          // Variable typing speed
          setTimeout(tick, getRandomDelay(65, 75));
        }
      }
    }

    // Start the effect after a short delay
    setTimeout(tick, 900);
  }

  initTypewriter();

  // Optional: small keyboard hint (press "v" to open CV)
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'v' && document.activeElement.tagName === 'BODY') {
      window.open('tallqvist-cv-fi.pdf', '_blank');
    }
  });

  // Click-to-open dropdowns (no hover)
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = dropdown.classList.contains('open');

      // Close all dropdowns first
      document.querySelectorAll('.dropdown').forEach(d => {
        d.classList.remove('open');
        const t = d.querySelector('.dropdown-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      });

      // Toggle this one
      if (!isOpen) {
        dropdown.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Close any open dropdown when clicking outside
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.dropdown.open').forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

});
