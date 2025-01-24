/**
 * Esta función recibe el primer valor de la carta y calcula su puntuación
 * @param {String} carta Ejemplo: 2C, AD, JH, QS
 * @returns {Number} retorna el valor de la carta
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
  
export default valorCarta;