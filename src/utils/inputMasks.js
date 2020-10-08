const onlyStringMask = (text) => {
    let regexValue = text.replace(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g, "")
    return regexValue
}

const cpfMask = (text) => {
    let regexValue = text
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2') // 000.000
        .replace(/(\d{3})(\d)/, '$1.$2') // 000.000.000
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2') //000.000.000-00

    return regexValue
}


export { onlyStringMask, cpfMask }