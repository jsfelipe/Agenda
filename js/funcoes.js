$(function() {

    letra = 'A';
	var letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    contatos = new Array();

    //Carregar lista de contatos de determinada letra
    function carregarLista(letra){
        $("#carregando").show();
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
                    //console.log(index,value);

                        // transforma a primeira letra em maiuscula da lista de nomes
                        listanomes = this.nome;
                        listanomes = listanomes.toLowerCase().replace(/\b[a-z]/g, function(txtVal) {
                                        return txtVal.toUpperCase();    
                                     });
                        //console.log(listanomes);
                     // escreve lista de nomes na tela       
                    $(".list-group").append('<a href="#" class="list-group-item" id="' + this.id_contato +'" >' + listanomes + '</a>');
                        contatos[this.id_contato] = this;                  
                });
                $("#carregando").hide();
            },
                error: function (dados) {  
                 $("#carregando").hide();
                 alert('Não existem registros');
                   
            } 

        }).done(function(){
            //  tratando classes css
            $( "div.list-group a" ).first().addClass( "active" );
            
            $(".list-group a").click(function()  {
            $( ".list-group a" ).removeClass( "active" );
            $(this).addClass( "active" );


        });
    });
      
        
    }
    // carregar função com a letra A assim que entra na página
     carregarLista('A')
	//------------------------------------

    // listando menu de letras
	for (i in letras ) {
    
   		$('#lista_letras').append('<li><a href="#'+letras[i]+'" data-toggle="tab">'+letras[i]+'</a></li>');  
                
    }

    


    // pegar a letra do menu esquerdo e passa para a função
    $('#lista_letras a').click(function() {
        $('.list-group').empty();
        letra = $(this).attr('href');
        //tira o # do href
        letra = letra.split('#')[1];
        carregarLista(letra);
    });


    $("#lista_letras li:first").addClass("active");
   


    // Quando clicar no nome carregar dados para a div principal
     $(document).on("click", ".list-group a", function(event) {
            event.preventDefault();

            //recuperar id do array no item clicado
            var index = $(this).attr('id');

            // adicionar itens do array no html
            $("#idcontato").attr({value: contatos[index].id_contato});
            $("#nome").html( contatos[index].nome );
            $("#email").html( contatos[index].email );
            $("#celular").html( contatos[index].celular );
            $("#casa").html( contatos[index].casa );
            $("#endereco").html( contatos[index].endereco );

            // adicionando dados para o link do google maps
            var end = $("#endereco").text();
            $("#linkgoogle").attr({
                href: 'https://maps.google.com.br/maps?q='+end,
                target: '_blank'   
            });

           $(".tab-conteudo").show();

     });



    //enviar dados do form modal para json
    $('#btnSalvarContato').click(function() {
        
        $("#carregando").show();
        // Se for alteração
        if ($("#idalterar").val() != "" ){
                //console.log('Alteração');
                var id_alterar = $('#idalterar').val();
                // Cadastrar //enviar dados do form modal para json
                $.ajax({
                    type: 'POST',
                    url: 'update.php',
                    dataType: 'json',
                    data: {'id' : id_alterar,
                           'nome' : $('#txtnome').val() 
                    },
                    success: function(data) {
                       
                        if (data == 1){
                            $('#modalCadastro').modal('hide');
                            $('#msg_alert').html("Contato alterado com sucesso!");
                            $('.alert').css( "display","block" );
                            $('.alert').addClass("alert-warning");
                            carregarLista(letra)

                        }else{
                            $('#modalCadastro').modal('hide');
                            $('#msg_alert').html("Erro, tente novamente!");
                            $(".alert").removeClass("hide");
                            $('.alert').css( "display","" );
                            $('.alert').addClass("show alert-danger");
                        } 
                    }
                 
                }).done(function(){
                    //  tratando classes css
                    $('.alert').delay(5000).fadeOut();

                });

                $("#carregando").hide();
        }else{

                // Cadastrar //enviar dados do form modal para json
                $.ajax({
                    type: 'POST',
                    url: 'action.php',
                    dataType: 'json',
                    data: $('form#formNovoContato').serialize(),
                    success: function(data) {
                        if (data == 1){
                            $('#modalCadastro').modal('hide');
                            $('#msg_alert').html("Contato cadastrado com sucesso!");
                            $(".alert").removeClass("hide");
                            $('.alert').css( "display","" );
                            $('.alert').addClass("show alert-success");
                            $('.alert').delay(5000).fadeOut();
                            carregarLista(letra)

                        }else{
                            $('#modalCadastro').modal('hide');
                            $('#msg_alert').html("Erro no cadastro, tente novamente!");
                            $(".alert").removeClass("hide");
                            $('.alert').css( "display","" );
                            $('.alert').addClass("show alert-danger");
                        } 
                    }
                 
                });
        }

    });

    
    //  filtrar lista de nomes
    $("input#edit_busca").keyup(function(event) {

        var texto = $(this).val();
        $(".list-group a").css("display", "block");

        $( ".list-group a" ).each(function() {
            if ($(this).text().toUpperCase().indexOf(texto.toUpperCase()) < 0){
                $(this).css({display: 'none'});
            }
        });
    });




    //deletar contato
     $('#deletar_contato').click(function() {
        
        $("#carregando").show();
        var id_delete = $('#idcontato').val();
        //console.log(id_delete);
        $.ajax({
            type: 'POST',
            url: 'deletar.php',
            dataType: 'json',
            data: {'del':id_delete},
            success: function(data) {
                  if (data == 1){
                    $('#myModal').modal('hide');
                    $('#msg_alert').html("Contato deletado com sucesso!");
                    $('.alert').css( "display","block" );
                    $('.alert').addClass("alert-warning");
                    $('.alert').delay(5000).fadeOut();
                    carregarLista(letra);
                    $(".tab-conteudo").hide();
                  }else{
                    $('#myModal').modal('hide');
                    $('#msg_alert').html("Erro, tente novamente!");
                    $('.alert').css( "display","block" );
                    $('.alert').addClass("alert-danger");
                    $('.alert').delay(5000).fadeOut();
                  } 
            }
         
        });

    });


    //Mostrar contato para alteração
    $('#link_editar').click(function() {
        $("#carregando").show();
        var idalterar = $('#idcontato').val();
        $.ajax({
            url: 'alterar.php',
            type: 'post',
            dataType: 'json',
            data: {'alt':idalterar},
            success: function(dados){
                //console.log(dados);                
                $("#carregando").hide();
            },
                error: function (dados) {  
                 $("#carregando").hide();
                 //alert('Não existem registros');
                   
            } 

        }).done(function(dados){
            event.preventDefault();
            $('#modalCadastro').modal('show');

            //recuperar id do array no item clicado
            var index = dados;
            //console.log(index[0]);

            // adicionar itens do array no html
            $("#idalterar").attr({value: index[0].id_contato});
            $("#txtnome").val( index[0].nome );
            $("#txtemail").val( index[0].email );
            $("#txtcelular").val( index[0].celular );
            $("#txtcasa").val( index[0].casa );
            $("#txtendereco").val( index[0].endereco );

        });
    });
    

    //mascaras form modal cadastro (plugin Masked Input)
    $('#txtcasa').mask('(99) 9999-9999');

    /* Para numero de telefone com  9 digitos
      por: Irineu <irineujunior@gmail.com>
    */
    $('#txtcelular').focusout(function(){
        var phone, element;
        element = $(this);
        element.unmask();
        phone = element.val().replace(/\D/g, '');
        if(phone.length > 10) {
            element.mask("(99) 99999-999?9");
        } else {
            element.mask("(99) 9999-9999?9");
        }
    }).trigger('focusout');

    // tooltip link google maps
    $('.tip').tooltip('hide')
   
});