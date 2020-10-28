$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 3000 } );
    $("#carouselBtn").click(function(){
        if ($("#carouselBtn").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselBtn").children("span").removeClass('fa-pause');
            $("#carouselBtn").children("span").addClass('fa-play');
        }
        else if ($("#carouselBtn").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselBtn").children("span").removeClass('fa-play');
            $("#carouselBtn").children("span").addClass('fa-pause');                    
        }
    });
    $("#loginbtn").click(function(){
        $("#loginModal").modal('show');
    });
    $("#reservebtn").click(function(){
        $("#reservationModal").modal('show');
    });
});