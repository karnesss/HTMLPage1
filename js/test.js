window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
    document.getElementById("onscroll").style.top = "0";
  } else {
    document.getElementById("onscroll").style.top = "-100px";
  }
}

let cards = document.querySelectorAll(".card")
let plates = document.querySelectorAll(".plateflip")


const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting & entry.target.className == ('card')) {

      entry.target.classList.add('show');
    }
     if (entry.isIntersecting & entry.target.className == ('plateflip')) {

      entry.target.classList.add('flip');
    }
    else{
      entry.target.classList.remove('flip');
  
    }
  });
});
plates.forEach(plate =>{
  observer.observe(plate)
})

cards.forEach(card =>{
  observer.observe(card)
})




let box = document.querySelector('#box');
let box2 = document.querySelector('#box2');


document.addEventListener('mousemove', logKey);

function logKey(e) {
  var x = e.screenX;
  var y = e.screenY;
  box.style.position = 'absolute';
  box.style.top =  100-(y/8) + 'px';
  box.style.left =  250-(x/8) + 'px';
  box2.style.position = 'absolute';
  box2.style.top =   200-(y/8) + 'px';
  box2.style.right =  250-(x/8) + 'px';
}






  $('.slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });




  $('.review').slick({
    infinite: true,
  
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseonhover:false,
  
  });

          
  