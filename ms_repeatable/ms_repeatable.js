/*
 * Autho: Marcelo Menezes S
 * Description: Repeatable Inputs
 */

 ms_disabled();

 $('.ms-btn-repeat').click( function(){
 	var ms_main = $(this).closest('.ms_repeat');
 	var ms_inputs = $(ms_main).children('.ms_inputs');
 	var ms_repeatable_class = $(ms_inputs).find('.ms_repeatable').first().attr("class");
 	var ms_repeatable = $(ms_inputs).find('.ms_repeatable').first().html();
 	var ms_repeatable_input = $(ms_inputs).children();
 	$(ms_inputs).append('<div class="' +ms_repeatable_class+ '">'+ms_repeatable+'</div>');

 	ms_disabled();
 	ms_cont(ms_main);
 	ms_remove(ms_main);
 });

/*
 * Função para remoção do input na qual foi adicionado, e prevent click no último input
 */
 function ms_remove(ms_main){
 	$('.ms-btn-delete').click(function ( e ){
 		var ms_remove_inputs = $(this).closest('.ms_repeat').children('.ms_inputs').find('.ms_repeatable').length;
 		if(ms_remove_inputs == 1){
 			e.stopPropagation();
 		}
 		else{
 			$(this).closest('.ms_repeatable').remove();
 			ms_disabled();
 			ms_cont(ms_main);
 		}
 	});
 }

/*
 * Altera o valor do campo ms_cont a cada mudança nos inputs
 */
 function ms_cont(ms_main){
 	var ms_count = $(ms_main).children('.ms_inputs').find('.ms_repeatable').length;
 	$(ms_main).find('.ms_count').val(ms_count);
 }

/*
 * Desabilita botão remover quando é o último elemento dentro da div
 * Caso seja removido o último elemento a copia da div não irá funcionar 
 */
 function ms_disabled(){
 	$('.ms_repeat').each(function(){
 		var ms_remove_inputs = $(this).children('.ms_inputs').find('.ms_repeatable').length;
 		if(ms_remove_inputs == 1){
 			$(this).children('.ms_inputs').find('.ms-btn-delete').addClass('disabled');
 		}
 		else{
 			$(this).children('.ms_inputs').find('.ms-btn-delete').removeClass('disabled');
 		}
 	});
 }
