$('.team-carousel').slick({
    autoplay:true,
    mobileFirst:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [

        {
            breakpoint: 768,
            settings:
            {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 992,
            settings:
            {
                slidesToShow: 3
            }
        }
    ]
  });