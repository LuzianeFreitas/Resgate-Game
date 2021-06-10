function start() { // Inicio da função start()

	$("#inicio").hide(); // oculta a div inicio (mensagem inicial)
	
    // Crias as divs dentro da div fundogame
	$("#fundoGame").append("<div id='jogador'></div>");
	$("#fundoGame").append("<div id='inimigo1'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo'></div>");

} // Fim da função start