/**
 * Metódo de mascarento de texto, 
 * aceitando letras e caracteres de acentuação
 * 
 * @param {string} text
 */
const onlyStringMask = (text) => {
    let regexValue = text.replace(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g, "")
    return regexValue
}

/**
 * Metedo de mascaramento para o cpf
 * 
 * @param {string} text 
 */
const cpfMask = (text) => {
    let regexValue = text
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2') // 000.000
        .replace(/(\d{3})(\d)/, '$1.$2') // 000.000.000
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2') //000.000.000-00

    return regexValue
}

/**
 * Metodo para mascaramento de contatos
 * 
 * @param {string} value 
 */
const contatoMask = (value) => {

    let regexValue;

    if (value.length > 14) {
        regexValue = value
            .replace(/\D/g, "")                 //Remove tudo o que não é dígito
            .replace(/^(\d{2})(\d{1})(\d)/g, "($1) $2 $3") //Parenteses
            .replace(/(\d{4})(\d)/, "$1-$2") //ifem em 5
    }
    else {
        regexValue = value
            .replace(/\D/g, "")                 //Remove tudo o que não é dígito
            .replace(/^(\d\d)(\d)/g, "($1) $2")  //Parenteses
            .replace(/(\d{4})(\d)/, "$1-$2") //ifem em 5
    }


    return regexValue
}


export { onlyStringMask, cpfMask, contatoMask }