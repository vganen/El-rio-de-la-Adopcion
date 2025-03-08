document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    this.reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const bookCard = document.querySelector('#book-card');
    if (bookCard) {
        bookCard.style.cursor = 'pointer';
        bookCard.addEventListener('click', function() {
            window.open('https://www.amazon.com', '_blank');
        });
    }
});
