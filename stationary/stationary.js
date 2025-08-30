document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
  
    // Function to show section from both nav & card clicks
    window.showSection = function (sectionId) {
      // Hide all sections
      sections.forEach(sec => sec.classList.remove("active"));
  
      // Show the requested section
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.classList.add("active");
      }
  
      // Update nav active state
      navLinks.forEach(link => {
        const linkSection = link.getAttribute("href").replace("#", "");
        if (linkSection === sectionId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
  
      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    // Nav link clicks
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // prevent default anchor jump
        const targetId = this.getAttribute("href").replace("#", "");
        showSection(targetId);
      });
    });
  
    // Show first section initially
    if (sections.length > 0) {
      sections[0].classList.add("active");
    }
  });
  




  //show added to cart btn
  document.getElementById("addToCartBtn").addEventListener("click", function() {
    let msg = document.getElementById("cartMessage");
    msg.classList.remove("d-none");

    // hide again after 1 second
    setTimeout(() => {
      msg.classList.add("d-none");
    }, 1000);
  });

  function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";

    // Auto hide after 3 seconds
   
  }





  function validateForm(event) {
    event.preventDefault(); // stop normal submission
    const form = event.target;

    if (form.checkValidity()) {
      // If all fields are valid
      showSection('home');
    } else {
      // Trigger built-in validation messages
      form.reportValidity();
    }
  }



  (function () {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          event.preventDefault() // prevent page refresh
          let sentBtn = document.getElementById("msgSent");
          sentBtn.style.display = "block";
  
          // hide after 1 second
          setTimeout(() => {
            sentBtn.style.display = "none";
          }, 2000);
        }
        form.classList.add('was-validated')
      }, false)
    })
  })()

