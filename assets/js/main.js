// /* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

// /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


// /* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["frontend web developer","web Developer"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
   })


// /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

//   /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

//   /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

//   /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

// /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

//   /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

//   /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


// /* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)

  function emailSend(){
    Email.send({
    Host : "smtp.gmail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
  }

  // contact form msg sent
  
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // stop default submit for now

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Message sent!');
        form.reset(); //  clear the form!
      } else {
        alert('Oops! Something went wrong.');
      }
    }).catch(error => {
      alert('Oops! There was a problem.');
    });
  });

// register
const passwordInput = document.getElementById('password');
const strengthMessage = document.getElementById('strengthMessage');

passwordInput.addEventListener('input', function() {
  const password = passwordInput.value;
  let strength = '';

  if (password.length < 6) {
    strength = 'Weak';
    strengthMessage.style.color = 'red';
  } else if (password.length < 10) {
    strength = 'Medium';
    strengthMessage.style.color = 'orange';
  } else {
    strength = 'Strong';
    strengthMessage.style.color = 'green';
  }

  strengthMessage.textContent = `Password Strength: ${strength}`;
});
