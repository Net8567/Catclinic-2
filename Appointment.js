document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointment-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    const shouldDisplayMessage = localStorage.getItem('showConfirmationMessage');
    if (shouldDisplayMessage === 'true') {
        confirmationMessage.classList.remove('hidden');
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        confirmationMessage.classList.remove('hidden');

        localStorage.setItem('showConfirmationMessage', 'true');

        const formData = new FormData(form);
        for (const pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        form.reset();

        setTimeout(function () {
            confirmationMessage.classList.add('hidden');
            localStorage.removeItem('showConfirmationMessage');
        }, 5000);
    });
});
