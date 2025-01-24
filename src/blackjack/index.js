import _ from "underscore";
import "../style.css";
import { crearDeck, pedirCarta, turnoComputadora, crearCarta, acumularPuntos } from "./usecases/index";

const miModulo = (() => {
  "use strict";

  //  No es adecuado inicializar un array con los nombres de las cartas

  const tipos = ["C", "D", "H", "S"],
    cartasEspeciales = ["A", "J", "Q", "K"];
  let deck = [],
    puntosJugadores = [];

  //  Referencias del HTML
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  const divCartasJugadores = document.querySelectorAll(".divCartas"),
    puntosHTML = document.querySelectorAll("small");

  //  Esta función crea un nuevo deck
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, cartasEspeciales);

    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  //  Eventos
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, puntosJugadores, puntosHTML, 0);

    crearCarta(carta, divCartasJugadores[0]);

    if (puntosJugador > 21) {
      console.warn("Lo siento mucho, perdiste.");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosHTML, puntosJugadores, deck, divCartasJugadores);
    } else if (puntosJugador === 21) {
      console.warn("21, genial!");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosHTML, puntosJugadores, deck, divCartasJugadores);
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosHTML, puntosJugadores, deck, divCartasJugadores);
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego,
  };
})();