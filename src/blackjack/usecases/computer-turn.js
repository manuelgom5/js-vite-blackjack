import { pedirCarta, valorCarta, crearCarta } from "./";
import { acumularPuntos } from './accumulate-points';
/**
 * Turno de la computadora
 * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosJugadores Elemento HTML para mostrar los puntos
 * @param {Array<String>} deck Array con las cartas de la baraja
 *
 */
export const turnoComputadora = (puntosHTML, puntosJugadores, deck = [], divCartas) => {
    if (!puntosHTML) throw Error('Argumento puntosHTML son necesarios');
    if (!puntosJugadores) throw Error('Argumento puntosJugadores es necesario.');
    if (!deck) throw Error('Argumento deck es necesario.');
    if (!divCartas) throw Error('Argumento divCartas es necesario.');
  
    let puntosMinimos = puntosJugadores[0];
    let puntosComputadora = 0; 
  
    do {
      const carta = pedirCarta(deck);
      puntosComputadora = acumularPuntos(carta, puntosJugadores, puntosHTML, puntosHTML.length-1);
      crearCarta(carta, divCartas[puntosHTML.length - 1]);
    } while (puntosMinimos > puntosComputadora && puntosMinimos <= 21);
  
    setTimeout(() => {
        puntosMinimos === puntosComputadora
          ? alert("Nadie gana.")
          : puntosMinimos > 21
          ? alert("Computadora gana")
          : puntosComputadora > 21
          ? alert("Jugador gana.")
          : alert("Computadora gana");
    }, 100);
};
  
export default turnoComputadora;