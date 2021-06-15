function start() { // Inicio da função start()

	$("#inicio").hide(); // oculta a div inicio (mensagem inicial)

	// Crias as divs dentro da div fundogame
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

	//Principais variáveis do jogo
	var jogo = {}
	var TECLA = {
		W: 87, //Movimento para cima
		S: 83, //Movimento para baixo
		D: 68 //Disparos
	}

	jogo.pressionou = [];

	//Verifica se o usuário pressionou alguma tecla	

	$(document).keydown(function (e) {
		jogo.pressionou[e.which] = true;
	});


	$(document).keyup(function (e) {
		jogo.pressionou[e.which] = false;
	});

	//Game Loop
	jogo.timer = setInterval(loop, 30);

	function loop() {

		movefundo();
		movejogador();

	} // Fim da função loop()

	//Função que movimenta o fundo do jogo

	function movefundo() {

		esquerda = parseInt($("#fundoGame").css("background-position"));
		$("#fundoGame").css("background-position", esquerda - 1);

	} // fim da função movefundo()

	function movejogador() {

		if (jogo.pressionou[TECLA.W]) {
			var topo = parseInt($("#jogador").css("top"));
			$("#jogador").css("top", topo - 10);

			if (topo<=0) {
				$("#jogador").css("top",topo+10);
			}

		}

		if (jogo.pressionou[TECLA.S]) {

			var topo = parseInt($("#jogador").css("top"));
			$("#jogador").css("top", topo + 10);

			if (topo>=434) {	
				$("#jogador").css("top",topo-10);		
			}
		}

		if (jogo.pressionou[TECLA.D]) {

			//Chama função Disparo	
		}

	} // fim da função movejogador()
} // Fim da função start

