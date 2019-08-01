        $(document).ready(function(){
            $('#img1').click(function(){
                $('.p1').show();
                $('#img1').hide();
                    
            });
            $('.p1').click(function(){
                $('#img1').show();
                $('.p1').hide();;
        });

        $('#img2').click(function(){
            $('.p2').show();
            $('#img2').hide();
            
        });
        $('.p2').click(function(){
        $('#img2').show();
        $('.p2').hide();;
        });

        $('#img3').click(function(){
            $('.p3').show();
            $('#img3').hide();
            
        });
        $('.p3').click(function(){
        $('#img3').show();
        $('.p3').hide();;
        });


        $(".submit").click(function(){
            var name=$(".form").val();
            var email=$(".form").val();
            var textarea=$(".form").val();
            if((name !== "") && (email !== "") && (textarea !== "")){
            alert(name  + "," + " thank you for reaching out to us");
            }
            else{
                alert("please fill the form")
            }
        });

    //   first pic

        $(".pp1").hide();
        $("#pic1").animate({
            
        });
        $("#pic1").hover(function(){
            $(this).stop().animate({opacity:0.5}, );
            $(".pp1").fadeIn();
           
        } , function(){
           
            $(this).stop().animate({opacity:1}, );
            $(".pp1").fadeOut();
        });

    

        

        //   second pic

        $(".pp22").hide();
        $("#pic22").animate({
           
        });
        $("#pic22").hover(function(){
            $(this).stop().animate({opacity:0.5},);
            $(".pp22").fadeIn();
        } , function(){

            $(this).stop().animate({opacity:1},);
            $(".pp22").fadeOut();
        });


        //   third pic

        $(".p33").hide();
        $("#pict3").animate({
         
        });
        $("#pict3").hover(function(){
            $(this).stop().animate({opacity:0.5},);
            $(".p33").fadeIn();
        } , function(){

            $(this).stop().animate({opacity:1},);
            $(".p33").fadeOut();
        });



        //   fourth pic

        $(".p4").hide();
        $("#pic4").animate({
          
        });
        $("#pic4").hover(function(){
            $(this).stop().animate({opacity:0.5},);
            $(".p4").fadeIn();
        } , function(){

            $(this).stop().animate({opacity:1},);
            $(".p4").fadeOut();
        });


    //   fiveth pic

    $(".p5").hide();
    $("#pic5").animate({
        
    });
    $("#pic5").hover(function(){
        $(this).stop().animate({opacity:0.5},);
        $(".p5").fadeIn();
    } , function(){

        $(this).stop().animate({opacity:1}, );
        $(".p5").fadeOut();
    });


    //   sixth pic

    $(".p6").hide();
    $("#pic6").animate({
       
    });
    $("#pic6").hover(function(){
        $(this).stop().animate({opacity:0.5},);
        $(".p6").fadeIn();
    } , function(){
    
        $(this).stop().animate({opacity:1},);
        $(".p6").fadeOut();
    });

        //   seventh pic

        $(".p7").hide();
        $("#pic7").animate({
            
        });
        $("#pic7").hover(function(){
            $(this).stop().animate({opacity:0.5},);
            $(".p7").fadeIn();
        } , function(){
    
            $(this).stop().animate({opacity:1},);
            $(".p7").fadeOut();
        });
    

        //   eightth pic

    $(".p8").hide();
    $("#pic8").animate({
        
    });
    $("#pic8").hover(function(){
        $(this).stop().animate({opacity:0.5}, );
        $(".p8").fadeIn();
    } , function(){
    
        $(this).stop().animate({opacity:1},);
        $(".p8").fadeOut();
    });

    
            });

            