$(function (){
    // 말본골프
    $("#webpage01").mouseenter(function(){
        $("#webpage01 img").stop().animate({marginTop:"-118em"}, 4000)
    }).mouseleave(function(){
        $("#webpage01 img").stop().animate({marginTop: "0px"}, 2000)
    })

    // 알라딘
    $("#webpage02").mouseenter(function(){
        $("#webpage02 img").stop().animate({marginTop:"-66em"}, 3000)
    }).mouseleave(function(){
        $("#webpage02 img").stop().animate({marginTop: "0px"}, 1000)
    })

    // 에스파시오
    $("#webpage03").mouseenter(function(){
        $("#webpage03 img").stop().animate({marginTop:"-68em"}, 2000)
    }).mouseleave(function(){
        $("#webpage03 img").stop().animate({marginTop: "0px"}, 500)
    })

    // 홈플러스
    $("#webpage04").mouseenter(function(){
        $("#webpage04 img").stop().animate({marginTop:"-98em"}, 3000)
    }).mouseleave(function(){
        $("#webpage04 img").stop().animate({marginTop: "0px"}, 1000)
    })

    // 배경과 아이콘
    $(".web-box").hover(function(){
        $(this).css({"background": "rgba(0,0,0,0.3)"});
        $(this).find("svg").show();
    }, function(){
        $(this).css({"background": "rgba(0,0,0,0)"});
        $(this).find("svg").hide();
    })

    // 비디오포폴
    $("#webpage07").mouseenter(function(){
        $("#webpage07 img").stop().animate({marginTop:"-96em"}, 3000)
    }).mouseleave(function(){
        $("#webpage07 img").stop().animate({marginTop: "0px"}, 1000)
    })
});
