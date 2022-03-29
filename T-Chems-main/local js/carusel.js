
$('.owl-carousel').owlCarousel({
    margin: 15,
    nav: true,
    loop:true,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2,

      },
      1000: {
        items: 4
      }
    }
  });