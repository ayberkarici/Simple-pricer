$(document).ready(function () {
    let cminch = true; 
    let currentLengthType = "cm";
    $('.lengthType').on('change', function () {
        if(cminch) {
            // Selected INCH
            $('.inch').removeClass("unchoosedType");
            $('.cm').addClass("unchoosedType");

            $('.assetType').fadeOut(150, function () {
                $(this).html('inches');
                setTimeout(() => {
                    $(this).css("display", "block");
                    $(this).fadeIn();
                }, 200);
            });
            for (let i = 0; i < $('.dimension').length; i++) {
                let inputValue = Number($('.dimension')[i].value);
                if(!isNaN(inputValue)) {
                    let result = Math.round((inputValue  * (0.393700787) + Number.EPSILON) * 100) / 100;
                    $('.dimension')[i].value = result;
                }
            }

            currentLengthType = "inch";

            cminch = false;
        } else {
            // Selected CM
            $('.cm').removeClass("unchoosedType");
            $('.inch').addClass("unchoosedType");

            $('.assetType').fadeOut(150, function () {
                $(this).css("display", "none");
                $(this).html('cm');
                setTimeout(() => {
                    $(this).css("display", "block");
                    $(this).fadeIn();
                }, 200);
            });
            for (let i = 0; i < $('.dimension').length; i++) {
                let inputValue = Number($('.dimension')[i].value);
                if(!isNaN(inputValue)) {
                    let result = Math.round((inputValue  * (2.54) + Number.EPSILON) * 100) / 100;
                    $('.dimension')[i].value = result;

                }
            }

            currentLengthType = "cm";
            cminch = true;


        }


    })

    $('.dimension').on('keyup', function () {
        set_table(currentLengthType);
    })
    
    $('.dimension').on('change', function () {
        set_table(currentLengthType);
    })

    function set_table(type) {
        if (type == "cm") {
            for (let i = 0; i < $('.dimension').length; i++) {
                let elem = $('.dimension')[i];
                let inputValue = Number(elem.value);

                if (!isNaN(inputValue)) {
                    if (elem.dataset.lengthtype == "depth") {
                        set_depth(inputValue);
                    } else if (elem.dataset.lengthtype == "width") {
                        set_width(inputValue);
                    }
                }
            }
        }
    }

    function set_depth(value) {
        if (value >= 40 && value <= 350) {
            let leftPos = value - 161;       
            
            // * A * 
            $('.top').css({
                
                "width": value + "px"
            });

            $('.front').css({
                
                "width" : value + "px"
            }); 

            $('.left')[0].style.transform = "rotateY(90deg) translate3d(51px, -8px," + leftPos + "px)";
            

        } else if (value >= 350) {
            $('.top').css({
                
                "width" : "350px"
            });
            $('.front').css({
                
                "width": "350px"
            });
            $('.left')[0].style.transform = "rotateY(90deg) translate3d(51px, -8px, 189px)";
        
        } else {
            $('.top').css({
                
                "width" : "220px"
            });
            $('.front').css({
                
                "width": "220px"
            });
            $('.left')[0].style.transform = "rotateY(90deg) translate3d(51px, -8px, 59px)";
        }
    }
    
    function set_width(value) {
        if (value >= 76 && value <= 120) {
            let frontPos = value - 32;

            // * B * 
            $('.top').css("height" , value + "px");
            
            $('.front')[0].style.transform = "rotateX(90deg) translateX(-161px)  translateY(-40px) translateZ(-" + frontPos +"px)";

            $('.left').css("height", value + "px");

        } else if (value >= 120) {
            $('.top').css({"height" : 120 + "px"});
            
            $('.front')[0].style.transform = "rotateX(90deg) translateX(-161px)  translateY(-40px) translateZ(-" + 88 +"px)";

            $('.left').css("height", 120 + "px");
        } else {
            $('.top').css({"height" : 76 + "px"});
            
            $('.front')[0].style.transform = "rotateX(90deg) translateX(-161px)  translateY(-40px) translateZ(-" + 44 +"px)";

            $('.left').css("height", 76 + "px");
        }
    }
})

