/**
 * Metodo para odernação de um array de objetos, 
 * onde a ordenação pode ser feita pelo o valor de uma chave comum entre todos os objetos.
 * 
 * e.g. sortObjectArrayByKey([{name: foo}, {name: bar}], 'name')
 *      => return [{name: bar}, {name: foo}]
 * @param {object[]} arr 
 * @param {string} key 
 */
const sortObjectArrayByKey = (arr, key) => {
    return arr.sort((a, b) => {
        if (a[`${key}`] > b[`${key}`]) {
            return 1
        }
        if (a[`${key}`] < b[`${key}`]) {
            return -1
        }
        return 0
    })
}

export { sortObjectArrayByKey }