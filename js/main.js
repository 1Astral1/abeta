var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.querySelector('.hamburger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
  })



  function openAccordion(e){
    if(e.classList.contains("open")){
      e.nextElementSibling.style.maxHeight = "0";
      e.classList.remove("open");
    }
    else{
      e.nextElementSibling.style.maxHeight = e.nextElementSibling.scrollHeight + "px";
      e.classList.add("open");
    }
  }




