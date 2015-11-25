// $(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded) 
	// completamente. 
	// Esto garantiza que si amarramos(bind) una función a un elemento 
	// de HTML este exista ya en la página. 

// });

// Una manera corta de escribir document.ready
$(function(){

	$('#new_comment_button').on("click", function(evento){

    //first stage: for preventing any default, stop HTML and don't do 'redirect to'
    evento.preventDefault();
    //it gets a url from 'form'
    var url = $('#new_comment_button').attr('action');
    //to do a Post, it gets a url (url)
    $.post(url,function(response_data){
 
	    $('#show_form').append(response_data);
			$('#new_comment').on("submit", function(evento){

		    //first stage: for preventing any default, stop HTML and don't do 'redirect to'
		    evento.preventDefault();
		    //it gets a url from 'form'
		    var url = $('#new_comment').attr('action');
		    var data = $('#new_comment').serialize();
	      //to do a Post, it gets a url (url)
	      $.post(url,data,function(response_data){
		      console.log(response_data);

		      $('#new_comment_list').append(response_data);
	        $('#show_form').html("");
	      });
			});
	  });
  });
  
});




