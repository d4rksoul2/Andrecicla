$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoHeight: true,
    items: 3,
    slideBy: 3,
    navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive: {
        0: { items: 1, slideBy: 1 },
        600: { items: 2, slideBy: 2 },
        992: { items: 3, slideBy: 3 }
    }
});



