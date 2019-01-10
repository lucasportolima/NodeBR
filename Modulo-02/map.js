const service = require('../service')

const main = async () => {
    try {
        const result = await service.obterPessoa('a')
        const names = []

        // result.results.forEach(pessoa => {
        //     names.push(pessoa.name)
        // });

        const aux = result.results.map(pessoa => pessoa.name);

        console.log(aux)
    } catch (error) {
        console.error('error interno', error)
    }
}

main()