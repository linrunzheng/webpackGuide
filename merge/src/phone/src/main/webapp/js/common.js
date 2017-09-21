 $(function() {
     // 移動端導航上啦下拉
     myScroll = new IScroll('#scrollWrap', { mouseWheel: true, click: true });
     //**PC端顶部上下滚动
     var prevTop = 0,
         currTop = 0;
     var navTop = $('#pc-nav').innerHeight();
     $(window).scroll(function() {
         currTop = $(window).scrollTop();
         if (currTop > prevTop) {
             $('#pc-nav').addClass('nav_up');
             $('#pc-nav').css("background", "rgba(0,0,0,0.75)")
         } else if (currTop <= navTop && currTop <= prevTop) {
             $('#pc-nav').css("background", "none")
         } else {
             $('#pc-nav').removeClass('nav_up')
         }
         setTimeout(function() {
             prevTop = currTop;
             if (currTop < navTop) {
                 $('#pc-nav').removeClass('nav_up')
             }
         }, 30);
     });


     $("#main-nav > li").click(function(e) {
         $(this).toggleClass('current').toggleClass("nosub");
     });

         // 左上角导航按钮
     $(".show-btn").click(function(e) {
         $("#scrollWrap").addClass("show");
         $(".mask").show();
         $(".mianNav-wrap").addClass("showNav");
     });
     // 点击其他位置去掉遮罩层
     $('.mask').on("click", function() {
            $(this).hide();
            $("#scrollWrap").removeClass("show");           
            setTimeout(function(){
                 $(".mianNav-wrap").removeClass("showNav");
                 $("#main-nav").css("transform","translate(0,0,0)")
             },200)          
         })
         // 防止遮罩层滑动
     $(".mask").on("touchmove", function(e) {
         return false;
     })

     // 回到顶部
     $(".gobackTop span,.returnTop").click(function() {
         $("html,body").animate({
             scrollTop: 0
         })
     })

     $(".pc-top-nav > li").on("mouseenter",function(){
        $(this).find("ul").stop().slideDown()
     }).on("mouseleave",function(){
         $(this).find("ul").stop().slideUp()
     })

 })
