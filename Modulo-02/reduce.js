const { obterPessoa } = require('../service')

const main = async () => {
    try {
        const { results } = await obterPessoa('a')
        const names = []

        // result.results.forEach(pessoa => {
        //     names.push(pessoa.name)
        // });

        const aux = results.filter(item => {
            return item.name.toLowerCase().indexOf(`lars`) === -1
        })
        .map(pessoa => parseInt(pessoa.height))
        .reduce((anterior, proximo) => {
            return anterior + proximo
        });

        console.log(aux)
    } catch (error) {
        console.error('error interno', error)
    }
}
 
main()