$(function() {

    var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOfSet = $(window).scrollTop();


    // Fixed Header
    checkScroll(scrollOfSet);

    $(window).on("scroll", function() {
        scrollOfSet = $(this).scrollTop();

        checkScroll(scrollOfSet);          
    });

    function checkScroll() {
        if( scrollOfSet >= introH ) {
            header.addClass("fixed");
        }
        else {   
            header.removeClass("fixed");
        }
    }

    // Smoth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockId = $(this).data('scroll'),
        blockOfset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $(this).addClass("active");

        $("html, body").animate( {
            scrollTop: blockOfset
        }, 750);
    });

    // Menu Nav Toggle
    $("#nav-toggle").on("click", function(event) {
        event.preventDefault(); 
        
        $(this).toggleClass("active");
        $('#nav').toggleClass("active");
    });

    // Collaps
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault(); 

        var blockId = $(this).data('collapse');

        $(this).toggleClass("active");
    })

    // Slider
    $("[data-slider]").slick( {
        infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});