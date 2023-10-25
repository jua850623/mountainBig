$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
        $(".nav-back").stop().slideDown();
    },
    function(){
        $(".sub").stop().slideUp();
        $(".nav-back").stop().slideUp();
    }
);




$(".open").click(
    function(){
        $("#popup").stop().show();
    }
);


$(".close").click(
    function(){
        $("#popup").stop().hide();
    }
);