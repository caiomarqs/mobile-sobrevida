const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?(\.[a-z]+)?$/i;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;

/**
 * Metodode de validação do login, 
 * verifica se é um email valido e se a senha possuiu os requisitos: 
 *  - minuscula;
 *  - maiscula;
 *  - caractere especial;
 *  - numero;
 *  - acima de 4 caracteres.
 * 
 * @param {string} email 
 * @param {string} senha
 */
const loginValidation = (email, senha) => {
    const thisErrors = []
  
    if (!regexEmail.test(email)) {
        thisErrors.push('Insira um email válido')
    }

    if (!regexPassword.test(senha)) {
        thisErrors.push('A senha deve conter no minimo 4 caracteres com digitos e maiscula e minusculas')
    }

    

    return [thisErrors.length === 0, thisErrors]
}

export { loginValidation }