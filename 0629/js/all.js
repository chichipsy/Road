// JavaScript Document

$(function(){
	$(".navbar_line").click(function () { 
        $(".pop_navbar").addClass("pop_active");
        $(".pop_background").css("z-index", "999");
    });
    $("#nav_Cancel").click(function () { 
        $(".pop_navbar").removeClass("pop_active");
        $(".pop_background").css("z-index", "-1");
    });
	

    //------------Head Auto Carousel----------//
    var settime = setInterval(auto_carousel,5000);
    let auto = 1;
    function auto_carousel(){
        if(auto == 0){
            $("#head .content .carousel ul li").css("transform", "translateX(0%)");
            auto+=1;
        }else if(auto == 1){
            $("#head .content .carousel ul li").css("transform", "translateX(-100%)");
            auto+=1;
        }else{
            $("#head .content .carousel ul li").css("transform", "translateX(-200%)");
            auto = 0;
        }
    }
    

    //----------Light->Dark----------//
    var light = true;
    $(".light").click(function () {
        if(light){
            light = false;
            $(".light .circle").css("transform", "translateX(138%)");
            $(":root").css({"--b":" #fffbff","--w": "#23262d","--e_color":"#df2935","--main_color": "#46E06C"});
        }else{
            light = true;
            $(".light .circle").css("transform", "translateX(0%)");
            $(":root").css({"--w":" #fffbff","--b": "#23262d","--e_color":"#46E06C","--main_color": "#df2935"});
        }
    });


    //-----------Info Carousel-----------//
    var info_Carousel_count = 1;
    $("#info_img_up").click(function () {
        if(info_Carousel_count != 1){
            if(info_Carousel_count == 2){
                $("#info .carousel ul li").css("transform", "translateY(0%)");
                $("#info .text .content .s").css("transform", "translateY(0%)");
                $("#info_img_up i").addClass("bc");
                info_Carousel_count = 1;
            }else if(info_Carousel_count == 3){
                $("#info .carousel ul li").css("transform", "translateY(-100%)");
                $("#info .text .content .s").css("transform", "translateY(-100%)");
                $("#info_img_down i").removeClass("bc");
                info_Carousel_count = 2;
            }
        }
    });
    $("#info_img_down").click(function () {
        if(info_Carousel_count != 3){
            if(info_Carousel_count == 1){
                $("#info .carousel ul li").css("transform", "translateY(-100%)");
                $("#info .text .content .s").css("transform", "translateY(-100%)");
                info_Carousel_count = 2;
                $("#info_img_up i").removeClass("bc");
            }else if(info_Carousel_count == 2){
                $("#info .carousel ul li").css("transform", "translateY(-200%)");
                $("#info .text .content .s").css("transform", "translateY(-200%)");
                $("#info_img_down i").addClass("bc");
                info_Carousel_count = 3;
            }
        }
    });

    //------------Info Learn More---------//
    $(".Info_Learn_More").click(function () { 
        $(".Info_More .content .imgcon img").attr("src", "image/info_carousel_img_" + info_Carousel_count + ".jpg");
        if(info_Carousel_count == 1){
            $(".content .t1").css("visibility", "visible");
            $(".content .t2").css("visibility", "hidden");
            $(".content .t3").css("visibility", "hidden");
        }else if(info_Carousel_count == 2){
            $(".content .t2").css("visibility", "visible");
            $(".content .t1").css("visibility", "hidden");
            $(".content .t3").css("visibility", "hidden");
        }else{
            $(".content .t3").css("visibility", "visible");
            $(".content .t2").css("visibility", "hidden");
            $(".content .t1").css("visibility", "hidden");
        }
        $(".Info_More").css("z-index", "999");
        $("body").css("overflow", "hidden");
        $(".Info_More .content").css("opacity", "1");
    });
    $("#Info_Cancel").click(function () { 
        $(".Info_More").css("z-index", "-1");
        $("body").css("overflow", "visible");
        $(".Info_More .content").css("opacity", ".3"); 
    });
    //------------Scroll-----------------//
    $(window).scroll(function () { 
        var scroll = $(window).scrollTop();
        console.log(scroll);
        
    });
});