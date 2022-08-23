


//JQuery



$(document).ready(function(){

//Chuyển slide-Hiệu ứng trượt
    $(document).ready(function() {
        //Nút next
        $('#btn-next').click(function(event) {
           var slide_sau = $('.active').next();
           if(slide_sau.length!=0){
              $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
                 $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
              });
              slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
                 $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
              });
           }else{
              $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
                 $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
              });
              $('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
                 $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
              });
           }
        });
     });

        //Nút prev
     $('#btn-prev').click(function(event) {

		var slide_truoc = $('.active').prev();
		if(slide_truoc.length!=0){
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			slide_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
		}else{
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			$('.slide:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
		}
	});

    //Chuyển slide tự động sau 5 giây
    var interval;
    var timer = function () {
        interval = setInterval(function () {
            $("#btn-next").click();
        }, 5000);
    };

    timer();



   

    $("#gototop").hide()
    $(".icon-bar").hide()

    $(window).scroll(function () {

         //Tự động hiển thị các tiện tích khi kéo màn hình xuống 100 px
    
        if($(this).scrollTop() >= 100)
       {
        $(".icon-bar").show("slow")
       }
       else{
        $(".icon-bar").hide("slow")
       }


    
    //Tự động hiển thị thanh menu khi trượt màn hình xuống 230px
       if($(this).scrollTop() >= 230) {
            $(".menus").css({
                "position": "fixed",
                "left" : 0,
                "right" : 0,
                "top" : 0,
                "z-index" : 999,
            })
        }
        else{
            $(".menus").css({
                "position": "relative",
            })
        }


        //Tự động hiển thị nút trượt lên khi kéo màn hình xuống 100 px
       if($(this).scrollTop() >= 100)
       {
        $("#gototop").show("slow")
       }
       else{
        $("#gototop").hide("slow")
       }
       
    })

    $("#gototop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1500)
    })
})