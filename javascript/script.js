let tl = gsap.timeline()


tl.from(".heading h1", {
    y:-40,
    opacity:0,
    duration:1,
    delay:0.2
})

tl.from("#navList ul a li",{
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



    emailjs.send('xxxx', 'yyyyyy', formData)
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



