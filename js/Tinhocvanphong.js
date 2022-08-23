
//JQuery


$(document).ready(function () {

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



    //Hiệu ứng show và close bảng 
    let click1 = 0;
    let click2 = 0;
    let click3 = 0;
    let click4 = 0;
    let click5 = 0;
    let click6 = 0;
    let click7 = 0;
    $("#s-title-1").click(function () {
        $("#s-content-1").slideDown("slow");
        click1++;
        if (click1 == 2) {
            $("#s-content-1").slideUp("slow");
            click1 = 0;
        }
    });

    $("#s-title-2").click(function () {
        $("#s-content-2").slideDown("slow");
        click2++;
        if (click2 == 2) {
            $("#s-content-2").slideUp("slow");
            click2 = 0;
        }
    });

    $("#s-title-3").click(function () {
        $("#s-content-3").slideDown("slow");
        click3++;
        if (click3 == 2) {
            $("#s-content-3").slideUp("slow");
            click3 = 0;
        }
    });

    $("#s-title-4").click(function () {
        $("#s-content-4").slideDown("slow");
        click4++;
        if (click4 == 2) {
            $("#s-content-4").slideUp("slow");
            click4 = 0;
        }
    });

    $("#s-title-5").click(function () {
        $("#s-content-5").slideDown("slow");
        click5++;
        if (click5 == 2) {
            $("#s-content-5").slideUp("slow");
            click5 = 0;
        }
    });

    $("#s-title-6").click(function () {
        $("#s-content-6").slideDown("slow");
        click6++;
        if (click6 == 2) {
            $("#s-content-6").slideUp("slow");
            click6 = 0;
        }
    });
    
    $("#s-title-7").click(function () {
        $("#s-content-7").slideDown("slow");
        click7++;
        if (click7 == 2) {
            $("#s-content-7").slideUp("slow");
            click7 = 0;
        }
    });
});




// Hiện nút trượt lên sau khí kéo màn hình xuống 100px

$(document).ready(function(){
    $("#gototop").hide()
    

    $(window).scroll(function () {



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