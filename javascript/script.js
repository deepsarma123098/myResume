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


// Light Beam Code

// class LightBeam {
//     constructor(element) {
//       this.options = {
//         classNames: {
//           start: 'started',
//           end: 'ended',
//           positions: ['set-position-1', 'set-position-2', 'set-position-3']
//         },
//         elements: {
//           startButton: '.js-btn--start',
//           lightBeam1: '.js-light--1 .js-light__beam--1',
//           lightBeam2: '.js-light--2 .js-light__beam--2',
//         }
//       };
  
//       this.element = element;
      
//       this.wrapperClasses = this.element.className;
  
//       this.isPositionSet = false;
//       this.isLightBeam1Ended = false;
//       this.isLightBeam2Ended = false;
  
//       this.setElements();
//       this.setEvents();
//     }
    
//     getEndPositionIndex() {
//       return Math.floor(Math.random() * (3 - 0));
//     }
  
//     setElements() {
//       this.startButton = this.element.querySelector(this.options.elements.startButton);
//       this.lightBeam1 = this.element.querySelector(this.options.elements.lightBeam1);
//       this.lightBeam2 = this.element.querySelector(this.options.elements.lightBeam2);
//     }
  
//     setEvents() {
//       this.startButton.addEventListener('click', () => {
//         this.reset();
  
//         setTimeout(() => {
//           this.element.classList.add(this.options.classNames.start);
//         });
        
//         this.startButton.setAttribute('disabled', 'disabled');
//       }, false);
  
//       this.lightBeam1.addEventListener('animationend', () => {
//         this.isLightBeam1Ended = true;
  
//         this.setPosition();
        
//         this.startButton.removeAttribute('disabled');
//       }, false);
  
//       this.lightBeam2.addEventListener('animationend', () => {
//         this.isLightBeam2Ended = true;
  
//         this.setPosition();
        
//         this.startButton.removeAttribute('disabled');
//       }, false);
//     }
  
//     setPosition() {
//       if (this.isLightBeam1Ended && this.isLightBeam2Ended) {
//         this.element.classList.remove(this.options.classNames.start);
  
//         if (this.isPositionSet) {
//           this.element.classList.add(this.options.classNames.end);
//         } else {
//           this.isPositionSet = true;
  
//           setTimeout(() => {
//             this.element.classList.add(this.options.classNames.positions[this.getEndPositionIndex()]);
//           }, 0);
//         }
//       }
//     }
  
//     reset() {
//       this.isLightBeam1Ended = false;
//       this.isLightBeam2Ended = false;
      
//       this.isPositionSet = false;
      
//       this.element.className = this.wrapperClasses;
//     }
//   }
  
//   const lightBeams = new LightBeam(document.querySelector('.wrapper'));
  

// Light Beam Code
