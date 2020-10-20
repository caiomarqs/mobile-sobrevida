const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?(\.[a-z]+)?$/i;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;


/**
 * Metodode de validação de cadastro, 
 * verifica se nome, email, cpf uf e cidade são validos e se a senha possuiu os requisitos: 
 *  - minuscula;
 *  - maiscula;
 *  - caractere especial;
 *  - numero;
 *  - acima de 4 caracteres.
 * 
 * @param {string} email 
 * @param {string} senha
 */
const cadastroValidation = (nome, email, senha, cpf, uf, cidade) => {
    const thisErrors = []

    if (nome.trim().length < 2) {
        thisErrors.push('Nome inválido')
    }

    if(nome.substr(nome.indexOf(' ') + 1) === nome || nome.substr(nome.indexOf(' ') + 1) === ''){
        thisErrors.push('Insira o nome completo')
    }

    if (!regexEmail.test(email)) {
        thisErrors.push('Email inválido')
    }

    if (!regexPassword.test(senha)) {
        thisErrors.push('A senha deve conter no minimo 4 caracteres com digitos e maiscula e minusculas')
    }

    if (!validateCpf(cpf)) {
        thisErrors.push('CPF inválido')
    }

    if (uf === 0) {
        thisErrors.push('Selecione um estado')
    }

    if (uf !== 0 && cidade === 0) {
        thisErrors.push('Selecione uma cidade')
    }

    return [thisErrors.length === 0, thisErrors]
}


/**
 * Teste da veracidade do cpf
 * 
 * @param {string} strCpf 
 */
const validateCpf = (strCpf) => {

    let soma;
    let resto;

    if (strCpf.trim().length !== 0) {

        let cpf = strCpf
            .replace('.', "")
            .replace('.', "")
            .replace('-', "")

        soma = 0;
        if (cpf === "00000000000") return false;

        for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpf.substring(9, 10))) return false;

        soma = 0;
        for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpf.substring(10, 11))) return false;
        return true;

    }

    return false
}

export { cadastroValidation }