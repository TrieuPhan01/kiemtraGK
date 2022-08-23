
 //JQuery

 $(document).ready(function(){

    //Chuyển slide-Hiệu ứng trượt
        $(document).ready(function() {
            //Nút next
            $('#btn-next').click(function(event) {
               var slide_sau = $('.active2').next();
               if(slide_sau.length!=0){
                  $('.active2').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
                     $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active2');
                  });
                  slide_sau.addClass('active2').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
                     $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
                  });
               }else{
                  $('.active2').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
                     $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active2');
                  });
                  $('.slide:first-child').addClass('active2').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
                     $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
                  });
               }
            });
         });
    
            //Nút prev
         $('#btn-prev').click(function(event) {
    
            var slide_truoc = $('.active2').prev();
            if(slide_truoc.length!=0){
                $('.active2').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
                    $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active2');
                });
                slide_truoc.addClass('active2').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
                    $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
                });
            }else{
                $('.active2').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
                    $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active2');
                });
                $('.slide:last-child').addClass('active2').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
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

    });

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();



 
