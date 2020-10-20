const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;

const changePassValidation = (senha) => {
    const thisErrors = []

    if (!regexPassword.test(senha)) {
        thisErrors.push('A senha deve conter no minimo 4 caracteres com digitos e maiscula e minusculas')
    }

    return [thisErrors.length === 0, thisErrors]
}

export { changePassValidation }