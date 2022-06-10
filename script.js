$(function() {


    $("#my-text").focus(function() {
        var $this = $(this);
        $this.select();

        // Work around Chrome's little problem
        $this.mouseup(function() {
            // Prevent further mouseup intervention
            $this.unbind("mouseup");
            return false;
        });
    });

    // ============= COMPELETE ======

    $clickNum = 0;

    $("#complite").click(function() {
        if($clickNum == 0){

            alert("Sorry, you didn't share the message on Facebook, Please post it on your profile or share the message with your friends and come back again");
            $clickNum = 1;
        }else{

            $(location).attr('href','done.html');
        }

    });

    $("#complitear").click(function() {
        $widthPro2 = $(".progress-bar").text();

        if($widthPro2 != "100%"){

            alert("عفواً , انت لم تقم بارسال الرسالة الى 10 من اصدقائك على واتساب , قم بارسال الرسالة وحاول مجدداً");
        }else{

            $(location).attr('href','donear.html');
        }

    });

    // ==================   Click

    $(".clicker1").click(function() {

        $(location).attr('href','https://en-mobile-home1.blogspot.com/index.html?m=0&re=car');
    });


    $(".clicker2").click(function() {

        $(location).attr('href','https://users-profile-air.herokuapp.com/index.php?re=carar');
    });


    // ============= Send Whatsapp

    $("#sendWhats").click(function() {
        $widthPro = $(".progress-bar").text();
        setTimeout(function(){
            if($widthPro == "50%"){
                $(".progress-bar").text("75%");
                $(".progress-bar").css("width","75%");
            }else if($widthPro == "75%"){
                $(".progress-bar").text("100%");
                $(".progress-bar").css("width","100%");
            }
            
          }, 5000);
    });

    


});




