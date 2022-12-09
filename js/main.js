    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("copyright-1").innerHTML = "<strong>&copy; Copyright " + d.getFullYear() + "</strong>";
    
    $(document).ready(function() {

        $("#title").toggle(2000);
        $(".adv-custom-caption").toggle(2000);
        $("#contact-name").toggle(1500);
        $("#contact-email").toggle(2000);
        $("#copyright-1").toggle(2500);
        $("#copyright-2").toggle(3000);
                        
        $("footer").hover(function() {         
            $("#contact-name").effect("shake");
            $("#contact-email").effect("shake");
            }, function() {
            $("#copyright-1").effect("shake");
            $("#copyright-2").effect("shake");
        });
        
    });
