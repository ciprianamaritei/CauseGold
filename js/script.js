/* Author: Ciprian Amaritei

*/
$(document).ready(function(){
    
        //remove this code after all the links are added
        $("a").click(function(){
           // return false;
        });
        
        $(".step").hover(function(){
            $(this).find(".step-details").fadeIn();
            },
            function(){
                $(this).find(".step-details").hide();
            }
        );
        
        //ipad and iphone repalce for hover on process
        if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
            $(".step").unbind('mouseenter mouseleave');

            $(".step").bind('touchstart', function(){
                $(this).find(".step-details").show();
            });
            $(".step").bind('touchend', function(){
                $(this).find(".step-details").hide();
            });
               
        }
        
    });






