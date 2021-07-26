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
            set_table(currentLengthType);

        }
    })

    $('.dimension').on('keyup', function () {
        set_table(currentLengthType);
    })
    
    $('.dimension').on('change', function () {
        set_table(currentLengthType);
    })

    function set_table(type) {
        
        for (let i = 0; i < $('.dimension').length; i++) {
            let elem = $('.dimension')[i];
            let inputValue = Number(elem.value);

            if(type == "cm") {
                if (!isNaN(inputValue)) {
                    if (elem.dataset.lengthtype == "depth") {
                        $('.dimension')[i].attributes.min.value = 40;
                        $('.dimension')[i].attributes.max.value = 400;
                        $('.dimension')[i].attributes.step.value = 5;

                        set_depth(inputValue);
                    } else if (elem.dataset.lengthtype == "width") {
                        $('.dimension')[i].attributes.min.value = 66;
                        $('.dimension')[i].attributes.max.value = 130;
                        $('.dimension')[i].attributes.step.value = 2;

                        set_width(inputValue);
                    } else if (elem.dataset.lengthtype == "height") {
                        $('.dimension')[i].attributes.min.value = 5;
                        $('.dimension')[i].attributes.max.value = 17;
                        $('.dimension')[i].attributes.step.value = 1;

                        write_length_height('.area_length_value_height_variable', inputValue);
                    }
                }
            } else  if (type == "inch") {
                let resultInch = Math.round((inputValue  * (2.54) + Number.EPSILON) * 100) / 100;

                if (!isNaN(inputValue)) {
                    if (elem.dataset.lengthtype == "depth") {
                        $('.dimension')[i].attributes.min.value = 15.74;
                        $('.dimension')[i].attributes.max.value = 157.48;
                        $('.dimension')[i].attributes.step.value = 3;

                        set_depth(resultInch);
                    } else if (elem.dataset.lengthtype == "width") {
                        $('.dimension')[i].attributes.min.value = 25.98;
                        $('.dimension')[i].attributes.max.value = 51.18;
                        $('.dimension')[i].attributes.step.value = 2;

                        set_width(resultInch);
                    } else if (elem.dataset.lengthtype == "height") {
                        $('.dimension')[i].attributes.min.value = 1.96;
                        $('.dimension')[i].attributes.max.value = 6.69;
                        $('.dimension')[i].attributes.step.value = 0.80;

                        write_length_height('.area_length_value_height_variable', resultInch);
                    }
                }
            }
        }
        
    }

    function set_depth(value) {
        if (value >= 50 && value <= 350) {
            let leftPos = value - 158;
            
            // * A * 
            $('.top').css({
                
                "width": value + "px"
            });

            $('.front').css({
                
                "width" : value + "px"
            }); 

            $('.left')[0].style.transform = "rotateY(90deg) translate3d(56px, 0px," + leftPos + "px)";

            write_length('.area_length_value_depth', value);

            

        } else if (value >= 350) {
            $('.top').css({
                
                "width" : "350px"
            });
            $('.front').css({
                
                "width": "350px"
            });

            $('.left')[0].style.transform = "rotateY(90deg) translate3d(56px, 0px, 192px)";

            write_length('.area_length_value_depth', value);
        
        } else {
            $('.top').css({
                
                "width" : "50px"
            });
            $('.front').css({
                
                "width": "50"
            });

            $('.left')[0].style.transform = "rotateY(90deg) translate3d(56px, 0px, -108px)";

            write_length('.area_length_value_depth', value);
        }
    }
    
    function set_width(value) {
        if (value >= 76 && value <= 120) {
            let frontPos = value - 8;

            // * B * 
            $('.top').css("height" , value + "px");
            
            $('.front')[0].style.transform = "rotateX(90deg) translateX(-150px)  translateY(-56px) translateZ(-" + frontPos +"px)";

            $('.left').css("height", value + "px");

            write_length('.area_length_value_width', value);

        } else if (value >= 120) {
            $('.top').css({"height" : 120 + "px"});
            
            $('.front')[0].style.transform = "rotateX(90deg) translateX(-150px)  translateY(-56px) translateZ(-" + 112 +"px)";

            $('.left').css("height", 120 + "px");

            write_length('.area_length_value_width', value);
        } else {
            $('.top').css({"height" : 76 + "px"});
            
            $('.front')[0].style.transform = "rotateX(90deg) translateX(-150px)  translateY(-56px) translateZ(-" + 68 +"px)";

            $('.left').css("height", 76 + "px");

            write_length('.area_length_value_width', value);
        }
    }

    function write_length(classname, value) {
        $(classname).html("←" + value + "cm→");
    }

    function write_length_height(classname, value) {
        if (value > 4 && value <= 17) {
            $(classname).html(value);
        } 
    }

    // Show approximate results
    // All Heights are 5.5cm
    $('.showprice').click(function (event) {
        let depth = new Number($('.dimension')[0].value);
        let width = new Number($('.dimension')[1].value);
        let height = new Number($('.dimension')[2].value);
        let parameter = new Number($('.parameter')[0].value);

        if(currentLengthType == "cm") {
            show_prices(depth, width, height);
            
        } else if (currentLengthType == "inch") {
            depth = Math.round((depth  * (2.54) + Number.EPSILON) * 100) / 100;
            width = Math.round((width  * (2.54) + Number.EPSILON) * 100) / 100;
            height = Math.round((height  * (2.54) + Number.EPSILON) * 100) / 100;
            
            show_prices(depth, width, height);
        }
            
        function show_prices(depth = Number, width = Number, height = Number) {
            let result = Array();
            $.get( "https://v3.paribu.com/app/markets/usdt-tl", function( data ) {
                let obj = data.data.orderBook.sell
                let dollar = Object.keys(obj).map((key) => [Number(key), obj[key]]);
                let newPurchase, purchase, inchDepth, inchWidth, currentwidth, currentdepth= 0;
                


                console.log(dollar[0][0]);
                let currentDollar = dollar[0][0];

                for (let i = 0; i < 20; i++) {
                    if ((depth + i*10) < 110) {
                        currentwidth = (width + i*10)
                        currentdepth = (depth + i*15)

                    } else if((depth + i*10) >= 110 && (depth + i*10) < 210) {
                        currentwidth = (width + i*3)
                        currentdepth = (depth + i*8)

                    } else {
                        currentwidth = (width + i*6)
                        currentdepth = (depth + i*10)
                    }

                    purchase = Math.round((currentdepth / 100 ) * (currentwidth / 100) * parameter / currentDollar); // Çarpan değişken

                    let lastone = +purchase.toString().split('').pop();
                    
                    if (lastone != 0 ) {
                        let a = purchase.toString().split('');
                        a[a.length - 1] = "9"; 

                        let b = a.join('');
                        newPurchase = parseInt(b) + 0.99;

                    } 

                    inchDepth = Math.round(Math.round((currentdepth * 0.393700787 + Number.EPSILON) * 100) / 100);
                    inchWidth = Math.round(Math.round((currentwidth * 0.393700787 + Number.EPSILON) * 100) / 100);
                    result.push(currentdepth + "x" + currentwidth + "cm " + inchDepth +'"x' + inchWidth + '"' + " - " +  newPurchase + "/" + (newPurchase + 230));



                }
                
                writePrices(result);
            
            });

        }
        
    })

    function writePrices(list) {
        $('.renderList').html('')
        let price = "";
        let result = "";
        list.forEach(item => {
            price = item.split(" - ");
            priceRight = price[1].split("/"); 
        result += `
                <li>
                    <div class="dblclick">${price[0]}</div>
                    <div><span class="dblclick">${priceRight[0]}</span> / <span class="dblclick">${priceRight[1]}</span> </div>
                </li>
                <div class="subseperator"> </div>
                `
        });

        $('.renderList').html(result)
    }

    $(document).on("click", ".dblclick", function(e) {
        copyToClipboard($(this).text());
        $(this)[0].style.color = "#EBB34B";
        
    });

})

function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}
