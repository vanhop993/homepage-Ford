$(document).ready(function(){
    let status1=false;
    let status2=false;
    let status3=false;
    let status4=false;
    let status6=false;
    let status7=false;
    $(".header__middle-btn-1").click(function(){
        if(status1){
            $(".header__bottom-overlay.open-overlay").removeClass("open-overlay");  
            status1=false;
        }else{
            $(".header__bottom-overlay").addClass("open-overlay"); 
            $("#vehicles-tab").addClass("z-index-1").removeClass("z-index-0");
            $("#shop-tab").addClass("z-index-0").removeClass("z-index-1");
            $("#finace-tab").addClass("z-index-0").removeClass("z-index-1");
            $("#owner-tab").addClass("z-index-0").removeClass("z-index-1");
            status1=true;
            status2=false;
            status3=false;
            status4=false;
            status6=false;
            status7=false;
        }
    });
    $(".header__middle-btn-2").click(function(){
        if(status2){
            $(".header__bottom-overlay.open-overlay").removeClass("open-overlay");
            status2=false;
        }else{
            $(".header__bottom-overlay").addClass("open-overlay"); 
            $("#vehicles-tab").addClass("z-index-0").removeClass("z-index-1");
            $("#shop-tab").addClass("z-index-1").removeClass("z-index-0");
            $("#finace-tab").addClass("z-index-0").removeClass("z-index-1");
            $("#owner-tab").addClass("z-index-0").removeClass("z-index-1");
            status1=false;
            status2=true;
            status3=false;
            status4=false;
            status6=false;
            status7=false;
        }
    });
    $(".header__middle-btn-3").click(function(){
        if(status3){
            $(".header__bottom-overlay.open-overlay").removeClass("open-overlay");  
            status3=false;
        }else{
            $(".header__bottom-overlay").addClass("open-overlay"); 
            $("#vehicles-tab").addClass("z-index-0").removeClass("z-index-1");
            $("#shop-tab").addClass("z-index-0").removeClass("z-index-1");
            $("#finace-tab").addClass("z-index-1").removeClass("z-index-0");
            $("#owner-tab").addClass("z-index-0").removeClass("z-index-1");
            status1=false;
            status2=false;
            status3=true;
            status4=false;
            status6=false;
            status7=false;
        }
    });
    $(".header__middle-btn-4").click(function(){
        if(status4){
            $(".header__bottom-overlay.open-overlay").removeClass("open-overlay");  
            status4=false;
        }else{
            $(".header__bottom-overlay").addClass("open-overlay"); 
            $("#vehicles-tab").addClass("z-index-0").removeClass("z-index-1");
            $("#shop-tab").addClass("z-index-0").removeClass("z-index-1");
            $("#finace-tab").addClass("z-index-0").removeClass("z-index-1");
            $("#owner-tab").addClass("z-index-1").removeClass("z-index-0");
            status1=false;
            status2=false;
            status3=false;
            status4=true;
            status6=false;
            status7=false;
        }
    });
    $(".header__middle-btn-5").click(function(){
        $(".header__bottom-overlay").addClass("open-overlay");
        $(".header__bottom-overlay.open-overlay").removeClass("open-overlay");
        status1=false;
        status2=false;
        status3=false;
        status4=false;
        status6=false;
        status7=false;
    })
    $(".header__middle-btn-6").click(function(){
        if(status6){
            $(".header__bottom .header__bottom-tab.show").collapse('hide');
            $(".header__bottom-overlay.open-overlay").removeClass("open-overlay");  
            status6=false;
        }else{
            $(".header__bottom .header__bottom-tab.show").collapse('hide');
            $(".header__bottom-overlay").addClass("open-overlay"); 
            status1=false;
            status2=false;
            status3=false;
            status4=false;
            status6=true;
            status7=false;
        }
    });
    $(".header__middle-btn-7").click(function(){
        if(status7){
            $(".header__bottom .header__bottom-tab.show").collapse('hide');
            $(".header__bottom-overlay.open-overlay").removeClass("open-overlay");  
            status7=false;
        }else{
            $(".header__bottom .header__bottom-tab.show").collapse('hide');
            $(".header__bottom-overlay").addClass("open-overlay");
            status1=false;
            status2=false;
            status3=false;
            status4=false;
            status6=false;
            status7=true;
        }
    });
    $(".btn-menu").click(function(){
        $(".header__bottom .header__bottom-tab.show").collapse('hide');
        $(".header__bottom-overlay.open-overlay").removeClass("open-overlay");
    });
    $(".hide-collaps").click(function(){
        $(".header__bottom .header__bottom-tab.show").collapse('toggle');
    });
    $(".header__bottom-overlay").click(function(){
        $(".header__bottom-tab.show").collapse('toggle');
    });
    $(".header__bottom-btn").click(function(){
        $(".header__bottom-btn").removeClass("active");
    });
    $(".li-suv").click(function(){
        $(".li-suv").addClass("active");
    });
    $(".li-truck").click(function(){
        $(".li-truck").addClass("active");
    });
    $(".li-card").click(function(){
        $(".li-card").addClass("active");
    });
    $(".li-electrics").click(function(){
        $(".li-electrics").addClass("active");
    });
    $(".li-commercial").click(function(){
        $(".li-commercial").addClass("active");
    });
    $(".li-perfor").click(function(){
        $(".li-perfor").addClass("active");
    });
    $(".li-future").click(function(){
        $(".li-future").addClass("active");
    });
    $(".btn-close-overlay").click(function(){
        $(".header__bottom-overlay.open-overlay").removeClass("open-overlay");
        status1=false;
        status2=false;
        status3=false;
        status4=false;
        status6=false;
        status7=false;
    });
    $('.btn-menu-responsive').click(function(){
        $('.header__menu-responsive').toggleClass('transform-0');
    });
    $('.btn-go-1').click(function(){
        $('.header__menu-responsive-first').addClass('display-none');
        $('.header__menu-responsive-second').addClass('display-block');
        $('.move-active').removeClass('active');
        $('#header__menu-responsive-second-icon-vehicles').addClass('active');
        $('#vehicles-mobile').addClass('active');
        $('#vehicles-mobile').addClass('show');
    })
    $('.btn-go-2').click(function(){
        $('.header__menu-responsive-first').addClass('display-none');
        $('.header__menu-responsive-second').addClass('display-block');
        $('.move-active').removeClass('active');
        $('#header__menu-responsive-second-icon-shop').addClass('active');
        $('#shop-mobile').addClass('active');
        $('#shop-mobile').addClass('show');
    })
    $('.btn-go-3').click(function(){
        $('.header__menu-responsive-first').addClass('display-none');
        $('.header__menu-responsive-second').addClass('display-block');
        $('.move-active').removeClass('active');
        $('#header__menu-responsive-second-icon-finance').addClass('active');
        $('#finace-mobile').addClass('active');
        $('#finace-mobile').addClass('show');
    })
    $('.btn-go-4').click(function(){
        $('.header__menu-responsive-first').addClass('display-none');
        $('.header__menu-responsive-second').addClass('display-block');
        $('.move-active').removeClass('active');
        $('#header__menu-responsive-second-icon-owner').addClass('active');
        $('#owner-mobile').addClass('active');
        $('#owner-mobile').addClass('show');
    })
    $('.btn-back').click(function(){
        $('.header__menu-responsive-first').removeClass('display-none');
        $('.header__menu-responsive-second').removeClass('display-block');
        $('.fade').removeClass('active');
        $('.fade').removeClass('show');
    })
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1,
                dots:true,
            },
            768:{
                items:3,
            }
        }
    })
});
