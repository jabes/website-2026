document.addEventListener('DOMContentLoaded', () => {

    const link = document.createElement('link');
    const script = document.createElement('script');

    link.rel = 'stylesheet';
    link.href = window.location.origin + '/styles/lib/aos-2.3.4.min.css';
    script.src = window.location.origin + '/scripts/lib/aos-2.3.4.min.js';

    script.addEventListener('load', () => {
        AOS.init();
    });

    document.head.appendChild(link);
    document.head.appendChild(script);

});
