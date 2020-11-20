// const intro = document.querySelector(".intro");
// const video = intro.querySelector("video");
// const text = intro.querySelector("h1");
// //END SECTION
// const section = document.querySelector(".secvp");
// const end = section.querySelector("h1");

// //SCROLLMAGIC
// const controller = new ScrollMagic.Controller();

// //Scenes
// let scene = new ScrollMagic.Scene({
//   duration: 6000,
//   triggerElement: intro,
//   triggerHook: 0
// })

//   .setPin(intro)
//   .addTo(controller);

// //Text Animation
// const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 1});

// let scene2 = new ScrollMagic.Scene({
//   duration: 5000,
//   triggerElement: intro,
//   triggerHook: 0
// })
//   .setTween(textAnim)
//   .addTo(controller);

// //Video Animation
// let accelamount = 0.1;
// let scrollpos = 0;
// let delay = 0;

// scene.on("update", e => {
//   scrollpos = e.scrollPos / 1000;
// });

// setInterval(() => {
//   delay += (scrollpos - delay) * accelamount;
//   console.log(scrollpos, delay);

//   video.currentTime = delay;
// }, 60.3);
// ----------------------------------plane path==============
const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    {x: 100, y: 300},
    {x: 300, y: 400},
    {x: 200, y: 200},
    {x: 400, y: 100},
    {x: 600, y: 300},


    {x: 1000, y: 600},

    {x: window.innerWidth, y: 900},
    
    {x: 900, y: 800},
    
    {x: 500, y: 900},
    {x: 550, y: 950},
    {x: 575, y: 975},
    {x: 500, y: 900},
    {x: 200, y: 1100},
    
    {x: 10, y: 1150},
    
    {x: 1000, y: 600},

  ]
}
const tween = new TimelineLite();

tween.add(
  TweenLite.to('.paper-plane', 10, {
    bezier: flightPath,
    ese: Power1.easeInOut
  })
);

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: '.animation',
  duration: 3000,
  trigerHook: 0.5
})
.setTween(tween)
.addTo(controller);


// =================navbar=========================
function toggle_div(){
  var element = document.getElementById('sidebar');
  element.classList.toggle('active')
};
// ======================light saber===========================================
var leftgearrot = document.getElementById("lightleft"),
rightgearrot = document.getElementById("lightright");
    
window.addEventListener("scroll", function() {
    leftgearrot.style.transform = "rotate(-"+window.pageYOffset/30+"deg)";
    rightgearrot.style.transform = "rotate("+window.pageYOffset/30+"deg)";
});


 var leftgear = document.getElementById("lightleft");
 rightgear = document.getElementById("lightright");
 scroll = window.pageYOffset;


 document.addEventListener('scroll', function (e) {
   var offset = window.pageYOffset;
  scroll = offset;
   leftgear.style.width = (20 + scroll/100) + '%';
  
  
  rightgear.style.width = (20 + scroll/100) + '%';

 });


//  =======================sponsor=============================


var swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 0,
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 800,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    780: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }
});

// -------------------------------CONTACT FORM---------------------------------------------------------------------//

function validateName() {
  var name = document.getElementById('conname').value;
  if(name.length == 0) {
    alert("Name can't be blank") ;
    return false;

  }
  if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
    alert("Please enter your correct and full name") ;//Validation Message
    return false;
  }
  return true;
}

function validatePhone() {
  var phone = document.getElementById('conphone').value;
  if(phone.length == 0) {
    alert("Phone number can't be blank") ;//Validation Message
    return false;
  }

  if(!phone.match(/^[0]?[789]\d{9}$/)) {
   alert("Please enter a correct phone number") ;//Validation Message
   return false;
 }

 return true;

}

function validateEmail () {

var email = document.getElementById('conmail').value;
if(email.length == 0) {
  alert("Email can't be blank") ;//Validation Message
  return false;

}

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  alert("Please enter a correct email address") ;//Validation Message
  return false;

}

return true;

}


function validateForm() {
if (!validateName() || !validatePhone() || !validateEmail()) {

 
  return false;
}
else {
  submitted=true;
  alert("Form submitted");//Validation Message
  return true;
}
}




