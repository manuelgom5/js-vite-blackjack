/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck
 * @returns {String} retorna la carta que quedó barajada arriba cuando el jugador pide una
 */
//  Esta función me permite tomar una carta
export const pedirCarta = (deck) => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck.";
    }
    return deck.pop();
};

export default pedirCarta;