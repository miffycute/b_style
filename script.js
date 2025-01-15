// Initialize AOS
AOS.init({
    duration: 1300,
    once: true
});

// Modal functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');

function openModal(imgSrc) {
    modal.style.display = "flex";
    modalImg.src = imgSrc;
}

// Close modal when clicking the X
document.querySelector('.close').onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside the image
modal.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

// Handle skill bars animation
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-level');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.parentElement.nextElementSibling.textContent;
                entry.target.style.width = width + '%';
            }
        });
    });
    
    skillBars.forEach(bar => observer.observe(bar));
});
