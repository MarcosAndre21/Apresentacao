document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
       
        e.preventDefault();
       
        const target = document.querySelector(this.getAttribute('href'));
     
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.skill, .project-item').forEach(element => {
    observer.observe(element);
});
