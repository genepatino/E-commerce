/**
 * This function allows to calculate the price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} acum: Total price
 */

export const totalProductsPrice = (products) => {
    let totalPrice = products.reduce((acum, product) => acum + (product.price * product.quantity), 0)
    return Number(totalPrice.toFixed(2))
}