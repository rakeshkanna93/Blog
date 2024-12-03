function openModal() {
    document.getElementById('authModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('authModal').style.display = 'none';
  }
  
  function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
  }
  
  function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  }
  
 
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showSlide(index) {
  
    slides.forEach((slide) => slide.classList.remove('active'));
    
  
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }
  
    slides[currentSlide].classList.add('active');
  }
  
  function moveSlide(direction) {
    showSlide(currentSlide + direction);
  }
  

  showSlide(currentSlide);
  

  setInterval(() => {
    moveSlide(1);
  }, 5000);
  
 
  window.onclick = function(event) {
    if (event.target === document.getElementById('authModal')) {
      closeModal();
    }
  }
  