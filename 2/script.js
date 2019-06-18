$( document ).ready(function() {
	alert("Je tiens juste a preciser que Jeanne est quelqu un de cool. Longue vie a twitch");
	monTexte="Retiré du panier"
	monTexte2="Ajouté au panier"

	$(this).html(monTexte)

	$("p").on( "click", function() {
		if($( this ).hasClass('red')){
			$( this ).removeClass('red')
			$( this).html(monTexte);
		}else{
			$( this ).addClass('red')
			$(this).html(monTexte2);
		}	

	});
});
