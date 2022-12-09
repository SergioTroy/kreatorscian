$('.team-carousel').slick({
    autoplay:true,
    mobileFirst:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    useTransform: false,
    cssEase: 'ease-out',
    easing: 'swing',
    dots:true,
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