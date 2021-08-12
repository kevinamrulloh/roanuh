$('.slider').slick({
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 3,
  autoplay: false,
  arrows: true,
  dots: true,
  prevArrow: "<img class='a-right control-c prev slick-prev' src='/assets/Group 3-chveron.svg'>",
  nextArrow: "<img class='a-right control-c next slick-next' src='/assets/Group 2-chveron.svg'>",
  responsive: [{
    breakpoint: 992,
    settings: {
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 4000,
      playSpeed: 4000,
    }
  }]
});

const links = document.querySelectorAll(".navbar-nav li a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}


//Get the button:
mybutton = document.getElementById("top");

// resize navbar
navbarsticker = document.getElementById("sticker");

// When the user scrolls down 20px from the top of the document, show the button & resize sticker
window.onscroll = function () { scrollFunction(), resizeNavbar() };

// window.onscroll = function () { resizeNavbar() };

function scrollFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function resizeNavbar() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbarsticker.style.height = "55px";
  } else {
    navbarsticker.style.height = "84px";
  }
}
// function resizeNavbar() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     navbarsticker.style.height = "24px";
//   } else {
//     navbarsticker.style.height = "84px";
//   }
// }

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
//     document.getElementById("logo").style.fontSize = "35px";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// // Hide Navbar on scroll down
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-80px"; /* width horizontal navbar */
//   }
//   prevScrollpos = currentScrollPos;

// }

// const mainNavigation = document.querySelector(".main-navigation");
// const close = mainNavigation.querySelector(".btn-close");
// const toggler = mainNavigation.querySelector(".navbar-toggler");

// const openSideNav = () => mainNavigation.classList.add("active");
// const closeSideNav = () => mainNavigation.classList.remove("active");
// toggler.addEventListener("click", openSideNav);
// close.addEventListener("click", closeSideNav);

// // Scroll to top
// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener('scroll', function () {
//     if (window.scrollY > 150) {
//       document.getElementById('navbar_top').classList.add('fixed-top');
//       // add padding top to show content behind navbar
//       navbar_height = document.querySelector('.navbar').offsetHeight;
//       document.body.style.paddingTop = navbar_height + 'px';
//     } else {
//       document.getElementById('navbar_top').classList.remove('fixed-top');
//       // remove padding top from body
//       document.body.style.paddingTop = '0';
//     }
//   });
// });