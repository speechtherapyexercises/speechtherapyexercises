document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const formData = new FormData(this);

            fetch(this.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Smooth, premium fade-out animation!
                    this.style.opacity = '0';
                    setTimeout(() => {
                        this.style.display = 'none';
                        successMsg.classList.add('show-msg');
                    }, 300);
                } else {
                    alert("Oops! Something went wrong submitting the form.");
                }
            })
            .catch(error => {
                alert("Oops! A network error occurred.");
            });
        });
    }
});