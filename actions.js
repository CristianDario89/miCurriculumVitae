<<<<<<< HEAD
     $(document).ready(function(){
    $("img.c1").click(function(){
        $(this).animate({
            marginLeft:"10px",
            width:"370px",
            height:"290px"
        },2000).delay(4000); //termina animate
        
      $(this).animate({
            marginLeft:"0px",
            width:"160px",
            height:"130px"
        },1500);//termina click , func q gestiona el evento
        
     });
         
     
         $("img.c1").before("<h5 style='color: brown'>click <br>on the <br>img --></h5>");
        
             
=======
     $(document).ready(function(){
    $("img.c1").click(function(){
        $(this).animate({
            marginLeft:"10px",
            width:"370px",
            height:"290px"
        },2000).delay(4000); //termina animate
        
      $(this).animate({
            marginLeft:"0px",
            width:"160px",
            height:"130px"
        },1500);//termina click , func q gestiona el evento
        
     });
         
     
         $("img.c1").before("<h5 style='color: brown'>click <br>on the <br>img --></h5>");
        
             
>>>>>>> 0d41c125e582327b4d8ce71152b3d8282d1bbc3e
 });