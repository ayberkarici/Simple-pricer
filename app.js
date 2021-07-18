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
    
    dragElement($('.prototype'));

    function dragElement(elmnt) {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

      if (elmnt) {
        /* if present, the header is where you move the DIV from:*/
        elmnt.onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }
    
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
    
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        $('.cube')[0].style.transform  = "rotateX(" + pos4 + "deg) rotateY(0deg) rotateZ(-150deg) translateZ(35px)";
        console.log($('.cube')[0].style.transform );
      }
    
      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
})


