document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.greeting').classList.add('tinted');
    }, 1000);

    if (window.location.pathname.includes('quiz.html')) {
        alert('Welcome to the Quiz Page!');
    }
});
