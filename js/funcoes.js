$(function() {

	var letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    // Json array
    var letraA =  [
        {"id":'1',"nome": "Alberto", "email": "felipe@clickn.com.br"},
        {"id":'2',"nome": "Ana", "email": "ana@clickn.com.br"},
        {"id":'3',"nome": "Aldo", "email": "aldo@clickn.com.br"}
    ];
    

     var B = [ {nome: 'Blberto'}, 
    		  {nome: 'Bdemir'}, 
    		  {nome: 'Bugusto'},
    		  {nome: 'Bruno'}
     ];

    

	

	//------------------------------------

	for (i in letras ) {
    
   		$('#lista_letras').append('<li><a href="#'+letras[i]+'" data-toggle="tab">'+letras[i]+'</a></li>');  
                
    }

   
    // listando itens do array Json 
    //var link_letras;
    $(letraA).each(function(index, value){
       
        $(".list-group").append('<a href="#" class="list-group-item" id="' + this.id +'" >' + this.nome + " | " + this.email + '</a>');

    });

    //  tratando classes css
    $( ".list-group a" ).first().addClass( "active" );
    $("#lista_letras li:first").addClass("active");

    $(".list-group a").click(function()  {
       $( ".list-group a" ).removeClass( "active" );
       $(this).addClass( "active" );

    });


    // Quando clicar no nome carregar dados para a div principal
     $(".list-group a").click(function(event) {
            //limpar campos
            $("#nome").empty();
            $("#email").empty();

            //recuperar id do array no item clicado
            var idPessoa = $(this).attr('id');

            //escrever dados na tela
            $("#nome").append( letraA[idPessoa-1].nome );
            $("#email").append( letraA[idPessoa-1].email );

     });



             //enviar dados do form modal para json
             $('#btnSalvarContato').click(function() {
                
                $.ajax({
                    type: 'POST',
                    url: 'action.php',
                    data: $('form#formNovoContato').serialize()
                 
                });

            });




 
});