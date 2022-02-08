$(document).ready(function(){

    // variables
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    let flag = true;

    const cars = ['./assets/Img_05.PNG','./assets/Img_06.PNG'];

    //key press 
    $(document).on('keypress', function(e){
        if(e.which == 39){
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
        }
    })

    $(document).on('keypress', function(e){
        if(e.which == 40){
            if(flag){
                flag = false;
                $img.attr('src', cars[0]);
            }else{
                flag = true;
                $img.attr('src', cars[1]);
            }
        }
    })

});
