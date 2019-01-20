const axios = require('axios')
const EventEmitter = require('events')

const URL = `https://swapi.co/api/people`

// Modulo-02
// const obterPessoa = async (nome) => {
//     const url = `${URL}/?search=${nome}&format=json`
//     const response = await axios.get(url)
//     return response.data
// }

// Modulo-03
const obterPessoa = async (nome) => {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    console.log(response.data)
    return response.data.results.map(mapearPessoa)
}

const mapearPessoa = (item) => {
    return {
        nome: item.name,
        peso: item.height
    }
}

module.exports = {
    obterPessoa
}

// class MeuEmissor extends EventEmitter {}
// const meuEmissor = new MeuEmissor();

// class Service {
//     constructor () {}

//     async obterPessoa(nome) {
//         const url = `${URL}/?search=${nome}&format=json`
//         const response = await axios.get(url)
//         return response.data
//     }
// }

// const service = new Service();
// const stdin = process.openStdin()

// const obterPessoa = async (name) =>{
//     await service.obterPessoa(name)
//         .then((data) => {
//             console.log(`${name}: ${data}`)
//         })
//         .catch((error) => {
//             console.log('Error >>', error)
//         })
// }

// console.log('Busque um personagem pelo nome: ')
// stdin.addListener('data', (value) => {
//     obterPessoa(value)    
// })