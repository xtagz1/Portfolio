/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* scroll section active link */ 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
  sections.forEach(sec=>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      });
    };
  });
     /* sticky navbar */
     let header = document.querySelector('header');

     header.classList.toggle('sticky', window.scrollY > 100);

     /* hides navbar when done clicking to link */
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
};


//* Scroll reveal */\
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .project-ult-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left' });
ScrollReveal().reveal('.home-content p',{ origin: 'right' });


/* typed js  */
const typed = new Typed('.multiple-text',{
  strings: [' Web Developer','Software Developer', ' Gamer'],
  typeSpeed:100,
  backSpeed:100,
  backDelay: 1000,
  loop: true
});


//* Read more function */
function showMore() {
  var aboutText = document.getElementById("about-text");
  var readMoreBtn = document.getElementsByTagName("button")[0];
  if (aboutText.style.webkitLineClamp == "3") {
    aboutText.style.webkitLineClamp = "initial";
    readMoreBtn.innerHTML = "Read Less";
  } else {
    aboutText.style.webkitLineClamp = "3";
    readMoreBtn.innerHTML = "Read More";
  }
}



/* Send Email from contact form*/

function sendEmail(){
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "xtagz10567@gmail.com",
      Password : "09DC7490ABB2EBE0B4C32C8C470971E4D4E8",
      To : "aljonmartinez48@gmail.com",
      From : "xtagz10567@gmail.com",
      Subject : `Subject: ${document.getElementById("subject").value}`,
      Body : `Name: ${document.getElementById('name').value}<br>Number: ${document.getElementById('phone').value}<br>Email: ${document.getElementById('email').value}<br>
      Message: ${document.getElementById('message').value}`
  }).then(
    message => alert(message)
  );
  }

  

 

