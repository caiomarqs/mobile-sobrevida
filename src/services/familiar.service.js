import axios from 'axios'

const REACT_APP_SERVER_URL = 'https://sobrevida-backend-dev.herokuapp.com'

const getAllFamiliaresByUser = async (idUser, token) => {
    return axios({
        baseURL: REACT_APP_SERVER_URL,
        method: 'GET',
        url: `/familiar?codDoador=${idUser}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

const postFamiliar = async (familiar, idUser, token) => {
    return axios({
        baseURL: REACT_APP_SERVER_URL,
        method: 'POST',
        url: '/familiar',
        data: {
            nome: familiar.nome.substr(0, familiar.nome.indexOf(' ')),
            sobreNome: familiar.nome.substr(familiar.nome.indexOf(' ') + 1),
            parentesco: familiar.parentesco,
            descParentesco: familiar.descParentesco === undefined ? '' : familiar.descParentesco,
            contatos: [
                {
                    numero: familiar.numero
                }
            ],
            codDoador: idUser
        },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

const postFamiliarContato = async (idFamiliar, contato, token) => {
    return axios({
        baseURL: REACT_APP_SERVER_URL,
        method: 'POST',
        url: `/familiar/${idFamiliar}/contato`,
        data: {
            numero: contato
        },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

const putFamiliarContato = async (idFamiliar, contato, codContato, token) => {
    return axios({
        baseURL: REACT_APP_SERVER_URL,
        method: 'PUT',
        url: `/familiar/${idFamiliar}/contato/${codContato}`,
        data: {
            numero: contato
        },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

const deleteFamiliarContato = async (idFamiliar, codContato, token) => {
    return axios({
        baseURL: REACT_APP_SERVER_URL,
        method: 'DELETE',
        url: `/familiar/${idFamiliar}/contato/${codContato}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}


const deleteFamiliar = async (idFamiliar, token) => {
    return axios({
        baseURL: REACT_APP_SERVER_URL,
        method: 'DELETE',
        url: `/familiar/${idFamiliar}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}
export {
    postFamiliar,
    deleteFamiliar,
    getAllFamiliaresByUser,
    putFamiliarContato,
    deleteFamiliarContato,
    postFamiliarContato
}