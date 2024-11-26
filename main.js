let bar = document.getElementById('bar');
let close = document.getElementById('close');
let nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active'); // Show the menu
    close.style.display = 'block'; // Show the close button
    bar.style.display = 'none'; // Hide the menu icon
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active'); // Hide the menu
    close.style.display = 'none'; // Hide the close button
    bar.style.display = 'block'; // Show the menu icon
  });
}

 // slider
let currentIndex = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
function nextSlide() {
    showSlide(currentIndex + 1);
}
function prevSlide() {
    showSlide(currentIndex - 1);
}
setInterval(nextSlide, 3000);

// contact 
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();
    
    // Get the form values
    const name = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = document.querySelector('input[name="subject"]:checked');
    
    // Validate fields
    if (!name) {
        alert("Veuillez entrer votre nom.");
        return;
    }
    
    if (!email) {
        alert("Veuillez entrer votre email.");
        return;
    } else {
        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Veuillez entrer un email valide.");
            return;
        }
    }
    
    if (!subject) {
        alert("Veuillez sélectionner un objet.");
        return;
    }
    
    if (!message) {
        alert("Veuillez entrer un message.");
        return;
    }
    
    // If all validations pass, you can submit the form or perform other actions
    alert("Formulaire soumis avec succès !");
    // You can uncomment the next line to actually submit the form
    // this.submit();
});

