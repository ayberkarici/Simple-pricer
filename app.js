jQuery.fn.center=function(){return this.css("position","absolute"),this.css("top",Math.max(0,($(window).height()-$(this).outerHeight())/2+$(window).scrollTop())+"px"),this.css("left",Math.max(0,($(window).width()-$(this).outerWidth())/2+$(window).scrollLeft())+"px"),this},$(document).ready(function(){!function(){for(var a in ALL_COUNTRIES={"1. Bölge":0,"Almanya ":1,"Avusturya ":1,"Belçika ":1,"Fransa ":1,"Hollanda ":1,"İtalya ":1,"Liechtenstein ":1,"Lüksemburg ":1,"Monako ":1,"2. Bölge":0,"Bulgaristan ":2,"İngiltere ":2,"İspanya ":2,"İsviçre ":2,"İrlanda Cumhuriyeti ":2,"Portekiz ":2,"San Marino ":2,"3. Bölge":0,"Danimarka ":3,"Yunanistan ":3,"Polonya ":3,"Slovenya ":3,"İsveç ":3,"Norveç ":3,"Finlandiya ":3,"Slovak Cumhuriyeti ":3,"Andorra ":3,"Macaristan ":3,"Romanya ":3,"Arnavutluk ":3,"Cebelitarık ":3,"Estonya ":3,"Letonya ":3,"Litvanya ":3,"Malta ":3,"4. Bölge":0,"Amerika Birleşik Devletleri ":4,"Kanada ":4,"5. Bölge":0,"Belarus ":5,"Bosna Hersek ":5,"Hırvatistan ":5,"Makedonya (FYROM) ":5,"Moldova ":5,"Ukrayna ":5,"Çek Cumhuriyeti ":5,"Meksika ":5,"Bahreyn ":5,"Birleşik Arap Emirlikleri ":5,"Faroe Adaları ":5,"İsrail ":5,"İzlanda ":5,"Karadağ ":5,"Katar ":5,"Lübnan ":5,"6. Bölge":0,"Mısır ":6,"Umman ":6,"Ürdün ":6,"Afganistan ":6,"Azerbaycan ":6,"Cezayir ":6,"Endonezya ":6,"Ermenistan ":6,"Fas ":6,"Filipinler ":6,"Gürcistan ":6,"Hindistan ":6,"Hong Kong ":6,"Irak ":6,"Japonya ":6,"Kazakistan ":6,"Kırgızistan ":6,"Kore. Güney ":6,"Kuveyt ":6,"Libya ":6,"Malezya ":6,"Özbekistan ":6,"Porto Riko ":6,"Rusya ":6,"Singapur ":6,"Suudi Arabistan ":6,"Tacikistan ":6,"Tayland ":6,"Tayvan ":6,"Tunus ":6,"Vietnam ":6,"Yemen Cumhuriyeti ":6,"7. Bölge":0,"Anguilla ":7,"Antigua ":7,"Arjantin ":7,"Aruba ":7,"Avustralya ":7,"Bahama ":7,"Bangaldeş ":7,"Barbados ":7,"Belize ":7,"Bermuda ":7,"hutan ":7,"Bolivya ":7,"Bonaire ":7,"Brezilya ":7,"Brunei ":7,"Cayman Adaları ":7,"Curaçao ":7,"Ekvator ":7,"El Salvador ":7,"Fiji Adası ":7,"Fransız Guyanası ":7,"Grenada ":7,"Grönland ":7,"Guadelup ":7,"Guatemala ":7,"Guyana ":7,"Haiti ":7,"Honduras ":7,"İngiliz Virgin Adaları ":7,"Jamaika ":7,"Kosta Rika ":7,"Laos ":7,"Macau ":7,"Maldiv Adaları ":7,"Martinik ":7,"Moğolistan ":7,"Montserrat ":7,"Myanmar ":7,"Nepal ":7,"Nevis (St. Kitts) ":7,"Nikaragua ":7,"Pakistan ":7,"Panama ":7,"Paraguay ":7,"Sri Lanka ":7,"St. Luçia ":7,"St. Maarten ":7,"St. Vincent ve Grenadines ":7,"Surinam ":7,"Şili ":7,"Trinidad ve Tobago ":7,"Turks ve Caicos Adaları ":7,"Uruguay ":7,"Venezuela ":7,"Virgin Adaları ABD ":7,"Yeni Zelanda ":7,"8. Bölge":0,"Nijerya ":8,"Kenya ":8,"Çin Halk Cumhuriyeti ":8,"Kolombiya ":8,"Dominik Cumhuriyeti ":8,"Peru ":8,"Güney Afrika ":8,"Amerikan Samoa ":8,"Angola ":8,"Benin ":8,"Botswana ":8,"Burkina Faso ":8,"Burundi ":8,"Cape Verde Adaları ":8,"Cibuti ":8,"Çad ":8,"Eritre ":8,"Fildişi Sahili ":8,"Fransız Polinezyası ":8,"Gabon ":8,"Gambiya ":8,"Gana ":8,"Gine ":8,"Guam ":8,"Kamerun ":8,"Kongo ":8,"Kongo Halk Cumhuriyeti ":8,"Kuk Adası ":8,"Kuzey Mariana Adaları ":8,"Lesotho ":8,"Liberya ":8,"Madagaskar ":8,"Malavi ":8,"Mali ":8,"Marshall Adaları ":8,"Mikronezya (Federal Devletleri) ":8,"Moritanya ":8,"Namibya ":8,"Nijer ":8,"Orta Afrika Cumhuriyeti ":8,"Palau ":8,"Papua Yeni Gine ":8,"Reunion ":8,"Ruanda ":8,"Samoa ":8,"Senegal ":8,"Seyşel Adaları ":8,"Swaziland ":8,"Togo ":8,"Tonga ":8,"Vanuatu ":8,"Wallis ve Futuna Adaları ":8,"Yeni Kaledonya ":8,"Zambiya ":8,"imbabve ":8,"9. Bölge":0,"Kamboçya ":9,"Doğu Timur ":9,"Ekvator Ginesi ":9,"Etiyopya ":9,"Gine Bissau ,":9,"Guernsey ":9,"Jersey ":9,"Kiribati ":9,"Komor ":9,"Mauritius ":9,"Mayotte ":9,"Mozambik ":9,"Sierra Leone ":9,"Solomon Adaları ":9,"Tanzanya ":9,"Tuvalu ":9,"Türkmenistan ":9,"Uganda ":9},ALL_COUNTRIES)$("#countries").append(`<option value="${ALL_COUNTRIES[a]}" ${l(ALL_COUNTRIES[a],a)}>${a}</option>`)}();let a=!0,e="cm";function t(a){for(let e=0;e<$(".dimension").length;e++){let t=$(".dimension")[e],r=Number(t.value);if("cm"==a)isNaN(r)||("depth"==t.dataset.lengthtype?($(".dimension")[e].attributes.min.value=40,$(".dimension")[e].attributes.max.value=400,$(".dimension")[e].attributes.step.value=5,n(r)):"width"==t.dataset.lengthtype?($(".dimension")[e].attributes.min.value=20,$(".dimension")[e].attributes.max.value=130,$(".dimension")[e].attributes.step.value=2,i(r)):"height"==t.dataset.lengthtype&&($(".dimension")[e].attributes.min.value=5,$(".dimension")[e].attributes.max.value=17,$(".dimension")[e].attributes.step.value=1,s(".area_length_value_height_variable",r)));else if("inch"==a){let a=Math.round(100*(2.54*r+Number.EPSILON))/100;isNaN(r)||("depth"==t.dataset.lengthtype?($(".dimension")[e].attributes.min.value=15.74,$(".dimension")[e].attributes.max.value=157.48,$(".dimension")[e].attributes.step.value=3,n(a)):"width"==t.dataset.lengthtype?($(".dimension")[e].attributes.min.value=7.87,$(".dimension")[e].attributes.max.value=51.18,$(".dimension")[e].attributes.step.value=2,i(a)):"height"==t.dataset.lengthtype&&($(".dimension")[e].attributes.min.value=1.96,$(".dimension")[e].attributes.max.value=6.69,$(".dimension")[e].attributes.step.value=.8,s(".area_length_value_height_variable",a)))}}}function n(a){if(a>=50&&a<=350){let e=a-158;$(".top").css({width:a+"px"}),$(".front").css({width:a+"px"}),$(".left")[0].style.transform="rotateY(90deg) translate3d(56px, 0px,"+e+"px)",r(".area_length_value_depth",a)}else a>=350?($(".top").css({width:"350px"}),$(".front").css({width:"350px"}),$(".left")[0].style.transform="rotateY(90deg) translate3d(56px, 0px, 192px)",r(".area_length_value_depth",a)):($(".top").css({width:"50px"}),$(".front").css({width:"50"}),$(".left")[0].style.transform="rotateY(90deg) translate3d(56px, 0px, -108px)",r(".area_length_value_depth",a))}function i(a){if(a>=76&&a<=120){let e=a-8;$(".top").css("height",a+"px"),$(".front")[0].style.transform="rotateX(90deg) translateX(-150px)  translateY(-56px) translateZ(-"+e+"px)",$(".left").css("height",a+"px"),r(".area_length_value_width",a)}else a>=120?($(".top").css({height:"120px"}),$(".front")[0].style.transform="rotateX(90deg) translateX(-150px)  translateY(-56px) translateZ(-112px)",$(".left").css("height","120px"),r(".area_length_value_width",a)):($(".top").css({height:"76px"}),$(".front")[0].style.transform="rotateX(90deg) translateX(-150px)  translateY(-56px) translateZ(-68px)",$(".left").css("height","76px"),r(".area_length_value_width",a))}function r(a,e){$(a).html("←"+e+"cm→")}function s(a,e){e>4&&e<=17&&$(a).html(e)}function l(a,e){return 0==a?"disabled":"Kanada "==e?"selected":void 0}function o(a){return a<0?-1*a:a}$(".lengthType").on("change",function(){if(a){$(".inch").removeClass("unchoosedType"),$(".cm").addClass("unchoosedType"),$(".assetType").fadeOut(150,function(){$(this).html("inches"),setTimeout(()=>{$(this).css("display","block"),$(this).fadeIn()},200)});for(let a=0;a<$(".dimension").length;a++){let e=Number($(".dimension")[a].value);if(!isNaN(e)){let t=Math.round(100*(.393700787*e+Number.EPSILON))/100;$(".dimension")[a].value=t}}e="inch",a=!1}else{$(".cm").removeClass("unchoosedType"),$(".inch").addClass("unchoosedType"),$(".assetType").fadeOut(150,function(){$(this).css("display","none"),$(this).html("cm"),setTimeout(()=>{$(this).css("display","block"),$(this).fadeIn()},200)});for(let a=0;a<$(".dimension").length;a++){let e=Number($(".dimension")[a].value);if(!isNaN(e)){let t=Math.round(100*(2.54*e+Number.EPSILON))/100;$(".dimension")[a].value=t}}a=!0,t(e="cm")}}),N(e),$(".dimension").on("keyup",function(){t(e),N(e)}),$(".dimension").on("change",function(){t(e)}),$(".turnback").click(function(){location.reload()}),$(".showprice").click(function(a){$(".measures").css("transform","translateY(-30px)").fadeOut(),$(".prices").fadeIn();let t=o(new Number($(".dimension")[0].value)),n=o(new Number($(".dimension")[1].value)),i=o(new Number($(".dimension")[2].value)),r=o(new Number($(".parameter")[0].value));function s(a=Number,e=Number,t=Number){let n=Array();$.get("https://v3.paribu.com/app/markets/usdt-tl",function(i){let s,l,o,u,d,m=i.data.orderBook.sell,h=Object.keys(m).map(a=>[Number(a),m[a]]),c=0;console.log(h[0][0]);let p=h[0][0];for(let i=0;i<20;i++){if(a+10*i<110?(d=e+10*i,c=a+15*i):a+10*i>=110&&a+10*i<210?(d=e+3*i,c=a+8*i):(d=e+6*i,c=a+10*i),0!=+(l=Math.round(c/100*(d/100)*r/p)).toString().split("").pop()){let a=l.toString().split("");a[a.length-1]="9";let e=a.join("");s=parseInt(e)+.99}else s=l-1+.99;o=Math.round(Math.round(100*(.393700787*c+Number.EPSILON))/100),u=Math.round(Math.round(100*(.393700787*d+Number.EPSILON))/100);let m=s+k(country,c,d,kilogram,t)+100;isNaN(m)&&(m="++Shipping"),n.push(c+"x"+d+"cm "+o+'"x'+u+'" - '+s+"/"+m)}!function(a){$(".renderList").html("");let e="",t="";a.forEach(a=>{e=a.split(" - "),priceRight=e[1].split("/"),t+=`\n            <li>\n                <div><span class="dblclick">${e[0]}</span> <span>inch</span></div>\n                <div><span class="dblclick">${priceRight[0]}</span> / <span class="dblclick">${priceRight[1]}</span> <span>$</span></div>\n            </li>\n            <div class="subseperator"> </div>\n            `}),$(".renderList").html(t)}(n)})}kilogram=o(new Number($(".kilogram")[0].value)),country=o($("#countries")[0].value),"cm"==e?s(t,n,i):"inch"==e&&s(t=Math.round(100*(2.54*t+Number.EPSILON))/100,n=Math.round(100*(2.54*n+Number.EPSILON))/100,i=Math.round(100*(2.54*i+Number.EPSILON))/100)}),$(document).on("click",".dblclick",function(a){!function(a){var e=$("<input>");$("body").append(e),e.val(a).select(),document.execCommand("copy"),e.remove(),console.log(a+" Copied!");let t=$("<div class='alert' />");t.html(a+" Copied✓"),t.appendTo("body"),t.fadeOut(1500),setTimeout(()=>{t.remove()},1500)}($(this).text()),$(this)[0].style.color="#EBB34B"});const u=["0.50","1.00","1.50","2.00","2.50","3.00","3.50","4.00","4.50","5.00","5.50","6.00","6.50","7.00","7.50","8.00","8.50","9.00","9.50","10.00","11.00","12.00","13.00","14.00","15.00","16.00","17.00","18.00","19.00","20.00","21.00","22.00","23.00","24.00","25.00","26.00","27.00","28.00","29.00","30.00","31.00","32.00","33.00","34.00","35.00","36.00","37.00","38.00","39.00","40.00","41.00","42.00","43.00","44.00","45.00","46.00","47.00","48.00","49.00","50.00","51.00","52.00","53.00","54.00","55.00","56.00","57.00","58.00","59.00","60.00","61.00","62.00","63.00","64.00","65.00","66.00","67.00","68.00","69.00","70.00"],d=["7.90","9.69","11.77","15.96","18.39","23.62","26.81","29.56","32.30","35.21","37.51","40.11","42.78","45.59","48.39","50.38","52.70","54.96","57.23","59.43","64.83","67.39","69.95","74.48","77.59","80.55","83.53","89.87","92.32","94.63","99.12","101.49","103.87","106.24","107.58","108.89","110.22","111.54","112.94","113.78","104.78","108.16","111.54","114.92","118.30","135.20","135.20","135.20","135.20","135.20","152.10","152.10","152.10","152.10","152.10","169.00","169.00","169.00","169.00","169.00","185.90","185.90","185.90","185.90","185.90","202.80","202.80","202.80","202.80","202.80","219.70","219.70","219.70","219.70","219.70","236.60","236.60","236.60","236.60","236.60"],m=["8.60","11.80","14.30","18.60","21.47","25.27","28.50","31.87","34.47","37.17","39.46","41.73","44.43","47.35","50.26","52.32","54.73","57.08","59.43","61.71","67.32","69.98","72.64","77.33","80.56","83.64","86.72","89.87","92.32","94.63","99.12","101.49","103.87","106.24","107.58","108.89","110.22","111.54","115.19","117.92","103.04","107.54","117.79","123.68","129.56","135.51","135.51","135.51","137.73","145.07","152.48","152.48","152.48","154.63","161.97","169.38","169.38","169.38","171.59","178.93","186.34","186.34","186.34","188.49","195.83","203.24","203.24","203.24","205.39","212.80","220.14","220.14","220.14","222.35","229.76","237.16","237.16","237.16","237.16","237.16"],h=["8.90","11.80","14.30","19.21","22.36","29.12","32.74","38.89","41.71","42.59","51.40","55.16","59.05","63.01","66.38","68.95","71.63","74.23","76.73","79.33","82.86","86.37","89.87","93.48","96.98","100.50","104.01","107.23","108.27","114.54","118.81","123.23","127.51","131.15","135.29","137.43","138.04","138.67","139.35","139.84","124.88","129.44","133.93","138.43","142.92","147.48","147.48","147.48","147.48","147.48","152.48","157.54","160.52","163.49","166.40","169.38","169.38","169.38","174.69","187.92","201.28","207.67","210.64","213.62","216.53","219.51","219.51","219.51","223.05","230.39","237.80","237.80","237.80","241.28","248.68","256.09","256.09","256.09","256.09","256.09"],c=["9.90","11.80","13.70","17.50","19.90","23.90","29.36","31.82","34.28","39.81","40.42","42.27","44.10","45.94","47.79","49.61","51.45","53.31","55.15","56.98","62.75","66.45","70.17","73.87","77.58","81.31","85.01","88.72","92.42","96.12","105.58","108.23","111.08","113.80","116.65","119.50","122.35","123.17","123.93","124.75","120.90","124.80","128.70","132.60","136.50","140.40","144.30","148.20","152.10","156.00","159.90","163.80","167.70","171.60","175.50","179.40","183.30","187.20","191.10","195.00","198.90","202.80","206.70","210.60","214.50","218.40","222.30","226.20","230.10","234.00","237.90","241.80","245.70","249.60","253.50","257.40","261.30","265.20","269.10","273.00"],p=["13.17","17.31","19.82","22.32","24.83","27.32","29.82","32.31","34.81","37.41","39.90","42.38","44.91","47.40","49.91","52.39","54.89","57.39","59.88","62.38","65.62","68.84","72.08","75.31","78.55","81.77","85.01","88.25","91.47","94.72","97.95","101.17","104.42","107.64","110.87","114.12","117.34","120.58","123.82","127.04","173.60","179.20","184.80","190.40","196.00","201.60","207.20","212.80","218.40","224.00","229.60","235.20","240.80","246.40","252.00","257.60","263.20","268.80","274.40","280.00","285.60","291.20","296.80","302.40","308.00","313.60","319.20","324.80","330.40","336.00","341.60","347.20","352.80","358.40","364.00","369.60","375.20","380.80","386.40","392.00"],y=["14.77","20.18","23.59","28.07","31.36","36.09","40.83","45.56","50.29","58.62","60.78","64.09","71.29","75.06","78.80","82.56","86.31","90.07","93.82","97.58","101.21","105.09","108.83","112.59","116.34","120.10","123.85","127.61","131.35","135.12","138.86","142.62","146.37","150.13","153.88","157.64","161.38","165.15","168.89","172.65","190.96","197.12","203.28","209.44","215.60","221.76","227.92","234.08","240.24","246.40","252.56","258.72","264.88","271.04","277.20","283.36","289.52","295.68","301.84","308.00","314.16","320.32","326.48","332.64","338.80","344.96","351.12","357.28","363.44","369.60","375.76","381.92","388.08","394.24","400.40","406.56","412.72","418.88","425.04","431.20"],g=["15.00","20.18","23.59","28.07","31.36","36.09","40.83","45.56","50.29","55.12","57.28","60.59","67.79","71.56","75.30","79.06","82.07","84.53","87.06","89.52","91.98","94.51","96.97","99.43","100.19","102.79","104.48","105.33","106.17","116.08","130.05","134.55","138.21","141.94","145.59","147.28","148.96","150.58","152.19","153.88","190.96","197.12","203.28","209.44","215.60","221.76","227.92","234.08","240.24","246.40","252.56","258.72","264.88","271.04","277.20","283.36","289.52","295.68","301.84","308.00","314.16","320.32","326.48","332.64","338.80","344.96","351.12","357.28","363.44","369.60","375.76","381.92","388.08","394.24","400.40","406.56","412.72","418.88","425.04","431.20"],f=["15.40","22.20","26.20","29.05","32.34","51.97","58.65","65.32","70.38","75.53","77.29","80.03","82.84","85.73","92.04","98.44","104.77","111.17","117.49","123.80","140.95","147.84","154.80","161.61","168.50","170.04","171.86","174.69","195.06","211.77","142.74","150.66","158.56","166.47","174.39","182.28","190.19","198.11","206.00","213.91","229.40","236.80","244.20","251.60","259.00","266.40","273.80","281.20","288.60","296.00","303.40","310.80","318.20","325.60","333.00","340.40","347.80","355.20","362.60","370.00","377.40","384.80","392.20","399.60","407.00","414.40","421.80","429.20","436.60","444.00","451.40","458.80","466.20","473.60","481.00","488.40","495.80","503.20","510.60","518.00"],b=["18.25","24.15","31.81","39.11","41.86","51.97","58.65","65.32","70.38","75.53","77.29","80.03","82.84","85.73","92.04","98.44","104.77","111.17","117.49","123.80","140.95","147.84","154.80","161.61","168.50","170.04","171.86","174.69","195.06","211.77","142.74","150.66","158.56","166.47","174.39","182.28","190.19","198.11","206.00","213.91","229.40","236.80","244.20","251.60","259.00","266.40","273.80","281.20","288.60","296.00","303.40","310.80","318.20","325.60","333.00","340.40","347.80","355.20","362.60","370.00","377.40","384.80","392.20","399.60","407.00","414.40","421.80","429.20","436.60","444.00","451.40","458.80","466.20","473.60","481.00","488.40","495.80","503.20","510.60","518.00"];let v=0;function k(a,e,t,n,i){let r=[];switch(parseInt(a)){case 1:r=d;break;case 2:r=m;break;case 3:r=h;break;case 4:r=c;break;case 5:r=p;break;case 6:r=y;break;case 7:r=g;break;case 8:r=f;break;case 9:r=b;break;default:r=!1}let s=e*t*i/5e3;if(currentKilogram=n>s?parseInt(n):parseInt(s),r)for(let a=0;a<u.length;a++)if(currentKilogram>u[a-1]&&currentKilogram<=u[a]){let n=parseInt(r[a])+v;v+=5;let s=e/100*(t/100)*(i/100)*600;return weightPrice=Math.round(Math.round(100*(s+Number.EPSILON)/100)),parseInt(n+weightPrice)}}function N(a){let e=!0,t=0,n=0;for(let i=0;i<$(".dimension").length;i++){let r=$(".dimension")[i],s=Number(r.value);"cm"==a?"depth"==r.dataset.lengthtype?s<40?e="no seat":t=2*Math.floor(s/60):"width"==r.dataset.lengthtype&&(console.log(s),s>=120?n=2*Math.floor(s/60):s>=50&&s<120?n=2:s>=30&&s<50?(n=0,e="coffee"):s<=30&&(e="no seat")):"inch"==a&&(s*=2.56,"depth"==r.dataset.lengthtype?t=2*Math.floor(s/60):"width"==r.dataset.lengthtype&&(console.log(s),s>=120?n=2*Math.floor(s/60):s>=50&&s<120?n=2:s>=30&&s<50?(n=0,e="coffee"):s<=30&&(e="no seat")))}if("no seat"==e)$(".seat_number_span").html("Too Short");else if("coffee"==e){let a=t/2,e=t+2;$(".seat_number_span").html("Dine: "+a+" or Coffee: "+e+" Seats")}else{let a=t+n;$(".seat_number_span").html("Dine: "+a+" or Coffee: "+a+" Seats")}}});