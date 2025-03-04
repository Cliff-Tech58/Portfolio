// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Glowing effect on button click
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.add('active');
        setTimeout(() => {
            this.classList.remove('active');
        }, 2000);
    });
});

// Counter Animation
const counters = document.querySelectorAll('.counter-card h3 span');
counters.forEach(counter => {
    let target = +counter.getAttribute('data-target');
    let count = 0;
    let increment = target / 200;

    const updateCounter = () => {
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCounter, 15);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

// Back to top functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
