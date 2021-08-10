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