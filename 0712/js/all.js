// JavaScript Document

$(function(){
	$(".navbar_line").click(function () { 
        $(".pop_navbar").addClass("pop_active");
        $(".Nav_pop_background").css({
            "z-index": "99",
            "opacity": "1",
        });
        $("body").css("overflow-y", "hidden");
    });
    $("#nav_Cancel").click(function () { 
        $(".pop_navbar").removeClass("pop_active");
        $(".Nav_pop_background").css({
            "z-index": "-1",
            "opacity": "0"
        });
        $("body").css("overflow-y", "scroll");
    });
	

    //------------Head Auto Carousel----------//
    var settime = setInterval(auto_carousel,5000);
    let auto = 1;
    function auto_carousel(){
        if(auto == 0){
            $("#head .content .carousel ul li").css("transform", "translateX(0%)");
            auto += 1;
        }else if(auto == 1){
            $("#head .content .carousel ul li").css("transform", "translateX(-100%)");
            auto += 1;
        }else{
            $("#head .content .carousel ul li").css("transform", "translateX(-200%)");
            auto = 0;
        }
    }
    

    //----------Light => Dark----------//
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
        $(".Info_pop_background").css("z-index", "99");
        $(".info_more").css({
            "visibility": "visible",
            "opacity": "1",
        });
        $("body").css("overflow-y", "hidden");
        $(".info_img_content img").attr("src", "image/info_carousel_img_" + info_Carousel_count + ".jpg");
        if(info_Carousel_count == 1){
            $(".info_more .wrap .txt h1").text("核心問題");
            $(".info_more .wrap .txt .p1").css("visibility", "visible");
            $(".info_more .wrap .txt .p2").css("visibility", "hidden");
            $(".info_more .wrap .txt .p3").css("visibility", "hidden");
        }else if(info_Carousel_count == 2){
            $(".info_more .txt h1").text("解決方案");
            $(".info_more .txt .p2").css("visibility", "visible");
            $(".info_more .txt .p1").css("visibility", "hidden");
            $(".info_more .txt .p3").css("visibility", "hidden");
        }else{
            $(".info_more .txt h1").text("參考實例");
            $(".info_more .txt .p3").css("visibility", "visible");
            $(".info_more .txt .p2").css("visibility", "hidden");
            $(".info_more .txt .p1").css("visibility", "hidden");
        }
    });
    $(".info_more").click(function (e) {
        if(e.target === this){
            $(".info_more").css({"opacity": ".1","visibility": "hidden"});
            $(".info_more .wrap .txt .p1").css("visibility", "hidden");
            $(".info_more .wrap .txt .p2").css("visibility", "hidden");
            $(".info_more .wrap .txt .p3").css("visibility", "hidden");
            setTimeout(function(){$(".Info_pop_background").css("z-index", "-1");},100);
            $("body").css("overflow-y", "scroll");
            $(".info_more .txt").scrollTop(0);
        }
    });

    //------------Test-----------------//
    var test_num = 0;
    let right_ans = ["Q1_b" ,"Q2_a" ,"Q3_a" ,"Q4_d" ,"Q5_c"];
    $("#Start_test").click(function () { 
        test_num = 1;
        $("#test ul li").css("left", -(test_num * 100) + "%");
        
    });
    $(".Next_test").click(function () {
        test_num += 1;
        $("#test ul li").css("left", -(test_num * 100) + "%");
    });
    $(".Pre_test").click(function () {
        test_num -= 1;
        // user_ans.pop();
        $("#test ul li").css("left", -(test_num * 100)+"%");
    });
    $("#Cheak_Test").click(function () { 
        test_num = 6;
        $("#test ul li").css("left", -(test_num * 100)+"%");
    });
    $("#Submit_test").click(function () { 
        alert("送出成功");
        $("#test ul li").css("left", "0%");
        for(let i=0;i<=4;i++){
            $(".Q" + (i+1)).prop("checked",false);
        }
    });
    $("#Again_Test").click(function () { 
        $("#test ul li").css({
            "left": "0%",
            "transition": "0s",
        });
        alert("祝你好運");
        $("#test ul li").css("transition", "1s");
    });
    $("#Cheak_Test").click(function () { 
        let Score = 0;
        for(let i=0;i<=4;i++){
            let ans = $(".Q" + (i+1) + ":checked").attr("id");
            if(ans == right_ans[i]){
                Score+=20;
            }
            $(".Q" + (i+1)).prop("checked",false);
        }
        $("#test ul li:last-child .txt p").text("分數:" + Score);
    });

    //------------Scroll-----------------//
    $(window).scroll(function () { 
        var scroll = $(window).scrollTop();
        console.log(scroll);
    });
});