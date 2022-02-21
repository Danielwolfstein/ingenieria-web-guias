    function onclickenbutton(msj){
     saludo ="Hola \n Bienvenido a Javascipt:"+ msj;
     alert(saludo);
   }

    $(documet).ready(function(){
    $(".miclase" ).click(function(){
     let text=$(this).val();
     onclickenbutton(text);
     })
    })