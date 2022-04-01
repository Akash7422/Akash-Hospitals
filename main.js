const navItems=document.querySelector("#nav__items");
const openNav=document.querySelector("#open__nav-btn");
const closeNav=document.querySelector("#close__nav-btn");
const closeNavBar=document.querySelector(".container");

openNav.addEventListener('click', ()=> {
    navItems.style.display="flex";
    openNav.style.display="none";
    closeNav.style.display="inline-block";
})
closeNav.addEventListener('click',()=>
{
    navItems.style.display="none";
    openNav.style.display="inline-block";
    closeNav.style.display="none";
})
// closeNavBar.addEventListener('click',()=>
// {
//     navItems.style.display="none";
//     openNav.style.display="inline-block";
//     closeNav.style.display="none";
// })


//Testimonial section
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    //Responsive breakdown
    breakpoints:{
        //for tablets
        600:{
            slidesPerView: 2
        },
        //large screen
        1024:{
            slidesPerView: 3
        }
    }
  });

// hoverService.addEventListener('onmouseMove', ()=>{
//     hoverService.style.opacity="1";
//     hoverService.style.visibility="visible";
// })