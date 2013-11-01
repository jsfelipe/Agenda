$(function() {

    letra = 'A';
	var letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    

    //Carregar lista

    function carregarLista(letra){
        $.ajax({
            url: 'listar.php',
            type: 'post',
            dataType: 'json',
            data: {'letra': letra},
            success: function(dados){
                //console.log(dados);
                // listando itens do array Json 
                //var link_letras;
                $(".list-group").empty();
                $(dados).each(function(index, value){
                    $(".list-group").append('<a href="#" class="list-group-item" id="' + index +'" >' + this.nome + " | " + this.email + '</a>');
                        //console.log(index);
                        //console.log(value);
                });

            }

        }).done(function(){
            //  tratando classes css
            $( ".list-group a" ).first().addClass( "active" );
            

            $(".list-group a").click(function()  {
            $( ".list-group a" ).removeClass( "active" );
            $(this).addClass( "active" );

        });
    });

        
        
        
        
    }
    
     


	//------------------------------------

    // listando menu de letras
	for (i in letras ) {
    
   		$('#lista_letras').append('<li><a href="#'+letras[i]+'" data-toggle="tab">'+letras[i]+'</a></li>');  
                
    }


    $('#lista_letras a').click(function() {
        letra = $(this).attr('href');
        letra = letra.split('#')[1];
        console.log(letra);
        carregarLista(letra);
    });

    // recuperando contatos de determinada letra



    $("#lista_letras li:first").addClass("active");
   


    // Quando clicar no nome carregar dados para a div principal
     $(".list-group a").click(function(event) {
            
            //recuperar id do array no item clicado
            var index = $(this).attr('id');

            // adicionar itens do array no html
            $("#nome").html( letras[index].nome );
            $("#email").html( letras[index].email );

     });



     //enviar dados do form modal para json
     $('#btnSalvarContato').click(function() {
        
        $.ajax({
            type: 'POST',
            url: 'action.php',
            dataType: 'json',
            data: $('form#formNovoContato').serialize(),
            success: function(data) {
                  if (data == 1){
                    $('#myModal').modal('hide');
                    $('#msg_alert').html("Contato cadastrado com sucesso!");
                    $(".alert").removeClass("hide");
                    $('.alert').css( "display","" );
                    $('.alert').addClass("show alert-success");
                    $('.alert').delay(5000).fadeOut();
                    carregarLista(letra)

                  }else{
                    $('#myModal').modal('hide');
                    $('#msg_alert').html("Erro no cadastro, tente novamente!");
                    $(".alert").removeClass("hide");
                    $('.alert').css( "display","" );
                    $('.alert').addClass("show alert-danger");

                  } 

            }
         
        });

    });

     // alert mensagem sucesso ou erro
    /* setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function(){
            $(this).removeClass("show"); 
            $(this).addClass("hide"); 
        });
    }, 5000); */


 carregarLista('A')
});