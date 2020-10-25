import { GRAU_FAMILIAR } from '../../constants'

/**
 * Metodo que falidao nome e o contato do familiar
 * @param {string} nome 
 * @param {string} contato 
 */
const familiarNomeContatoValidation = (nome, contato) => {
    const thisErrors = []

    if (nome.trim().length < 2) {
        thisErrors.push('Nome do familiar inválido')
    }

    if (nome.substr(nome.indexOf(' ') + 1) === nome || nome.substr(nome.indexOf(' ') + 1) === '') {
        thisErrors.push('Insira o nome completo do familiar')
    }

    if (contato.trim().length < 15 || contato.trim().length > 16) {
        thisErrors.push('Insira um telefone válido para o familiar')
    }

    return [thisErrors.length === 0, thisErrors]
}

const familiarParentescoValidation = (parentesco, descParentesco) => {
    const thisErrors = []

    //parentesco === "OUTRO"
    if (parentesco === GRAU_FAMILIAR[3].value) {
        if (descParentesco === '' || descParentesco === ' ') {
            thisErrors.push('Insira uma descrição válida!')
        }
    }

    return [thisErrors.length === 0, thisErrors]
}


export { familiarNomeContatoValidation, familiarParentescoValidation }