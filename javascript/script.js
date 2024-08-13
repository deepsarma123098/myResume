let tl = gsap.timeline()


tl.from(".heading h1", {
    y:-40,
    opacity:0,
    duration:1,
    delay:0.2
})

tl.from("#navList ul li",{
    y:-40,
    opacity:0,
    duration:0.6,
    stagger:0.3
})


tl.from(".img-container", {
    x:-20,
    opacity:0,
    duration:0.5,
})

tl.from(".button", {
    y:-10,
    opacity:0,
    duration:2,
    delay:0.8
})



// AOS

AOS.init();


//Project Section

document.addEventListener('DOMContentLoaded', () => {

      // Navbar Links Click Event
      const navItems = document.querySelectorAll('#navList ul li');
      const nav = document.querySelector('#navList ul');
  
      function changeNavbarStyle(bgColor, fontColor) {
          nav.style.backgroundColor = bgColor;
  
          navItems.forEach(li => {
              li.style.backgroundColor = bgColor;
              li.querySelector('a').style.backgroundColor = bgColor;
              li.querySelector('a').style.color = fontColor;
          });
      }
  
      // My Projects Click Event
      document.querySelector('#navList ul #projects-list').addEventListener('click', () => {
          changeNavbarStyle('#E5E5E5', 'black');
      });
  
      // Home Click Event
      document.querySelector('#navList ul #home-list').addEventListener('click', () => {
          changeNavbarStyle('rgb(1, 1, 1)', '#E5E5E5');
      });
  
      // Contact Me Click Event
      document.querySelector('#navList ul #contact-list').addEventListener('click', () => {
          changeNavbarStyle('rgb(1, 1, 1)', '#E5E5E5');
      });





     // Scrolling Code
     const descSection = document.querySelector('.desc');
     const projectsSection = document.querySelector('.projects'); //Project Section
     const contactSection = document.querySelector('.contact'); // Contact Me section
 
     // Function to check scroll position
     function checkScroll() {
         const scrollPosition = window.scrollY + window.innerHeight / 1.5;


         console.log("Scroll Position:", scrollPosition);
         console.log("Projects Offset:", projectsSection.offsetTop);
         console.log("Contact Offset:", contactSection.offsetTop);
 
         if (scrollPosition >= descSection.offsetTop && scrollPosition < projectsSection.offsetTop) {
             // In .desc section
             changeNavbarStyle('rgb(1, 1, 1)', '#E5E5E5');
         } else if (scrollPosition >= projectsSection.offsetTop && scrollPosition < contactSection.offsetTop) {
             // In .projects section
             changeNavbarStyle('#E5E5E5', 'black');
             
         } else if (scrollPosition >= contactSection.offsetTop) {
             // In .contact section
             changeNavbarStyle('rgb(1, 1, 1)', '#E5E5E5');
         } else {
             // Above .desc section
             changeNavbarStyle('rgb(1, 1, 1)', '#E5E5E5');
         }
     }

     // Add scroll event listener
    window.addEventListener("scroll", checkScroll);

    // Initial check
    checkScroll();
    
   
    
    //Form sumission and resetting code
    
    document.querySelector('#myForm').addEventListener('submit', (e)=> {
    
        e.preventDefault();
        const formData = {
            fName: document.querySelector('#firstName').value,
            lName: document.querySelector('#lastName').value,
            email: document.querySelector('#email').value,
            phone: document.querySelector('#phone').value,
            message: document.querySelector('#message').value,
        }
    
        console.log("Form submoitted", formData);
    
    
    
        emailjs.send('service_xkp5v2a', 'template_gojg0rb', formData)
        .then((response) => {
            console.log('Email sent successfully:', response);
        }, (error) => {
            console.log('Failed to send email:', error);
        });
    
    
    
       const form = document.querySelector('#myForm')
    
    // or
    
    //     const form = e.target
        
        form.reset();
    
    })
})





