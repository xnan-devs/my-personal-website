document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('section').forEach(function(section) {
        var h2 = section.querySelector('h2');
        if (h2 && h2.textContent.trim().toLowerCase() === 'experiences') {
            section.classList.add('bg-light');
        }
    });

    // JS fallback / consistent behavior for in-page links
    document.addEventListener('click', function (e) {
        var a = e.target.closest('a[href^="#"]');
        if (!a) return;
        var href = a.getAttribute('href');
        if (!href || href === '#') return;
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        // use smooth scroll with fallback for older browsers
        try {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // update URL without jumping
            history.pushState(null, '', href);
        } catch (err) {
            // basic fallback
            window.location.hash = href;
        }
    });
});