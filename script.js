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
        alert("well recieved,"  + "thank you for reaching out to us");
    });

//   first pic

    $(".pp1").hide();
    $("#pic1").animate({
        opacity: 0.7
    });
    $("#pic1").hover(function(){
        $(this).stop()
        $(".pp1").fadeIn();
    } , function(){

        $(this).stop()
        $(".pp1").fadeOut();
    });

    //   second pic

    $(".pp22").hide();
    $("#pic22").animate({
        opacity: 0.7
    });
    $("#pic22").hover(function(){
        $(this).stop()
        $(".pp22").fadeIn();
    } , function(){

        $(this).stop()
        $(".pp22").fadeOut();
    });


    //   third pic

    $(".p33").hide();
    $("#pict3").animate({
        opacity: 0.7
    });
    $("#pict3").hover(function(){
        $(this).stop()
        $(".p33").fadeIn();
    } , function(){

        $(this).stop()
        $(".p33").fadeOut();
    });



    //   fourth pic

    $(".p4").hide();
    $("#pic4").animate({
        opacity: 0.7
    });
    $("#pic4").hover(function(){
        $(this).stop()
        $(".p4").fadeIn();
    } , function(){

        $(this).stop()
        $(".p4").fadeOut();
    });



   
        });

        