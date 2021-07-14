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
})