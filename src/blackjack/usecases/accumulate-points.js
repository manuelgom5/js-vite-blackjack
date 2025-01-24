import { valorCarta } from './value-card';

//  Turno: 0 = primer jugador y el último será la computradora
//  TENGO QUE HACER QUE TENGAN ACCESO A LA CARTA, PUNTOSHTML Y PUNTOSJUGADORES
export const acumularPuntos = (carta, puntosJugadores, puntosHTML, turno) => {
    if (!carta) throw Error('Argumento carta es necesario.');
    if (!puntosJugadores) throw Error('Argumento puntosJugadores es necesario.');
    if (!puntosHTML) throw Error('Argumento puntosHTML es necesario.');

    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    
    return puntosJugadores[turno];
};
  
export default acumularPuntos;