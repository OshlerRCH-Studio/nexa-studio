// =========================================================
// NEXA — JAVASCRIPT
// =========================================================
// ---------------------------------------------------------
// 1. DETECTAR SECCIONES AL HACER SCROLL
// ---------------------------------------------------------
const animatedSections = document.querySelectorAll(
    '.problem, .intelligence, .capabilities, .benefits, .trust, .final-cta'
);
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    },
    {
        threshold: 0.25
    }
);
animatedSections.forEach((section) => {
    observer.observe(section);
});
// ---------------------------------------------------------
// 2. EFECTO DE LUZ SIGUIENDO EL MOUSE
// ---------------------------------------------------------
const problemCards = document.querySelectorAll(
    '.problem-card'
);
problemCards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        card.style.setProperty(
            '--mouse-x',
            `${x}px`
        );
        card.style.setProperty(
            '--mouse-y',
            `${y}px`
        );
    });
});
const capabilityCards = document.querySelectorAll(
    '.capability-card'
);
capabilityCards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        card.style.setProperty(
            '--mouse-x',
            `${x}px`
        );
        card.style.setProperty(
            '--mouse-y',
            `${y}px`
        );
    });
});
// ---------------------------------------------------------
// 3. INTERACCIÓN DE EXPERIENCE
// ---------------------------------------------------------
const experienceVisual = document.querySelector(
    '.experience-visual'
);
const experienceCore = document.querySelector(
    '.experience-core'
);
const experienceOrbits = document.querySelectorAll(
    '.experience-orbit'
);
const experienceParticles = document.querySelectorAll(
    '.experience-particle'
);
experienceVisual.addEventListener('mousemove', (event) => {
    const rect = experienceVisual.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX =
        (x - centerX) / centerX;
    const mouseY =
        (y - centerY) / centerY;
    // ---------------------------------------------
    // NÚCLEO
    // ---------------------------------------------
    const rotateX = mouseY * -20;
    const rotateY = mouseX * 20;
    experienceCore.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    // ---------------------------------------------
    // ÓRBITAS
    // ---------------------------------------------
    experienceOrbits.forEach((orbit, index) => {
        const strength = (index + 1) * 8;
        const moveX = mouseX * strength;
        const moveY = mouseY * strength;
        orbit.style.marginLeft = `${moveX}px`;
        orbit.style.marginTop = `${moveY}px`;
    });
    // ---------------------------------------------
    // PARTÍCULAS
    // ---------------------------------------------
    experienceParticles.forEach((particle, index) => {
        const strength = 10 + index * 5;
        const moveX = mouseX * strength;
        const moveY = mouseY * strength;
        particle.style.marginLeft = `${moveX}px`;
        particle.style.marginTop = `${moveY}px`;
    });
});
experienceVisual.addEventListener('mouseleave', () => {
    experienceCore.style.transform =
        'rotateX(0deg) rotateY(0deg)';
    experienceOrbits.forEach((orbit) => {
        orbit.style.marginLeft = '0px';
        orbit.style.marginTop = '0px';
    });
    experienceParticles.forEach((particle) => {
        particle.style.marginLeft = '0px';
        particle.style.marginTop = '0px';
    });
});