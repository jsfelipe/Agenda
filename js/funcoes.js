$(function() {

	var letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var A = [ {nome: 'Alberto'}, 
    		  {nome: 'Ademir'}, 
    		  {nome: 'Augusto'}
     ];

     var B = [ {nome: 'Blberto'}, 
    		  {nome: 'Bdemir'}, 
    		  {nome: 'Bugusto'},
    		  {nome: 'Bruno'}
     ];

    $.each(A, function() {

    	$.each(this, function(i, value) {

        	console.log(i + '=' + value);

	    });

	});

	$.each(B, function() {

    	$.each(this, function(i, value) {

        	console.log(i + '=' + value);

	    });

	});

	//------------------------------------

	for (i in letras ) {
    
   		$('#lista_letras').append('<li><a href="#'+letras[i]+'" data-toggle="tab">'+letras[i]+'</a></li>');  
                
    }

    for (i in A ) {
    	$('.list-group').append('<a href="#" class="list-group-item active">'+A[i]+'</a>')   ;    
	}
 
});