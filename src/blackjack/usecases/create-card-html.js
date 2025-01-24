/**
 * 
 * @param {String} carta 
 * @param {Number} turno 
 */
export const crearCarta = (carta, divCartas) => {
    if (!carta) throw Error('La carta es un argumento obligatorio.');
    if (!divCartas) throw Error('Argumento divCartas es necesario.');
    
    const imgCarta = document.createElement("img");
    imgCarta.src = `./assets/img/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartas.append(imgCarta);
};
  
export default crearCarta;